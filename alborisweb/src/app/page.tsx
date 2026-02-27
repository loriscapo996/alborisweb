import Header from "@/components/landing-page/Header";
import Hero from "@/components/landing-page/Hero";
import PortaleFeatures from "@/components/landing-page/PortaleFeatures";
import DirectoryDemo from "@/components/landing-page/DirectoryDemo";
import Articles from "@/components/landing-page/Articles";
import ForCompanies from "@/components/landing-page/ForCompanies";
import Pricing from "@/components/landing-page/Pricing";
import HowItWorks from "@/components/landing-page/HowItWorks";
import ContactForm from "@/components/landing-page/ContactForm";
import Footer from "@/components/landing-page/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <PortaleFeatures />
        <DirectoryDemo />
        <Articles />
        <ForCompanies />
        <Pricing />
        <HowItWorks />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
