import "./App.css";
import AppSection from "./Components/AppSection";
import CardSection from "./Components/CardSection";
import Footer from "./Components/Footer";
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AppSection />
      <CardSection />
      <Footer />
    </div>
  );
}

export default App;
