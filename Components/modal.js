import React, { Component } from 'react';

class Modal extends Component {
    state ={
    
        closeBtn: null,

    }
    closeModal(){
        this.state.closeBtn.click();
    }
    submitModal = () =>{
        this.closeModal();
    }
    render(){
        return(
            <div>
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                    Create Movie
                </button>
                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">
                                    Create movie
                                </h5>
                                <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                {this.props.children}
                            </div>
                            <div className="modal-footer">
                                <button ref={ele => this.state.closeBtn = ele} type="button" className="btn btn-secondary" data-dismiss="modal">
                                    Close
                                </button>
                                { this.props.hasSubmit &&
                                    <button onClick={this.submitModal} type="button" className="btn btn-primary">
                                        Save changes
                                    </button>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
   
}

export default Modal;