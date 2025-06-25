
import AboutUsSection from "../Components/AboutUsSection"
import BrandSection from "../Components/BrandsSection"
import CategorySection from "../Components/categorySection"
// import DiscountBanner from "../Components/DiscountBanner"
import FeaturedProductsSection from "../Components/FeaturedProductsSection"
import FeatureSection from "../Components/FeatureSection"
import Footer from "../Components/Footer"
import Hero from "../Components/Hero"
import Testimonials from "../Components/Testimonials"
import TrendingProducts from "../Components/TrendingProducts"
import Cart from "./Cart"

const Home = () => {
    return (
        <>




            <Hero />
            <CategorySection />
            <TrendingProducts />
            <AboutUsSection />
            <FeatureSection />
            <FeaturedProductsSection />
            <Testimonials />
            <BrandSection />
            <Footer />

            {/* <DiscountBanner /> */}

        </>
    )
}
export default Home