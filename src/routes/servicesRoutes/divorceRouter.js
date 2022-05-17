import BreadCrumbs from "./breadCrumbs";
import { Link } from 'react-router-dom';
import '../../styles/serviceStyles.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import image from '../../images/divorce2.jpg';

export default function DivorceRouter() {
    return (
        <main className="divorceMain">
            <BreadCrumbs
                linkPath='/services'
                linkTitle='Services'
                serviceLinkPath='/divorce'
                serviceLinkTitle='Divorce'
            />
            <div className="divorceTitleDiv">
                <h1>{divorcePage.title}</h1>
            </div>
            <div className="divorceMainDiv">
                <div className="divorceTopDiv">
                    <div className="descriptionCard">
                        <h2>{divorcePage.description.title1}</h2>
                        <p>{divorcePage.description.description1}</p>
                    </div>
                    <div className="descriptionCard">
                        <h2>{divorcePage.description.title2}</h2>
                        <p>{divorcePage.description.description2}</p>
                    </div>
                    <div className="descriptionCard">
                        <h2>{divorcePage.description.title3}</h2>
                        <p>{divorcePage.description.description3}</p>
                    </div>
                </div>
                <div className="divorceBottomDiv">
                    <DivorceAccordian />
                    <div className="divorceBtnDiv">
                        <Link to='/contact'>
                            <button className="divorceBtn">Call Now</button>
                        </Link>
                    </div>
                </div>

            </div>
        </main>
    )
}

function DivorceAccordian() {
    return (
        <div className="divorceReqDiv">
            <Accordion className="divorceAccordian">
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
                            <li>Resident of the state of Hawaii</li>
                            <li>One party is a citizen of the U.S.</li>
                            <li>Legally married for one(1) year or more</li>
                        </ul>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion className="divorceAccordian">
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
                            <li>Previous three(3) months paystubs / LES</li>
                            <li>Previous Filings</li>
                            <li>Previous Agreements (support, custody, etc)</li>
                        </ul>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion className="divorceAccordian">
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
                            <li>Previous three(3) months paystubs / LES</li>
                            <li>Previous Filings</li>
                            <li>Previous Agreements (support, custody, etc)</li>
                        </ul>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion className="divorceAccordian" >
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
                        <a className="courtFormLink"
                            target="_blank"
                            rel="noopener"
                            href="https://www.courts.state.hi.us/wp-content/uploads/2018/08/1FP2039.pdf">
                            Complaint For Divorce
                        </a>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

const divorcePage = {
    title: "Divorce",
    image: '../../images/divorce2.jpg',
    description: {
        title1: "Contested Divorce",
        description1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam neque inventore sapiente porro deserunt enim, maiores omnis corporis reprehenderit sunt nulla, voluptatibus repudiandae iure nisi praesentium velit assumenda! Expedita, maiores! Est ullam iure necessitatibus harum dolorum, perferendis fugit, provident reprehenderit beatae cupiditate repudiandae qui laboriosam libero, excepturi natus quas animi consectetur quasi deleniti dolor ab. Itaque sunt quibusdam tempora rerum. Architecto odio libero impedit ipsam qui delectus omnis quam id a, eos voluptatibus est dignissimos aperiam nobis odit quia alias sapiente. Nulla provident iste illum, itaque ab in cupiditate sunt.",
        title2: "Uncontested/Semi-Contested Divorce",
        description2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam neque inventore sapiente porro deserunt enim, maiores omnis corporis reprehenderit sunt nulla, voluptatibus repudiandae iure nisi praesentium velit assumenda! Expedita, maiores! Est ullam iure necessitatibus harum dolorum, perferendis fugit, provident reprehenderit beatae cupiditate repudiandae qui laboriosam libero, excepturi natus quas animi consectetur quasi deleniti dolor ab. Itaque sunt quibusdam tempora rerum. Architecto odio libero impedit ipsam qui delectus omnis quam id a, eos voluptatibus est dignissimos aperiam nobis odit quia alias sapiente. Nulla provident iste illum, itaque ab in cupiditate sunt.",
        title3: "Military Divorce",
        description3: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam neque inventore sapiente porro deserunt enim, maiores omnis corporis reprehenderit sunt nulla, voluptatibus repudiandae iure nisi praesentium velit assumenda! Expedita, maiores! Est ullam iure necessitatibus harum dolorum, perferendis fugit, provident reprehenderit beatae cupiditate repudiandae qui laboriosam libero, excepturi natus quas animi consectetur quasi deleniti dolor ab. Itaque sunt quibusdam tempora rerum. Architecto odio libero impedit ipsam qui delectus omnis quam id a, eos voluptatibus est dignissimos aperiam nobis odit quia alias sapiente. Nulla provident iste illum, itaque ab in cupiditate sunt."
    },
    requirements: ['Past Three(3) months paystubs or LES', 'Previous Filings', 'Previous Agreements'],
}