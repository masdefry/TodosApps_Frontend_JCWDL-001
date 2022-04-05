import React, { Component } from 'react';
import { Modal, ModalBody, UncontrolledAlert } from 'reactstrap';
import Axios from 'axios';

// Import React Loader Spinner
import { ThreeDots } from 'react-loader-spinner'

export class CreateTask extends Component {
    state = {
        modalOpen : false,
        isLoading: false
    }

    onSubmit = () => {
        this.setState({isLoading: true})

        // Manipulasi Deadline
        let newDeadline = this.deadline.value 
        newDeadline = newDeadline.split('T')
        newDeadline = newDeadline.join(' ') + ':00'

        let dataToSend = {
            todo: this.todo.value,
            description: this.description.value,
            deadline: newDeadline,
            users_id: 1
        }

        Axios.post('http://localhost:3001/todos/create', dataToSend)
        .then((result) => {
            this.setState({isLoading: false})
            alert(result.data.message)
        })
        .catch((error) => {
            this.setState({isLoading: false})
        })
    }

    render(){
        return(
            <span>
                {/* CREATE TASK SECTION */}
                <input type="button" value='+ Create Task' onClick={() => this.setState({modalOpen : true})} className={this.props.className} />
                <Modal toggle={() => this.setState({modalOpen : false})} isOpen={this.state.modalOpen}>
                    <ModalBody className="border border-white">
                        <div onClick={() => this.setState({modalOpen : false})} className="text-right mytetring-clickable-element">
                        </div>
                        <div className="pt-0 pb-3 text-left">
                            
                        </div>
                        <div className="text-center">
                            <img src="https://image.freepik.com/free-vector/flat-illustration-creative-office-business-company_81522-2258.jpg" alt="" width="300px" />
                        </div>
                        <div className="px-5 py-0">
                            <div className="pt-1 pb-3 text-right">
                                <h3><span className="font-weight-bold">Create</span><span className="font-weight-light">Task</span></h3>
                                <h5 className="font-weight-normal mytetring-font-size-14 mytetring-grey">Time is everything right?</h5>
                            </div>
                            <div className="form-group mt-3 mb-3">
                                <div className="input-group">
                                    <input type="text" placeholder="Todo Title" ref={val => this.todo = val} className="form-control rounded-0 border-top-0 border-left-0 border-right-0 mytetring-input" required />
                                </div>
                            </div>
                            <div className="form-group mt-3 mb-3">
                                <div className="input-group">
                                    <input type="text" placeholder="Todo Description" ref={val => this.description = val} className="form-control rounded-0 border-top-0 border-left-0 border-right-0 mytetring-input" required />
                                    <div className="input-group-prepend">
                                    </div>
                                </div>
                            </div>
                            <div className="form-group mt-3 mb-3">
                                <div className="input-group">
                                    <input type="datetime-local" placeholder="Date & Time" ref={val => this.deadline = val} className="form-control rounded-0 border-top-0 border-left-0 border-right-0 mytetring-input" required />
                                    <div className="input-group-prepend">
                                    </div>
                                </div>
                            </div>
                            <div className="pt-3 pb-5">
                                <button disabled={this.state.isLoading} onClick={() => this.onSubmit()} className="btn rounded w-100 d-flex justify-content-center mytodosapps-bg-secondary mytodosapps-light mytodosapps-input">
                                    {
                                        this.state.isLoading? 
                                            <ThreeDots color="#FFFFFF" height={30} width={30} />
                                        :
                                            'Submit'
                                    }    
                                </button>
                            </div>
                        </div>
                    </ModalBody>
                </Modal>
            </span>
        )
    }
}

export default CreateTask