import React, { Component } from 'react';


class Contact extends React.Component{
    render() {
        return (
            <div className="section contact-us">
                <div className="page-footer_box">
                    <div className="bg-img-gray"></div>
                    <div className="contact-header">
                        <div className="smalltext">contact us</div>
                        <h3 className="section-heading align-left">Make your team and your business more productive.</h3>
                        <div className="section-header__text">Make training a core business driver, not a support function.</div>
                        <div className="contact-form_block w-form">
                            <form id="email-form" name="email-form" data-name="Email Form" className="contact_email-form">
                                <input type="email" className="contact-email_input w-input" maxlength="256" name="Email" data-name="Email" placeholder="Enter your email" id="Email-3" required="" />
                                    <div data-w-id="97719de4-b4a6-387b-4c7e-0c2882199dae" class="btn-wrapper">
                                         <input type="submit" value="get started" data-wait="" className="cta-button submit-btn w-button" />
                                            <div className="arr-box submit" >
                                                <img src="https://assets.website-files.com/5febafae11b85a17fd4f7b13/5febafae11b85a1cb64f7c7e_white-right-arrow__12.svg" loading="lazy" alt="" class="arrow-1"></img>
                                                <img src="https://assets.website-files.com/5febafae11b85a17fd4f7b13/5febafae11b85a1cb64f7c7e_white-right-arrow__12.svg" loading="lazy" alt="" class="arrow-2"></img>
                                            </div>
                                    </div>     
                             </form>       
                           

                            <div className="success-message w-form-done">
                                    <div>Message sent!</div>
                             </div>
                             <div className="w-form-fail">
                                        <div>Oops! Something went wrong while submitting the form.</div>
                            </div>
                        </div>
                    </div>
                  
                  <div className="contactuspicbox">
                        <div className="cu-pic_box _1">
                            <img src="https://assets.website-files.com/5febafae11b85a17fd4f7b13/5febafae11b85a3d814f7b7b_home-footer-1-d649a7ce4e6e2d1b2bab07fca4175472.png" loading="lazy" alt=""></img>
                            <div className="cu-pic_innercircle" ></div>
                        </div>
                        <div className="cu-pic_box _2">
                            <img src="https://assets.website-files.com/5febafae11b85a17fd4f7b13/5febafae11b85a2cc44f7b7c_home-footer-3-f1bf2d2807800a95baa7db0043bb4b3c%20(1).png" loading="lazy" alt=""></img>
                            <div className="cu-pic_innercircle"></div>
                        </div>
                         <div className="cu-pic_box _3">
                            <img src="https://assets.website-files.com/5febafae11b85a17fd4f7b13/5febafae11b85a81844f7b7e_home-footer-2-10ffdf669a6efe4ed4f4bfaae16098b8%20(1).png" loading="lazy" alt=""></img>
                            <div className="cu-pic_innercircle"></div>
                        </div>
                        <div className="cu-pic_box _4"><img src="https://assets.website-files.com/5febafae11b85a17fd4f7b13/5febafae11b85a00234f7b7d_home-footer-4-817fcc63688010b826f34cf002ee4d82.png" loading="lazy" alt=""></img>
                            <div className="cu-pic_innercircle"></div>
                        </div>
                    
                 </div>
                </div>
                
            </div>
        );
    }

}
export default  Contact;