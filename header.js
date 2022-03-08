import React from 'react';
import { Link } from 'react-router-dom';

const Header = () =>{
    var page = "";
    if(localStorage.getItem("vendorid")==null){
        page= <>
                <li className="nav-item">
                    <Link className="nav-link active" to="/register"> <i className="fa fa-user-plus"></i> Vendor Register </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active" to="/login"> <i className="fa fa-lock"></i> Vendoer Login </Link>
                </li>
              </>
    }else{
        page= <>
                 <li className="nav-item">
                    <Link className="nav-link active" to="/dashboard"> <i className="fa fa-cogs"></i> Dashboard </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active" to="/myproduct"> <i className="fa fa-suitcase"></i> My Product </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active" onClick={logout}> 
                        <i className="fa fa-user"></i> Welcome : {localStorage.getItem("fullname")} - Logout
                    </Link>
                </li>
              </>
    }
    return(
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <div className="container-fluid">
            <a className="navbar-brand" href="#">React E-commerce </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item">
                    <Link className="nav-link active" to="/"> <i className="fa fa-home"></i> Home </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active" to="/cart"> <i className="fa fa-shopping-cart"></i> My Cart </Link>
                </li>
                  {page}
                </ul>
            </div>
            </div>
        </nav>
    )
}

const logout = () =>{
    localStorage.clear();
    window.location.href="http://localhost:3000/#/login";
    window.location.reload();
}

export default Header;
       