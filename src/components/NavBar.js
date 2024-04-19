import React from 'react'
import logo from '../images/logo512.png'


function NavBar() {
  return (
	<div className='nav'>
		<div className='nav-title col-3'>
			<img src={logo} alt='logo parking las praderas'/>
			<h1>Parkig las praderas</h1>
		</div>
		<div className='nav-menu col-6'>
			<h5>SERVICIOS</h5>
			<h5>PRECIOS</h5>
			<h5>UBICACIÓN</h5>
		</div>
		<div className='nav-social col-2'>
		<i class="fa-brands fa-instagram me-3"></i>
		<i class="fa-solid fa-location-dot"></i>
		</div>
	</div>
  )
}

export default NavBar
