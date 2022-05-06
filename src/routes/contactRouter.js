import ContactForm from "../components/ContactForm";
import '../styles/ContactPage.css';
import BreadCrumbs from "./servicesRoutes/breadCrumbs";

export default function ContactRouter() {
    return (
        <main className="contactPageContainer">
            <BreadCrumbs linkPath="/contact" linkTitle="Contact" />
            <h1>Contact Page</h1>
            <ContactForm />
        </main>
    )
}