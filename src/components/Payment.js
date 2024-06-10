import React from 'react';

// Helper function to convert ArrayBuffer to Base64
function arrayBufferToBase64(buffer) {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
}

async function generateHMAC(data, secretKeyBase64) {
    // Convert secretKey from Base64 to ArrayBuffer
    const secretKeyArrayBuffer = Uint8Array.from(atob(secretKeyBase64), c => c.charCodeAt(0));
    const key = await crypto.subtle.importKey(
        'raw',
        secretKeyArrayBuffer,
        { name: 'HMAC', hash: { name: 'SHA-256' } },
        false,
        ['sign']
    );

    const signature = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(data));
    return arrayBufferToBase64(signature);
}

function Payment() {
    const handleSubmit = async (event) => {
        event.preventDefault();

        const merchantCode = process.env.REACT_APP_MERCHANT_CODE;
        const terminal = '001';
        const amount = '145'; // Monto en céntimos (1.45 EUR)
        const order = '144606858133'; // Número de pedido único
        const currency = '978'; // Código de la moneda (EUR)
        const transactionType = '0'; // Tipo de transacción (0 para autorización y pago)
        const merchantUrl = 'http://localhost:3000';
        const urlOK = 'http://localhost:3000';
        const urlKO = 'http://localhost:3000';
        const secretKeyBase64 = process.env.REACT_APP_SECRET_KEY;

        // Verificar si las variables de entorno están cargadas correctamente
        if (!merchantCode || !secretKeyBase64) {
            console.error('Las variables de entorno no están definidas');
            return;
        }

        // Crear los parámetros del formulario
        const params = {
            DS_MERCHANT_AMOUNT: amount,
            DS_MERCHANT_ORDER: order,
            DS_MERCHANT_MERCHANTCODE: merchantCode,
            DS_MERCHANT_CURRENCY: currency,
            DS_MERCHANT_TRANSACTIONTYPE: transactionType,
            DS_MERCHANT_TERMINAL: terminal,
            DS_MERCHANT_MERCHANTURL: merchantUrl,
            DS_MERCHANT_URLOK: urlOK,
            DS_MERCHANT_URLKO: urlKO,
        };

        // Convertir los parámetros a JSON y luego a Base64
        const jsonParams = JSON.stringify(params);
        const base64Params = btoa(jsonParams);

        try {
            // Generar la firma
            const signature = await generateHMAC(base64Params, secretKeyBase64);

            // Log de los datos del formulario y la firma HMAC generada
            console.log('Datos del formulario:', params);
            console.log('Firma HMAC generada:', signature);

            // Crear el formulario
            const form = document.createElement('form');
            form.method = 'POST';
            form.action = 'https://sis-t.redsys.es:25443/sis/realizarPago'; // URL del TPV Virtual
            form.target = '_blank'; // Abrir en una nueva pestaña

            // Agregar los parámetros al formulario como campos ocultos
            const merchantParamsInput = document.createElement('input');
            merchantParamsInput.type = 'hidden';
            merchantParamsInput.name = 'Ds_MerchantParameters';
            merchantParamsInput.value = base64Params;
            form.appendChild(merchantParamsInput);

            const signatureInput = document.createElement('input');
            signatureInput.type = 'hidden';
            signatureInput.name = 'Ds_Signature';
            signatureInput.value = signature;
            form.appendChild(signatureInput);

            const signatureVersionInput = document.createElement('input');
            signatureVersionInput.type = 'hidden';
            signatureVersionInput.name = 'Ds_SignatureVersion';
            signatureVersionInput.value = 'HMAC_SHA256_V1';
            form.appendChild(signatureVersionInput);

            // Agregar el formulario al documento
            document.body.appendChild(form);

            // Enviar el formulario después de un breve retraso para permitir que se muestren los logs
            setTimeout(() => {
                form.submit();
            }, 1000);
        } catch (error) {
            console.error('Error generando la firma HMAC:', error);
        }
    };

    return (
        <button onClick={handleSubmit}>Pagar</button>
    );
}

export default Payment;
