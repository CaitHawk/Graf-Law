import BreadCrumbs from "./breadCrumbs";

export default function MediationRouter() {
    return (
        <main>
            <BreadCrumbs
                linkPath='/services'
                linkTitle='Services'
                serviceLinkPath='/mediation'
                serviceLinkTitle='Mediation'
            />
            <h1>Mediation Page</h1>
        </main>
    )
}