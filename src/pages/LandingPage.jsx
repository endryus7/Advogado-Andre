import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import PracticeAreas from "../components/PracticeAreas";
import Services from "../components/Services";
import Process from "../components/Process";
import Differentials from "../components/Differentials";
import VideoSection from "../components/VideoSection";
import CTA from "../components/CTA";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import WhatsAppFloat from "../components/WhatsAppFloat";
import "../styles/landing.css";
import styles from "./LandingPage.module.css";

export default function LandingPage() {
  return (
    <div className={`al-root ${styles.page}`}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <PracticeAreas />
        <Services />
        <Process />
        <Differentials />
        <VideoSection />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}