import Axios from 'axios';
import React from 'react';

import InviniteNavbar from '../Supports/Functions/InfiniteNavbar';

class Navbar extends React.Component{

    componentDidMount(){
        window.onscroll = function(){ InviniteNavbar() }
    }

    onResendEmail = () => {
        let token = localStorage.getItem('myTkn')

        Axios.post('http://localhost:3001/user/resend', {}, {headers: {
            'Authorization': token,
            'Accept' : 'application/json',
            'Content-Type': 'application/json'
        }})
        .then((res) => {
            alert('Check Your Email!')
        })
        .catch((err) => {
            console.log(err)
        })
    }

    render(){
        return(
            <div>
                <div id="navbar" className="w-100 position-fixed py-5" style={{transition: '0.3s', zIndex: 1}}>
                    <div className="container">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-6 text-left">
                                <h1>
                                    Todos-Apps
                                </h1>
                            </div>
                            <div className="col-6 text-right">
                                <span className="ml-3">
                                    
                                        <input type="button" value="Login" className="btn rounded font-weight-bold mytodosapps-input mytodosapps-font-size-16" />
                                    
                                </span>
                                <span className="ml-3">
                                   
                                        <input type="button" value="Register" className="btn rounded shadow-lg mytodosapps-bg-secondary mytodosapps-light mytodosapps-input" />
                                    
                                </span>
                                <span className="ml-3">
                                   
                                        <input type="button" value="Resend Email Confirmation" onClick={() => this.onResendEmail()} className="btn rounded shadow-lg mytodosapps-bg-secondary mytodosapps-light mytodosapps-input" />
                                    
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar