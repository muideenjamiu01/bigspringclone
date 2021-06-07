import React, { Component } from 'react';


class Quote extends React.Component{
    render() {
        return (
            <div className="section quote"><div className="quote-box"><div className="smalltext rblue">NO MORE</div>
                <div className="quote-header">We do training and we don’t know what happens after</div>
                <img src="https://assets.website-files.com/5febafae11b85a17fd4f7b13/5febafae11b85a28314f7b65_home-after-2.png" loading="lazy" alt="" className="quote-img" />
                <div className="quote_dash-circle w-embed">
                    <span>
                        <svg>
                        circle element
                        </svg>
                    </span>
                </div>
            </div>
        </div>
        )
    }
}

export default Quote;