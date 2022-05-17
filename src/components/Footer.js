import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import TwitterIcon from '@mui/icons-material/Twitter';
import { contactInfo } from '../components/ContactLinks';
import { Link } from 'react-router-dom';
import '../styles/Headers.css';

function ContactFooterLeft () {
    return (
        <div className="footerLeft">
            <a href="tel:+18086206392"><LocalPhoneIcon />{contactInfo.phoneNumber}</a>
            <a><AlternateEmailIcon />{contactInfo.email}</a>
            <a style={{ fontWrap: "wrap" }}><MailOutlineIcon />{contactInfo.address}</a>
        </div>
    )
}

function ContactFooterRight () {
    return (
        <div className="footerRight">
            <a href={contactInfo.linkedIn}><LinkedInIcon />LinkedIn</a>
            <a href={contactInfo.facebook}><FacebookIcon />Facebook</a>
            <a href={contactInfo.twitter}><TwitterIcon />Twitter</a>
        </div>
    )
}

function Footer () {
    return (
        <div className="footerDiv">
            <ContactFooterLeft className='footerLeft' />
            <div className="footerBtnDiv">
                <Link className="footerBtn" to="/contact">Schedule a Consultation</Link>
            </div>
            <ContactFooterRight className='footerRight' />
        </div>
    )
}

export default Footer;