import React from 'react';

// Redux
import {connect} from 'react-redux';
import {onUserRegister} from './../Redux/Actions/userAction'

class Register extends React.Component{

    onSubmit = () => {
        let username = this.username.value 
        let email = this.email.value 
        let password = this.password. value 

        this.props.onUserRegister(username, email, password)
    }

    render(){
        return(
            <div className="container">
                <div className="row justify-content-center align-items-center" style={{height: '100vh'}}>
                    <div className="col-5 border border-primary rounded px-5 py-5">
                        <h1 className="text-center my-3">
                            Register Account
                        </h1>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Username</label>
                            <input type="text" ref={(e) => this.username = e} className="form-control" aria-describedby="emailHelp" />
                        </div>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Email</label>
                            <input type="text" ref={(e) => this.email = e} className="form-control" aria-describedby="emailHelp" />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" ref={(e) => this.password = e} className="form-control" />
                        </div>
                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" />
                            <label className="form-check-label" >Check me out</label>
                        </div>
                        <button type="submit" onClick={() => this.onSubmit()} className="btn btn-primary w-100 mb-3">
                            {
                                this.props.user.loading?
                                    'Loading'
                                :
                                    'Register'
                            }
                        </button>
                       
                        <h6 className={this.props.user.error? "text-center text-danger" : "text-center text-success"}>
                            {
                                this.props.user.message?
                                    this.props.user.message
                                :
                                    null
                            }
                        </h6>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = {
    onUserRegister
}

const mapStateToProps = (state) => {
    return{
        user: state.user
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)