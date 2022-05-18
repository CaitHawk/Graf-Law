import ContactForm from "../components/ContactForm";
import '../styles/ContactPage.css';
import BreadCrumbs from "../components/breadCrumbs";

export default function ContactRouter() {
    return (
        <main className="contactPageContainer">
            <BreadCrumbs linkPath="/contact" linkTitle="Contact" />
            <ContactForm />
        </main>
    )
}