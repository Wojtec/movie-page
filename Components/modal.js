
const Modal = (props) => {
    console.log("aaa", props);
    let closeBtn = null;

    const submitModal = () =>{
        console.log("click");
        closeBtn.click();
    }

    return(
        <div>
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
            Create movie
        </button>

        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Create movie</h5>
                        <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        {props.children}
                    </div>
                    <div className="modal-footer">
                        <button ref={ele => closeBtn = ele} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button onClick={submitModal} type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Modal;