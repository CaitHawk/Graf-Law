import BreadCrumbs from "./servicesRoutes/breadCrumbs"

export default function ServicesHomeRouter() {
    return (
            <main className="servicesHomeMain">
                <BreadCrumbs linkPath="/services" linkTitle="Services" />
                <h1>Services Home</h1>
            </main>
    )
}