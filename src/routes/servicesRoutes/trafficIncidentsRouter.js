import BreadCrumbs from "./breadCrumbs";

export default function TrafficIncidentsRouter() {
    return (
        <main>
            <BreadCrumbs
                linkPath='/services'
                linkTitle='Services'
                serviceLinkPath='/trafficIncidents'
                serviceLinkTitle='Traffic Incidents'
            />
            <h1>Traffic Incidents Page</h1>
        </main>
    )
}