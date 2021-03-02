import logo from '../Images/logo.png';

function Header({ onOpen }) {
  return (
    <header className="navbar">
      <img src={logo} alt="logo" className="logo"/>

      <nav className="navigation">
          <ul className="links">
            <li className="link"><a href="#.">Home</a></li>
            <li className="link"><a href="#.">News</a></li>
            <li className="link"><a href="#.">Contacts</a></li>
            <li className="link"><a href="#.">Support</a></li>
            <li className="link"><a href="#.">About Us</a></li>
          </ul>
      </nav>

      <div className="menu-icon" onClick={onOpen}>
        <div className="linha"></div>
        <div className="linha"></div>
        <div className="linha"></div>
      </div>
    </header>
  )
}

export default Header;