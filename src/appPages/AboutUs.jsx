import { Nav } from "../components";
import {
  Footer,
  Services,
  Subscribe,
  SuperQuality,
} from "../sections";

const AboutUs = () => {
  return (
    <>
        <main className="relative">
        <Nav />
        <section className="padding">
          <SuperQuality />
        </section>
        <section className="padding-x py-10">
          <Services />
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

export default AboutUs