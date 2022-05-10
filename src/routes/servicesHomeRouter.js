import BreadCrumbs from "./servicesRoutes/breadCrumbs"
import { Component } from 'react';

export default function ServicesHomeRouter() {
    return (
        <main className="servicesHomeMain">
            <BreadCrumbs linkPath="/services" linkTitle="Services" />
            {/* <ul className="cardsUl">
                {services.map(service => (
                    <li>
                        <ServiceCard
                            title={service.title}
                            path={`services/${service.title.split(" ").join("").toLowerCase()}`}
                            image={service.image}
                            shortDescription={service.shortDescription}
                            key={`${service.title.split(" ".join(""))}Card`}
                        />
                    </li>
                ))}
            </ul> */}
            <div className="mockCardUl">
                <ServiceCard
                    title={services[0].title}
                    image={services[0].image}
                    shortDescription={services[0].shortDescription}
                    path={`services/${services[0].title.toLowerCase()}`}
                />
                <ServiceCard
                    title={services[1].title}
                    image={services[1].image}
                    shortDescription={services[1].shortDescription}
                    path={`services/${services[1].title.toLowerCase()}`}
                />
                <ServiceCard
                    title={services[2].title}
                    image={services[2].image}
                    shortDescription={services[2].shortDescription}
                    path={`services/${services[2].title.toLowerCase()}`}
                />
                <ServiceCard
                    title={services[3].title}
                    image={services[3].image}
                    shortDescription={services[3].shortDescription}
                    path={`services/${services[3].title.toLowerCase()}`}
                />
                <ServiceCard
                    title={services[4].title}
                    image={services[4].image}
                    shortDescription={services[4].shortDescription}
                    path={`services/${services[4].title.split(" ").join("").toLowerCase()}`}
                />
                <ServiceCard
                    title={services[5].title}
                    image={services[5].image}
                    shortDescription={services[5].shortDescription}
                    path={`services/${services[5].title.split(" ").join("").toLowerCase()}`}
                />
            </div>
        </main>
    )
}

const services = [
    {
        title: 'Bankruptcy',
        image: '../images/custody',
        shortDescription: 'We offer assistance in filing for either a Chapter 7 or 13 bankruptcy.',
    },
    {
        title: 'Custody',
        image: 'images/custody2.jpg',
        shortDescription: 'Gain, regain, or maintain custody. Find support services and family resources.',
    },
    {
        title: 'Divorce',
        image: 'images/divorce2.jpg',
        shortDescription: 'We offer representation for contested, uncontested, semi-contested, and military divorces.',
    },
    {
        title: "Mediation",
        image: 'images/mediation2.jpg',
        shortDescription: 'Negotiate custody agreements, contracts, and settlements without the hassle of a courtroom.',
    },
    {
        title: 'Traffic Incidents',
        image: 'images/traffic1.jpg',
        shortDescription: 'Fight a traffic fine or violation for misdemenors such as Speeding Ticket, DUI, or minor accident'
    },
    {
        title: 'Wills and Trusts',
        image: 'images/willsandtrust.jpg',
        shortDescription: 'Secure your future and your families future with a Last Will and Testimony or Trust towards an estate.'
    }
];

class ServiceCard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="serviceCardDiv">
                <h1>{this.props.title}</h1>
                <div className="cardImgDiv">
                    <img src={this.props.image} alt={this.props.title} className="cardImg" />
                </div>
                <div className="cardDescriptionDiv">
                    <p>{this.props.shortDescription}</p>
                    <a href={this.props.path}>{"( See more )"}</a>
                </div>
            </div>
        )
    }
}