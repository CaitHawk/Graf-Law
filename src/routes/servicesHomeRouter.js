import BreadCrumbs from '../components/breadCrumbs';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import custodyImage from '../images/custody2.jpg';
import divorceImage from '../images/divorce1.jpg';
import bankruptcyImage from '../images/bankruptcy.jpg';
import mediationImage from '../images/mediation1.jpg';
import trafficImage from '../images/traffic1.jpg';
import willsandtrustsImage from '../images/willsandtrusts.jpg';

const services = [
    {
        title: 'Bankruptcy',
        image: bankruptcyImage,
        shortDescription: 'We offer assistance in filing for either a Chapter 7 or 13 bankruptcy.',
    },
    {
        title: 'Custody',
        image: custodyImage,
        shortDescription: 'Gain, regain, or maintain custody. Find support services and family resources.',
    },
    {
        title: 'Divorce',
        image: divorceImage,
        shortDescription: 'We offer representation for contested, uncontested, semi-contested, and military divorces.',
    },
    {
        title: "Mediation",
        image: mediationImage,
        shortDescription: 'Negotiate custody agreements, contracts, and settlements without the hassle of a courtroom.',
    },
    {
        title: 'Traffic Incidents',
        image: trafficImage,
        shortDescription: 'Fight a traffic fine or violation for misdemenors such as Speeding Ticket, DUI, or minor accident'
    },
    {
        title: 'Wills and Trusts',
        image: willsandtrustsImage,
        shortDescription: 'Secure your future and your families future with a Last Will and Testimony or Trust towards an estate.'
    }
];

export default function ServicesHomeRouter() {
    return (
        <main className="servicesHomeMain">
            <BreadCrumbs linkPath="/services" linkTitle="Services" />
            <ul className="mockCardUl">
                {services.map(service => (
                    <li key={`${service.title.split(" ").join("")}Card`} className="serviceCardDiv">
                        <ServiceCard
                            title={service.title}
                            path={`${service.title.split(" ").join("").toLowerCase()}`}
                            image={service.image}
                            shortDescription={service.shortDescription}
                        />
                    </li>
                ))}
            </ul>
        </main>
    )
}


class ServiceCard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Link to={this.props.path} className='serviceCardLink'>
                <h1 className="cardTitle">{this.props.title}</h1>
                <div className="cardImgDiv">
                    <img src={this.props.image} alt={this.props.title} className="cardImg" />
                </div>
                <div className="cardDescriptionDiv">
                    <p>{this.props.shortDescription}</p>
                    <a href={this.props.path}>{"( See more )"}</a>
                </div>
            </Link>
        )
    }
}