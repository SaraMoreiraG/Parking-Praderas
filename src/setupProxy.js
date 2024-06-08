const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/auth',
    createProxyMiddleware({
      target: 'https://api.bbva.com',
      changeOrigin: true,
      pathRewrite: {
        '^/auth': '/auth' // Path rewrite, optional
      }
    })
  );
  app.use(
    '/links',
    createProxyMiddleware({
      target: 'https://api.bbva.com',
      changeOrigin: true,
      pathRewrite: {
        '^/links': '/links' // Path rewrite, optional
      }
    })
  );
};
