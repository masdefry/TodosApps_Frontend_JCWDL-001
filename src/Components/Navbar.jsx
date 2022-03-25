import React from 'react';
import InviniteNavbar from '../Supports/Functions/InfiniteNavbar';

class Navbar extends React.Component{

    componentDidMount(){
        window.onscroll = function(){ InviniteNavbar() }
    }

    render(){
        return(
            <div>
                <div id="navbar" className='w-100 position-fixed py-2 bg-dark' style={{ transition: '0.5s' }}>
                    <div className="container">
                        <div className="row justify-content-between align-items-center">
                            <div>
                                <h1 className='text-primary'>
                                    TodosApps 
                                </h1>
                            </div>
                            <div>
                                <span>
                                    <input type="button" value="Login" className="btn btn-warning rounded" />
                                    <input type="button" value="Register" className="btn btn-primary rounded ml-2" />
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