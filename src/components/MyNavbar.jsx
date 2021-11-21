import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link, useLocation } from 'react-router-dom'

const MyNavbar = (props) => {
  const location = useLocation()

  return (
    <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
      <Link to='/'>
        <Navbar.Brand>{props.brand}</Navbar.Brand>
      </Link>

      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='ml-auto'>
          <Link to='/menu'>
            <div
              className={
                'nav-link' + (location.pathname === '/menu' ? ' active' : '')
              }
            >
              Menu
            </div>
          </Link>
          <Link to='/reservations'>
            <div
              className={
                'nav-link' +
                (location.pathname === '/reservations' ? ' active' : '')
              }
            >
              Reservation
            </div>
          </Link>
          <Link to='/contact'>
            <div
              className={
                'nav-link' + (location.pathname === '/contact' ? ' active' : '')
              }
            >
              Contact
            </div>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default MyNavbar
