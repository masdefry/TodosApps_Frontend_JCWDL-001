import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { useParams } from 'react-router-dom'

const Confirmation = () => {

    let params = useParams();

    const [message, setMessage] = useState('')

    useEffect(() => {
        onConfirmation()
    }, [])

    const onConfirmation = () => {
        Axios.patch('http://localhost:3001/user/confirmation', {id: params.id})
        .then((res) => {
            setMessage(res.data.message)
        })
        .catch((err) => {
            setMessage(err.response.data.message)
        })
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