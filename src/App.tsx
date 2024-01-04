import "./index.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HeroSection from "./components/sectionsUI/HeroSection";
import CapsuleSection from "./components/sectionsUI/CapsulesSection";

function App() {
  return (
    <section>
      <Navbar />
      <main>
        <HeroSection />
        <CapsuleSection />
      </main>
      <Footer />
    </section>
  );
}

export default App;
