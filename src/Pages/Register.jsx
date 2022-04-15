import React from 'react';
import { Navigate } from 'react-router-dom';
import Axios from 'axios';

// Redux
import {connect} from 'react-redux';
import {onUserRegister, onCheckUserLogin} from './../Redux/Actions/userAction';

// SweetAlert
import Swal from 'sweetalert2';

class Register extends React.Component{

    state = {
        is_disabled: false,
        isLogedIn: false
    }

    componentDidMount(){
        this.props.onCheckUserLogin()
        this.onCheckIsLogedIn()
    }

    onCheckIsLogedIn = () => {
        let token = localStorage.getItem('myTkn')

        if(token){
            this.setState({ isLogedIn: true })
        }
    }

    // onSubmit = () => {
    //     let username = this.username.value 
    //     let email = this.email.value 
    //     let password = this.password. value 

    //     this.props.onUserRegister(username, email, password)
    // }

    onSubmit = () => {
        try {
            this.setState({ is_disabled: true })

            let username = this.username.value 
            let email = this.email.value 
            let password = this.password.value 
            let confirmPassword = this.confirmPassword.value 

            // Validation
            if(password !== confirmPassword) throw { message: 'Password doesnt match!' }
            Axios.post('http://localhost:3001/user/register', {username, email, password})
            .then((res) => {
                Swal.fire({
                    title: 'Success!',
                    text: res.data.message,
                    icon: 'success',
                    confirmButtonText: 'Okay!'
                })
                this.username.value = ''
                this.email.value = ''
                this.password.value = ''
                this.confirmPassword.value = ''

                this.setState({ is_disabled: false })
            })
            .catch((err) => {
                Swal.fire({
                    title: 'Error!',
                    text: err.response.data.message,
                    icon: 'error',
                    confirmButtonText: 'Okay!'
                })

                this.setState({ is_disabled: false })
            })
        } catch (error) {
            Swal.fire({
                title: 'Error!',
                text: error.message,
                icon: 'error',
                confirmButtonText: 'Okay!'
            })

            this.setState({ is_disabled: false })
        }
    }

    render(){
        if(this.state.isLogedIn){
            return(
                <Navigate to='/todos' />
            )
        }

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
                        <div className="form-group">
                            <label for="exampleInputPassword1">Confirm Password</label>
                            <input type="password" ref={(e) => this.confirmPassword = e} className="form-control" />
                        </div>
                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" />
                            <label className="form-check-label" >Check me out</label>
                        </div>
                        <button type="submit" disabled={this.state.is_disabled} onClick={() => this.onSubmit()} className="btn btn-primary w-100 mb-3">
                            {
                                this.state.is_disabled?
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
    onUserRegister, onCheckUserLogin
}

const mapStateToProps = (state) => {
    return{
        user: state.user
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)