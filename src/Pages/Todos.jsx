import Axios from 'axios';
import React from 'react';

import Peoples1 from './../Supports/Images/Peoples1.png';

import CreateTask from './../Components/CreateTask.jsx';

class Todos extends React.Component{

    state = {
        data: null
    }

    componentDidMount(){
        Axios.get('http://localhost:3001/todos/getAllData')
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
                <div className="h-100 pt-5 mytodosapps-background">
                    <div className="container pt-5">
                        {/* Button Section */}
                        <div className="row justify-content-between pt-5">
                            <div className="col-6">
                                <span onClick={() => this.setState({modalOpen : true})}>
                                    <CreateTask className="btn btn-warning"></CreateTask>
                                </span>
                            </div>
                            <div className="col-6 text-right">
                                <span>
                                    <input type="button" value="All" className='btn rounded-pill shadow-lg mx-2 border-light mytodosapps-bg-grey mytodosapps-light mytodosapps-input' />
                                </span>
                                <span>
                                    <input type="button" value="Today" className='btn rounded-pill shadow-lg mx-2 border-light mytodosapps-bg-grey mytodosapps-light mytodosapps-input' />
                                </span>
                                <span>
                                    <input type="button" value="Upcoming" className='btn rounded-pill shadow-lg mx-2 border-light mytodosapps-bg-grey mytodosapps-light mytodosapps-input' />
                                </span>
                                <span>
                                    <input type="button" value="Finish" className='btn rounded-pill shadow-lg border-light mytodosapps-bg-grey mytodosapps-light mytodosapps-input' />
                                </span>
                            </div>
                        </div>

                        {/* Todos Section */}
                        {
                            this.state.data?
                                // Mapping
                                this.state.data.map((value, index) => {
                                    return(
                                        <div className="rounded shadow-lg mt-5 mb-5 px-5 py-5 mytodosapps-bg-light mytodosapps-tasks-lists-position">
                                            <div className="row">
                                                <div className="col-4">
                                                    <h1 className="font-weight-light">2022/04/03<span className="mytodosapps-font-size-20"> /</span></h1>
                                                </div>
                                                <div className="col-8 border-left px-5">
                                                    <div className="pt-0 pb-5">
                                                        <div className="border-bottom">
                                                            <div className="row">
                                                                <div className="col-8">
                                                                    <h5>{value.todo}</h5>
                                                                </div>
                                                                <div className="col-4 text-right">
                                                                 {/* <input type="button" value="Done" className="btn rounded-pill shadow-lg py-1 mr-1 mytodosapps-bg-secondary mytodosapps-font-size-12 mytodosapps-light mytodosapps-input" /> */}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <span>{value.description}</span>
                                                        </div>
                                                        {
                                                            value.status_id === 1?
                                                                <div className="py-3">
                                                                    <input type="button" value="Delete" className="btn shadow-lg py-1 mr-1 mytodosapps-bg-danger mytodosapps-font-size-12 mytodosapps-light mytodosapps-input" />
                                                                    <input type="button" value="Done" className="btn shadow-lg py-1 mr-1 mytodosapps-bg-secondary mytodosapps-font-size-12 mytodosapps-light mytodosapps-input" />
                                                                </div>
                                                            :
                                                                null
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            :
                                // Loading
                                <div className="container">
                                    <div className="row align-items-center h-100 px-0 py-0">
                                        <div className="col-12 col-md-6 px-5 px-md-0">
                                            <h1 className="font-weight-bold mytodosapps-font-size-60">Hi,</h1>
                                            <h1 className="font-weight-light mytodosapps-font-size-60">Welcome To Our</h1>
                                            <h1 className="font-weight-light mytodosapps-font-size-60">Family!</h1>
                                        </div>
                                        <div className="col-6 d-none d-md-block">
                                            <img src={Peoples1} alt="" width="100%" />
                                        </div>
                                    </div>
                                </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Todos