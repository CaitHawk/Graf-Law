import BreadCrumbs from "./breadCrumbs";

export default function DivorceRouter() {
    return (
        <main>
            <BreadCrumbs
                linkPath='/services'
                linkTitle='Services'
                serviceLinkPath='/divorce'
                serviceLinkTitle='Divorce'
            />
            <h1>Divorce Page</h1>
        </main>
    )
}