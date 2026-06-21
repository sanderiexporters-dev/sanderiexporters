import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, Home, Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOMetadata from "@/components/SEOMetadata";
import heroBg from "@/assets/hero-bg.jpg";
import { siteUrl } from "@/data/siteMetadata";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[#f5f8fb]">
      <SEOMetadata
        title="Page Not Found"
        description="The requested Sanderi Exporters page could not be found."
        url={`${siteUrl}${location.pathname}`}
        robots="noindex, follow"
      />

      <Navbar />

      <main>
        <section className="relative min-h-[78vh] overflow-hidden px-4 pb-16 pt-32 text-white md:pt-40">
          <div className="absolute inset-0">
            <img src={heroBg} alt="Sanderi Exporters page not found" className="h-full w-full object-cover" />
            <div className="hero-overlay absolute inset-0" />
            <div className="route-grid absolute inset-0" />
          </div>

          <div className="container relative mx-auto">
            <div className="max-w-3xl animate-reveal-up">
              <span className="badge-premium">
                <Search size={15} />
                404 page not found
              </span>
              <h1 className="mt-6 text-5xl text-white md:text-7xl">This trade route is not available.</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/76">
                The page you opened does not exist. Head back to the product desk or return home to continue exploring Sanderi Exporters.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link to="/" className="btn-accent">
                  Back Home <Home size={17} />
                </Link>
                <Link to="/products" className="btn-outline">
                  Explore Products <ArrowRight size={17} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
