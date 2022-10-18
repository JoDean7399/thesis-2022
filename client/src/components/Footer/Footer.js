import React from 'react'
import {Link} from 'react-router-dom'
import '../../app/App.css'


const Footer = () => {
    
    return(
        <>
        <div id="footer" className="row color-scheme footer-height">
        <div className="m-0 p-0 col-3 offset-1">
            <h4 className='m-0 pr-0 footer-font-size footer-positioning'>Jo Neher</h4>
            <p className='m-0 pr-0 footer-font-size footer-positioning'>7342W 1150S<br/>Akron, IN 46910</p>
        </div>
        <div className="col-3 text-center">
            <h4 className='footer-font-size m-0 p-0'>See Us On the Web</h4>
        {/* Here the href is put in just for looks. We are unable to link to these sites from our computers. They are not functional. */}
            <a href='#'><i className="fab fa-facebook-f"></i></a>
            <a href='#'><i className="fab fa-instagram icon-positioning"></i></a>
            <a href='#'><i className="fab fa-pinterest-p icon-positioning"></i></a>
            <a href='#'><i className="fab fa-twitter icon-positioning" ></i></a> 
        </div>
        <div className="col-3 p-0">
            <h4 className='mb-0 footer-positioning footer-font-size'>Last Mile</h4>
            <p className='m-0'>
                <a href='#' className='m-0 footer-font-size footer-positioning'>Code7370Bootstrap</a>
            </p>
        </div>
        <Link to='/adminLogin' className='cat'><i className="fa fa-cat col-1 lg-window-cat-positioning"></i> 
        </Link>
        </div>
        </>
    )
}

export default Footer