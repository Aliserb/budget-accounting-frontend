import { ReactNode } from "react";
import "./style.css";

interface ModalProps {
    children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ children }) => {
    return (
        <div className="modal">
            <div className="modal_overlay"></div>
            <div className="modal_body_wrap">
                <div className="modal_body">
                    <div className="modal_content">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;