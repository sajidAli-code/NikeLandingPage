import { Nav } from "../components";
import {
    Footer,
    PopularProducts,
    SpecialOffer,
    Subscribe
} from "../sections";

const Products = () => {
    return (
        <>
            <main className="relative">
                <Nav />
                <section className="padding">
                    <SpecialOffer />
                </section>
                <section className="padding">
                    <PopularProducts />
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

export default Products