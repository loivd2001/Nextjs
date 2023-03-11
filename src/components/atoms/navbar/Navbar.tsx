import * as React from 'react';
import Link from 'next/link';



export default function NavBar () {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="nav-link" href="/">Trang chu</Link>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link" href="/Product">Product</Link>
            </div>
            <div className="navbar-nav">
              <Link className="nav-link" href="/login">Login</Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
