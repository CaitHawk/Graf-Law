import BreadCrumbs from "./servicesRoutes/breadCrumbs";

export default function AboutRouter() {
    return (
        <main>
            <BreadCrumbs linkPath="/about" linkTitle="About" />
            <h1>About Page</h1>
        </main>
    )
}