import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import TwitterIcon from '@mui/icons-material/Twitter';
import '../styles/Headers.css';

const contactInfo = {
    phoneNumber: "(808) 620-6392",
    address: "P.O. Box 1210, Pearl City, Hawaii 96782",
    email: "handreal@aol.com",
    twitter: "https://twitter.com/Handreal1",
    facebook: "https://facebook.com",
    linkedIn: "https://linkedIn.com",
}

function ContactLinks() {
    return (
        <div className="contactLinksDiv">
            <a href="tel:+18086206392"><LocalPhoneIcon />{contactInfo.phoneNumber}</a>
            <a><AlternateEmailIcon />{contactInfo.email}</a>
            <a href={contactInfo.linkedIn}><LinkedInIcon />LinkedIn</a>
            <a href={contactInfo.facebook}><FacebookIcon />Facebook</a>
            <a href={contactInfo.twitter}><TwitterIcon />Twitter</a>
            <a style={{ fontWrap: "wrap" }}><MailOutlineIcon />{contactInfo.address}</a>
        </div>
    )
}



export { ContactLinks, contactInfo };
