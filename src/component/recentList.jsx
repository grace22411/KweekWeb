import React from 'react';
import { Link } from 'react-router-dom';
import { IMAGES } from '../constants/';


const currencies = [
    {label:'USD' ,icon: 'http://countryflagicons.com/SHINY/32/US.png', value: 'USD'}, {label: 'NGN', icon: 'http://countryflagicons.com/SHINY/32/NG.png', value: 'NGN'}, {label: 'GBP', icon:'http://countryflagicons.com/SHINY/32/GB.png', value: 'GBP'}, {label: 'EUR', icon: 'http://countryflagicons.com/SHINY/32/FR.png', value: 'EUR'}
];

const List = () => {
    return(
        <div className="col-lg-4 col-md-6 p-3">
            <div className="m-4 recent-lists-box">
                <div className="row">
                    <div className="col-4">
                        <div className="row text-center">
                            <img className="user" src="https://www.designyourway.net/blog/wp-content/uploads/2018/08/387011_3d-cute-wallpapers-for-desktop-hd-1-jpg_1024x768_h-700x525.jpg" alt="" />
                            <p><img className="star" src={IMAGES.STAR} alt="" /></p>
                            <span style={{fontSize: 12}}><i className="fas fa-clock mr-1"></i>5 mins ago</span>
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="row">
                            <h5 style={{color: 'var(--primaryColor)'}}><strong>Alexa Smith</strong></h5>
                        <div className="col-6">
                                <span className="text-muted">From</span>
                                <p style={{fontWeight: 'bold'}}><img style={{width: 20, display: 'inline'}} src={currencies[0].icon} alt="" /> USA</p>
                                <p style={{fontSize: 10}}>Rate: <strong>420 NGN/USD</strong></p>
                            </div>
                            <div className="col-6">
                                <span className="text-muted">To</span>
                                <p style={{fontWeight: 'bold'}}><img style={{width: 20, display: 'inline'}} src={currencies[1].icon} alt="" /> NG</p>
                                <span style={{color: 'var(--primaryColor)', fontSize: 12}}>Negotiable <i className="fas fa-briefcase"></i></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 p-4">
                        <div className="row inner-box py-3">
                            <div className="row">
                                <div className="col-4" style={{fontSize: 10}}>
                                    I have <br/> <strong>USD 1000</strong>
                                </div>
                                <div className="col-4" style={{fontSize: 10}}>
                                    Fees <br/> <strong>USD 50</strong>
                                </div>
                                <div className="col-4" style={{fontSize: 10}}>
                                    You get <br/> <strong>USD 950</strong>
                                </div>
                                <hr className="mt-4" style={{width: '90%', marginLeft: "5%"}} />
                            </div>
                            <div className="row mt-2">
                                <div className="col-4" style={{fontSize: 10}}>
                                    You give <br/> <strong>NGN 420,000</strong>
                                </div>
                                <div className="col-4" style={{fontSize: 10}}>
                                    Fees <br/> <strong>NGN 2800</strong>
                                </div>
                                <div className="col-4" style={{fontSize: 10}}>
                                    I get <br/> <strong>NGN 417,200</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 px-3">
                        <button className="btn btn-primary float-left">Initiate Transaction</button>
                        <Link to="/txn/5skjd88dd" className="float-right" style={{color: 'var(--primaryColor)', margin: 8}}><i className="fas fa-share"></i> Share</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const RecentListComponent = (props) => {
    const {count} = props;
    let list_count = [];
    
    for(let i = 0; i < count; i++){
        list_count.push(i)
    }

    return (
        <div className="recent-lists py-5">
            <div className="container">
                <div className="row pr-4">
                    {list_count.map((i) => (
                        <List />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default RecentListComponent;