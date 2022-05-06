import BreadCrumbs from "./breadCrumbs"

export default function BankruptcyRouter() {
    return (
        <main>
            <BreadCrumbs
                linkPath='/services'
                linkTitle='Services'
                serviceLinkPath='/bankrupcy'
                serviceLinkTitle='Bankruptcy'
            />
            <h1>Bankruptcy Page</h1>
        </main>
    )
}