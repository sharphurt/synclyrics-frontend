import {Logo} from "../../icons/Logo";
import './Footer.sass'

export const Footer = () => {
    return <div className="footer-block-container">
        <div className="footer-block-content">
            <Logo/>
            <span>Created as an open-source<br/>pet-project</span>
        </div>
    </div>
}