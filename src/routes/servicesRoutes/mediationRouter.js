import BreadCrumbs from "../../components/breadCrumbs";
import { Link } from 'react-router-dom';
import '../../styles/serviceStyles.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const mediationPage = {
    title: "Mediation",
    image: '../../images/divorce2.jpg',
    description: [
        {
            title: "First Card",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam neque inventore sapiente porro deserunt enim, maiores omnis corporis reprehenderit sunt nulla, voluptatibus repudiandae iure nisi praesentium velit assumenda! Expedita, maiores! Est ullam iure necessitatibus harum dolorum, perferendis fugit, provident reprehenderit beatae cupiditate repudiandae qui laboriosam libero, excepturi natus quas animi consectetur quasi deleniti dolor ab. Itaque sunt quibusdam tempora rerum. Architecto odio libero impedit ipsam qui delectus omnis quam id a, eos voluptatibus est dignissimos aperiam nobis odit quia alias sapiente. Nulla provident iste illum, itaque ab in cupiditate sunt.",
        },
        {
            title: "Second Card",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam neque inventore sapiente porro deserunt enim, maiores omnis corporis reprehenderit sunt nulla, voluptatibus repudiandae iure nisi praesentium velit assumenda! Expedita, maiores! Est ullam iure necessitatibus harum dolorum, perferendis fugit, provident reprehenderit beatae cupiditate repudiandae qui laboriosam libero, excepturi natus quas animi consectetur quasi deleniti dolor ab. Itaque sunt quibusdam tempora rerum. Architecto odio libero impedit ipsam qui delectus omnis quam id a, eos voluptatibus est dignissimos aperiam nobis odit quia alias sapiente. Nulla provident iste illum, itaque ab in cupiditate sunt.",
        },
        {
            title: "Thrid Card",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam neque inventore sapiente porro deserunt enim, maiores omnis corporis reprehenderit sunt nulla, voluptatibus repudiandae iure nisi praesentium velit assumenda! Expedita, maiores! Est ullam iure necessitatibus harum dolorum, perferendis fugit, provident reprehenderit beatae cupiditate repudiandae qui laboriosam libero, excepturi natus quas animi consectetur quasi deleniti dolor ab. Itaque sunt quibusdam tempora rerum. Architecto odio libero impedit ipsam qui delectus omnis quam id a, eos voluptatibus est dignissimos aperiam nobis odit quia alias sapiente. Nulla provident iste illum, itaque ab in cupiditate sunt."
        }
    ],
    requirements: ['Past Three(3) months paystubs or LES', 'Previous Filings', 'Previous Agreements'],
    billingInformation: ['first thing', 'second thing', 'third thing'],
    whatYoullNeed: ['first thing', 'second thing', 'third thing'],
    courtForms: [
        {
            courtFormTitle: 'courtFormTitle',
            courtFormLink: 'urlHere'
        },
        {
            courtFormTitle: 'courtFormTitle',
            courtFormLink: 'urlHere'
        },
        {
            courtFormTitle: 'courtFormTitle',
            courtFormLink: 'urlHere'
        },
    ]
}

function MediationAccordian() {
    return (
        <div className="servicePageReqDiv">
            <Accordion className="servicePageAccordian">
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Requirements</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <ul className="accoridanUl">
                            {mediationPage.requirements.map(req => (
                                <li key={`${req}key`}
                                    className="accordianLi">
                                    {req}
                                </li>
                            ))}
                        </ul>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion className="servicePageAccordian">
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Billing Information</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className="insideAccordian">
                        <ul className="accoridanUl">
                            {mediationPage.billingInformation.map(bi => (
                                <li key={`${bi}key`}
                                    className="accordianLi">
                                    {bi}
                                </li>
                            ))}
                        </ul>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion className="servicePageAccordian">
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>What you'll need</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className="insideAccordian">
                        <ul className="accoridanUl">
                            {mediationPage.whatYoullNeed.map(wyn => (
                                <li key={`${wyn}key`}
                                    className="accordianLi">
                                    {wyn}
                                </li>
                            ))}
                        </ul>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion className="servicePageAccordian" >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    <Typography className="accordianTitle">Court Forms</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className="insideAccordian">
                        <span className="restrictionSpan">*Oahu only</span>
                        <ul className="courtFormUl">
                            {mediationPage.courtForms.map(form => (
                                <li key={`${form.courtFormTitle}key`}
                                    className="courtFormLi" >
                                    <a className="courtFormLink"
                                        target="blank"
                                        rel="noopener"
                                        href={form.courtFormLink}>
                                        {form.courtFormTitle}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default function MediationRouter() {
    return (
        <main className="servicePageMain">
            <BreadCrumbs
                linkPath='/services'
                linkTitle='Services'
                serviceLinkPath='/mediation'
                serviceLinkTitle='Medation'
            />
            <div className="servicePageTitleDiv">
                <h1>{mediationPage.title}</h1>
            </div>
            <div className="servicePageMainDiv">
                <ul className="servicePageTopDiv">
                    {mediationPage.description.map(card => (
                        <li className="servicePageDescriptionCard">
                            <div className="servicePageDescriptionCardTop">
                                <h2>{card.title}</h2>
                            </div>
                            <div className="servicePageDescriptionCardBottom">
                                <p>{card.description}</p>
                            </div>
                        </li>
                    ))}
                </ul>

                <div className="servicePageBottomDiv">
                    <MediationAccordian />
                    <div className="servicePageBtnDiv">
                        <Link to='/contact'>
                            <button className="servicePageBtn">Call Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}