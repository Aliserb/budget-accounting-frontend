import { MdClose } from "react-icons/md";

const Modal = () => {
    return (
        <div className="modal">
            <div className="modal_overlay"></div>
            <div className="modal_body">
                <div className="modal_close"><MdClose /></div>
                <div className="modal_content">
                    Modal content
                </div>
            </div>
        </div>
    )
}

export default Modal;