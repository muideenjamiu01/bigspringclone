import React, { Component } from 'react';


class Navbar extends React.Component{
  render() {
      return (
         <div className="section navbar">
           <div className="navbar-wrapper">
             <div data-collapse="medium" data-animation="default" data-duration={0} data-doc-height={1} data-no-scroll={1} role="banner" className="nav w-nav">
               <div className="container w-container">
                 <a href="/" aria-current="page" className="brand w-nav-brand w--current" aria-label="home">
                   <div className="nav-logo">
                     <img src="https://assets.website-files.com/5febafae11b85a17fd4f7b13/5febafae11b85a81804f7c74_bs-logo_black.svg" loading="lazy" alt="" className="nav_logo-image" />
                    </div>
                  </a>
                  <div data-w-id="447d7d37-ca0b-fba6-04a0-490b7af853f7" className="hiddenmenubutton w-nav-button">
                    <div className="nav-icon-wrapper"><div className="icon-2 w-icon-nav-menu" />
                    <div className="nav-bar-icon-wrapper"><div className="navbar-icon-line _1" />
                    <div className="navbar-icon-line _2" /><div className="navbar-icon-line _3" />
                  </div>
                </div>
              </div>
            </div>
            <nav role="navigation" id="nav-mob" className="nav-menu w-nav-menu">
              <a href="/demo" className="navlink mobile w-inline-block">
                <div>Sign Up </div>
                <img src="https://assets.website-files.com/5febafae11b85a17fd4f7b13/5febafae11b85a50994f7c86_black-right-arrow__12.svg" loading="lazy" alt="" className="nav-black-arrow" />
                <img src="https://assets.website-files.com/5febafae11b85a17fd4f7b13/5febafae11b85a81284f7c7c_blue-right-arrow__12.svg" loading="lazy" alt="" className="nav-blue-arrow" />
              </a>
              <a href="/about" className="navlink w-nav-link" >About </a>
              <div  className="drophidden w-dropdown" >
                <div className="navlink w-dropdown-toggle" id="w-dropdown-toggle-0" aria-controls="w-dropdown-list-0" aria-haspopup="menu" aria-expanded="false" role="button" tabIndex={0}>
                  <div>Customers</div>
              </div>
              <nav className="c-menu_list w-dropdown-list" id="w-dropdown-list-0" aria-labelledby="w-dropdown-toggle-0">
                <div className="trangle-before" />
                <a href="/customers/success-stories" className="withline heebo_15 w-dropdown-link" tabIndex={0}>Success Stories</a>
                <a href="/customers/use-cases" className="noline heebo_15 w-dropdown-link" tabIndex={0}>Use Cases</a>
              </nav>
            </div>
            <a href="/customers/success-stories" className="navlink mobile w-nav-link">Success Story</a>
            <a href="/customers/use-cases" className="navlink mobile w-nav-link" >Use Case</a>
            <a href="/content" className="navlink w-nav-link">Content</a>
            <a href="/careers" className="navlink w-nav-link">Careers</a>
            <a href="/news" className="navlink w-nav-link">News</a>
            <a href="/contact" className="navlink bottom-border w-nav-link" >Contact </a>
            <a data-w-id="b6cce794-338b-b9ad-7678-33c8914fc860" href="#" className="cta-button-3 cyan-btn nav-btn w-inline-block" >
              <div className="blue-btn-text">Sign In</div>
              <div className="arr-box"><img src="https://assets.website-files.com/5febafae11b85a17fd4f7b13/5febafae11b85a1cb64f7c7e_white-right-arrow__12.svg" loading="lazy" alt="" className="arrow-1" />
                <img src="https://assets.website-files.com/5febafae11b85a17fd4f7b13/5febafae11b85a1cb64f7c7e_white-right-arrow__12.svg" loading="lazy" alt="" className="arrow-2" /> 
              </div>
            </a>
            <a data-w-id="a91d9d8c-81cf-ab49-3d4d-8fab9a37ad18" href="#" className="cta-button blue-btn nav-btn w-inline-block">
              <div className="blue-btn-text">Sign Up</div>
              <div className="arr-box">
                <img src="https://assets.website-files.com/5febafae11b85a17fd4f7b13/5febafae11b85a1cb64f7c7e_white-right-arrow__12.svg" loading="lazy" alt="" className="arrow-1" />
                <img src="https://assets.website-files.com/5febafae11b85a17fd4f7b13/5febafae11b85a1cb64f7c7e_white-right-arrow__12.svg" loading="lazy" alt="" className="arrow-2" />
              </div>
            </a>
            <div className="contact-list-nav">
              <div className="smalltext nav-social">social</div>
              <ol role="list" className="list-nav w-list-unstyled">
                <li className="social-list-item">
                  <a data-w-id="00c1c0ad-0dd2-1f0c-5b5f-885643ce191d" href="https://www.linkedin.com/company/bigspringio" target="_blank" className="social-btn w-inline-block">
                    <img src="https://assets.website-files.com/5febafae11b85a17fd4f7b13/5febafae11b85a045b4f7c09_inLogo_blue.svg" loading="lazy" alt="" className="social-icn" />
                    <div className="social-btn-green" >
                      <img src="https://assets.website-files.com/5febafae11b85a17fd4f7b13/5febafae11b85a0ac64f7c0c_inLogo_white.svg" loading="lazy" alt="" className="social-icn" />
                      </div>
                  </a>
                </li>
                <li className="social-list-item">
                  <a data-w-id="00c1c0ad-0dd2-1f0c-5b5f-885643ce1920" href="https://twitter.com/bigspringio" target="_blank" className="social-btn w-inline-block">
                    <img src="https://assets.website-files.com/5febafae11b85a17fd4f7b13/5febafae11b85a485c4f7c0a_twtLogo_blue.svg" loading="lazy" alt="" className="social-icn" />
                    <div className="social-btn-green" >
                      <img src="https://assets.website-files.com/5febafae11b85a17fd4f7b13/5febafae11b85ab2344f7c0b_twtLogo_white.svg" loading="lazy" alt="" className="social-icn" />
                    </div>
                  </a>
                </li>
                <li className="social-list-item">
                  <a data-w-id="00c1c0ad-0dd2-1f0c-5b5f-885643ce1923" href="https://www.facebook.com/bigspringio" target="_blank" className="social-btn w-inline-block">
                    <img src="https://assets.website-files.com/5febafae11b85a17fd4f7b13/5febafae11b85a18564f7c07_fbLogo_blue.svg" loading="lazy" alt="" className="social-icn" />
                    <div className="social-btn-green" >
                      <img src="https://assets.website-files.com/5febafae11b85a17fd4f7b13/5febafae11b85ac01b4f7c08_fbLogo_white.svg" loading="lazy" alt="" className="social-icn" />
                    </div>
                  </a>
                </li>
              </ol>
            <div className="smalltext nav-social">email us</div>
            <a href="mailto:contact@bigspring.io" target="_blank" className="contact_email-2">contact@bigspring.io</a>
          </div>
        </nav>
        <div className="w-nav-overlay" data-wf-ignore id="w-nav-overlay-0" /></div>
      </div>
    </div>

       
      );
  }
}
export default Navbar;


{/* <nav>
<div className="row">
  <div className="navbar-wrapper">
    
    <img src="https://assets.website-files.com/5febafae11b85a17fd4f7b13/5febafae11b85a81804f7c74_bs-logo_black.svg" alt="logo image" className="logo" />
    </div>
  
    <div className="main-nav" >
      <ul >
        <li><a href="#">About</a></li>
        <li><a href="#">Custormer</a></li>
        <li><a href="#">Content</a></li>
        <li><a href="#">Careers</a></li>
        <li><a href="#">News</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Sign In</a></li>
        <li><a href="#">Sign Up</a></li>
      </ul>
      {/* <div className="main-nav li"> 
         <button className="button"> <a href="#"> Sign In</a></button>
      </div>
      <div className="button"> 
           <button className="button"> <a href="#"> Sign Up</a></button>
</div> */}
    