import Link from 'next/link'

const Header = () => {
    return ( 
        <header className="header_area" style={{background: 'white'}}>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
          <Link href="/">
          <a className="navbar-brand logo_h" ><img src="paddlbox-logo.png" alt="Paddlbox logo" /></a>
          </Link>
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
              <ul className="nav navbar-nav menu_nav ml-auto">
                <li className="nav-item">
                    <Link href="/cart">
                        <a className="btn btn-primary">Order</a>
                    </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
     );
}
 
export default Header;
