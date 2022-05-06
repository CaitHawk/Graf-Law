import BreadCrumbs from "./breadCrumbs"

export default function CustodyRouter() {
    return (
        <main>
            <BreadCrumbs
                linkPath='/services'
                linkTitle='Services'
                serviceLinkPath='/custody'
                serviceLinkTitle='Custody'
            />
            <h1>Custody Page</h1>
        </main>
    )
}