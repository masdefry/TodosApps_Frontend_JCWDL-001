import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { useParams, Navigate } from 'react-router-dom'

// SweetAlert
import Swal from 'sweetalert2';
const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 5000,
    timerProgressBar: true,
    // didOpen: (toast) => {
    //   toast.addEventListener('mouseenter', Swal.stopTimer)
    //   toast.addEventListener('mouseleave', Swal.resumeTimer)
    // }
})

const Confirmation = () => {

    const [isRedirect, setIsRedirect] = useState(false)

    let params = useParams();

    const [message, setMessage] = useState('')

    useEffect(() => {
        onConfirmation()
    }, [])

    const onConfirmation = () => {
        Axios.patch('http://localhost:3001/user/confirmation', {}, {headers: {
            'Authorization': params.token,
            'Accept' : 'application/json',
            'Content-Type': 'application/json'
        }})
        .then((res) => {
            Toast.fire({
                icon: 'success',
                title: res.data.message
            })
            setIsRedirect(true)
            localStorage.setItem('myTkn', params.token)
        })
        .catch((err) => {
            setMessage(err.response.data.message)
            Toast.fire({
                icon: 'error',
                title: err.response.data.message
            })
        })
    }

    if(isRedirect){
        return(  
            <Navigate to='/todos' />
        )
    }

    return(
        <div className="container">
            <div className="row justify-content-center align-items-center" style={{height: '100vh'}}>
                <div className="col-5 text-center border border-primary px-5 py-5 rounded">
                    <h1>Welcome To Our Family!</h1>
                    <p style={{fontSize: '20px'}}>
                        Enjoy Our Features!
                    </p>
                    <b><u>
                        Continue Login
                    </u></b>
                    <br></br>
                    <i>
                        {
                            message? message : null
                        }
                    </i>
                </div>
            </div>
        </div>
    )
}

export default Confirmation