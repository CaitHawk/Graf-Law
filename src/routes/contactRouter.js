import ContactForm from "../components/ContactForm";
import '../styles/ContactPage.css';
import BreadCrumbs from "./servicesRoutes/breadCrumbs";
import Footer from '../components/Footer';

export default function ContactRouter() {
    return (
        <main className="contactPageContainer">
            <BreadCrumbs linkPath="/contact" linkTitle="Contact" />
            <ContactForm />
            <Footer />
        </main>
    )
}