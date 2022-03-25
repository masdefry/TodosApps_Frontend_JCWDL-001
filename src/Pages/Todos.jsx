import Axios from 'axios';
import React from 'react';

class Todos extends React.Component{

    state = {
        data: null
    }

    componentDidMount(){
        Axios.get('http://localhost:3003/todos')
        .then((res) => {
            this.setState({data: res.data.data})
        })
        .catch((err) => {
            console.log(err)
        })
    }

    render(){
        return(
            <div>
                <div className="h-100 pt-5">
                    <div className="container pt-5">
                        {/* Button Section */}
                        <div className="row justify-content-between pt-5">
                            <div className="col-6">
                                <input type="button" value="Create Todo" className='btn btn-warning' />
                            </div>
                            <div className="col-6 text-right">
                                <span>
                                    <input type="button" value="All" className='btn btn-warning rounded-pill' />
                                </span>
                                <span>
                                    <input type="button" value="Today" className='btn btn-warning rounded-pill' />
                                </span>
                                <span>
                                    <input type="button" value="Upcoming" className='btn btn-warning rounded-pill' />
                                </span>
                                <span>
                                    <input type="button" value="Finish" className='btn btn-warning rounded-pill' />
                                </span>
                            </div>
                        </div>

                        {/* Todos Section */}
                        {
                            this.state.data?
                                // Mapping
                                this.state.data.map((val, index) => {
                                    return(
                                        <div key={index} className="rounded shadow-lg mt-5">
                                            {val.todo}
                                        </div>
                                    )
                                })
                            :
                                // Loading
                                'Loading'
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Todos