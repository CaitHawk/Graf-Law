import BreadCrumbs from "./breadCrumbs";

export default function WillsAndTrustsRouter() {
    return (
        <main>
            <BreadCrumbs
                linkPath='/services'
                linkTitle='Services'
                serviceLinkPath='/willsandtrusts'
                serviceLinkTitle='Wills and Trusts'
            />
            <h1>Wills and Trusts Page</h1>
        </main>
    )
}