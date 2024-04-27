import React from 'react'
import './FooterWidget.css'
import {Link} from 'react-router-dom'

function FooterWidget() {
  return (
    <div className="footerwidget">
        <div className="container flex-row aic jcsb">
            <div className="widget">
                <Link to='/' className='name'>CRYPTO Banking</Link>
                <span className="desc">
                    CRYPTO Banking - merges tradingtional banking services with cryptocurrencies, offering users the ability to manage and staking digital assets with high rate of ROI.
                </span>
            </div>
            <div className="widget">
                
            </div>
            <div className="widget">
                
            </div>
        </div>
    </div>
  )
}

export default FooterWidget