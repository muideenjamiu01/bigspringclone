import React, { Component } from 'react';


class Client extends React.Component{
    render() {
        return (
            <div className="section clients">
                <div className="client_table client_container">
                <div className="client-list">
                    <div className="client-item first">
                        <div className="client-top">
                            <div className="client-head">
                                <div className="smalltext client-headline">01</div>
                                <h4 className="client_header">Uber</h4>
                            </div>
                            <div className="client_logo uber"></div>
                        </div>
                        <div className="client_quote">
                            <div>
                            “We have a long running partnership with BigSpring. We have used their analytics
                             and contextual learning to train our driver partners.”
                            </div>
                        </div>
                        <div className="client_author">
                            <div>Head, Driver Operations</div>
                        </div>
                    </div>
                    <div className="client-item">
                        <div className="client-top">
                            <div className="client-head">
                                <div className="smalltext client-headline">02</div>
                                <h4 className="client_header">Google</h4>
                            </div>
                            <div className="client_logo uber"></div>
                        </div>
                        <div className="client_quote">
                            <div>
                            “BigSpring's intuitive platform is just what large businesses with distributed workforces
                             need to provide rapid skills deployment at scale with measurable ROI to make data-driven decisions.”
                            </div>
                        </div>
                        <div className="client_author">
                            <div>Director, Business Enablement & Digital Transformation</div>
                        </div>
                    </div>
                    <div className="client-item third">
                        <div className="client-top">
                            <div className="client-head">
                                <div className="smalltext client-headline">03</div>
                                <h4 className="client_header">Carbon</h4>
                            </div>
                            <div className="client_logo uber"></div>
                        </div>
                        <div className="client_quote">
                            <div>
                            “BigSpring enables us to nurture quality engagement with our individual
                             and SMB customers. We are the first among peers to unlock digital training in financial literacy to our customers.”
                            </div>
                        </div>
                        <div className="client_author">
                            <div>Head, Driver Operations</div>
                        </div>
                        <div className="hc_button">
                            <a href="/customers/success-stories" data-w-id="6f7488fb-a774-d2ad-95d4-675019a3ba0b" className="btn-more customer w-inline-block">
                                <div className="btn-more_wrapper customer">
                                    <div className="btn-more_text-2">Our customers</div>
                                    <div className="arr-box">
                                        <img src="https://assets.website-files.com/5febafae11b85a17fd4f7b13/5febafae11b85ac9c74f7c7d_cyan-right-arrow__12.svg" loading="lazy" alt="" className="arrow-1"  />
                                        <img src="https://assets.website-files.com/5febafae11b85a17fd4f7b13/5febafae11b85a81284f7c7c_blue-right-arrow__12.svg" loading="lazy" alt="" className="arrow-2"  />
                                    </div>
                                </div>
                                <div className="line-wrapper">      
                                    <div className="blue-line-2" />
                                    <div   className="green-line-2" />
                                    <div className="blue-line-2 top" /></div>
                            </a>
                        </div>
                    </div>
                </div>
                </div>


                

                
            </div>
        );
    }

}
export default Client;