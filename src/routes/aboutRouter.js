import BreadCrumbs from '../components/breadCrumbs';
import '../styles/aboutPage.css';
import hawaii1 from '../images/hawaii1.jpg';
import hawaii2 from '../images/hawaii2.jpg';
import hawaii3 from '../images/hawaii3.jpg';
import hsbaImg from '../images/hsba.png';
import abaImg from '../images/amricanbarassociation.jpg';
import bbbImg from '../images/betterBusiness2.png';

export default function AboutRouter() {
    return (
        <main>
            <BreadCrumbs linkPath="/about" linkTitle="About" />
            <main className="aboutMain">
                <h1 className="aboutPageTitle">Read about us:</h1>
                <div className="aboutSections">
                    <section className="aboutUsSection">
                        <img className="aboutImg" src={aboutPage.aboutUsImg} alt="hawaii" />
                        <div className="aboutInfoDiv">
                            <h2>What we do</h2>
                            <p>{aboutPage.aboutUs}</p>
                        </div>
                    </section>
                    <section className="aboutMeSection">
                        <img className="aboutImg" src={aboutPage.aboutMeImg} alt="hawaii" />
                        <div className="aboutInfoDiv">
                            <h2>Who we are</h2>
                            <p>{aboutPage.aboutMe}</p>
                        </div>
                    </section>
                </div>
                <section className="affiliationSection">
                    <img src={abaImg} atl="American Bar Association" className="affiliationImg" />
                    <img src={bbbImg} atl="Better Business Bureau" className="affiliationImg" />
                    <img src={hsbaImg} atl="Hawaii State Bar Association" className="affiliationImg" />
                </section>
            </main>
        </main>
    )
}


const aboutPage = {
    aboutUsImg: hawaii1,
    aboutUs: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam neque inventore sapiente porro deserunt enim, maiores omnis corporis reprehenderit sunt nulla, voluptatibus repudiandae iure nisi praesentium velit assumenda! Expedita, maiores! Est ullam iure necessitatibus harum dolorum, perferendis fugit, provident reprehenderit beatae cupiditate repudiandae qui laboriosam libero, excepturi natus quas animi consectetur quasi deleniti dolor ab. Itaque sunt quibusdam tempora rerum. Architecto odio libero impedit ipsam qui delectus omnis quam id a, eos voluptatibus est dignissimos aperiam nobis odit quia alias sapiente. Nulla provident iste illum, itaque ab in cupiditate sunt.",
    aboutMeImg: hawaii2,
    aboutMe: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam neque inventore sapiente porro deserunt enim, maiores omnis corporis reprehenderit sunt nulla, voluptatibus repudiandae iure nisi praesentium velit assumenda! Expedita, maiores! Est ullam iure necessitatibus harum dolorum, perferendis fugit, provident reprehenderit beatae cupiditate repudiandae qui laboriosam libero, excepturi natus quas animi consectetur quasi deleniti dolor ab. Itaque sunt quibusdam tempora rerum. Architecto odio libero impedit ipsam qui delectus omnis quam id a, eos voluptatibus est dignissimos aperiam nobis odit quia alias sapiente. Nulla provident iste illum, itaque ab in cupiditate sunt.",
}