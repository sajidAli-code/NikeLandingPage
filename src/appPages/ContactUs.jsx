'use client';
import { Nav } from "../components";
import {
    Footer,
    Subscribe
} from "../sections";
import ContactForm from "../components/ContactForm";
import MapContainer from "../components/MapContainer";

const ContactUs = () => {
    return (
        <>
            <main className="relative">
                <Nav />
                <section className="padding">
                    <ContactForm />
                </section>
                <section className="padding">
                    <MapContainer />
                </section>
                <section className="padding-x sm:py-32 py-16 w-full">
                    <Subscribe />
                </section>
                <section className=" bg-black padding-x padding-t pb-8">
                    <Footer />
                </section>
            </main>
        </>
    )
}

export default ContactUs