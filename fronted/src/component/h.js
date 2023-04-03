import React from 'react'

const H = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a href="index.html" className="logo"><img src="images/logo.png"/></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
               <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                     <a className="nav-link" href="index.html">Home</a>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link" href="about.html">About</a>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link" href="cycle.html">Our Cycle</a>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link" href="shop.html">Shop</a>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link" href="news.html">News</a>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link" href="contact.html">Contact Us</a>
                  </li>
               </ul>
               <form className="form-inline my-2 my-lg-0">
                  <div className="login_menu">
                     <ul>
                        <li><a href="#">Login</a></li>
                        <li><a href="#"><img src="images/trolly-icon.png"/></a></li>
                        <li><a href="#"><img src="images/search-icon.png"/></a></li>
                     </ul>
                  </div>
                  <div></div>
               </form>
            </div>
            <div id="main">
               <span style="font-size:36px;cursor:pointer; color: #fff" onclick="openNav()"><img src="images/toggle-icon.png" style="height: 30px;"/></span>
            </div>
         </nav>
      
  )
}

export default H
