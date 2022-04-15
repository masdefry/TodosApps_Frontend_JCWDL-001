import React from 'react';
import { Navigate } from 'react-router-dom';

// Redux
import {connect} from 'react-redux';
import {onUserLogin, onCheckUserLogin} from './../Redux/Actions/userAction'

class Login extends React.Component{

    state = {
        isLogedIn: false
    }

    componentDidMount(){
        this.props.onCheckUserLogin()
        // this.onCheckIsLogedIn()
    }

    onCheckIsLogedIn = () => {
        let token = localStorage.getItem('myTkn')

        if(token){
            this.setState({ isLogedIn: true })
        }
    }

    onSubmit = () => {
        let data = {
            email: this.email.value,
            password: this.password.value
        }

        this.props.onUserLogin(data)
    }

    render(){
        if(this.props.user.is_redirect || this.props.user.is_login){
            return(
                <Navigate to='/todos' />
            )
        }

        return(
            <div className="container">
                <div className="row justify-content-center align-items-center" style={{height: '100vh'}}>
                    <div className="col-5 border border-primary rounded px-5 py-5">
                        <h1 className="text-center my-3">
                            Login
                        </h1>
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
                        <button type="submit" disabled={this.props.user.loading} onClick={() => this.onSubmit()} className="btn btn-primary w-100 mb-3">
                            {
                                this.props.user.loading?
                                    'Loading'
                                :
                                    'Login'
                            }
                        </button>
                       
                        <h6>
                            {
                                this.props.user.error?
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
    onUserLogin, onCheckUserLogin
}

const mapStateToProps = (state) => {
    return{
        user: state.user
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)