import React, { useEffect, useState } from 'react'
import Axios from 'axios'

const Confirmation = () => {
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
                </div>
            </div>
        </div>
    )
}

export default Confirmation