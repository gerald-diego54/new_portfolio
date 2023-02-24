import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import About from "./components/About";
import Contact from "./components/Contact";
import GoogleMap from "./components/GoogleMap";
import Footer from "./components/Footer";

const App: React.FC = (): JSX.Element => {
    return (
        <div className="bg-black w-full">
            <Navbar />
            <Hero />
            <TechStack />
            <About />
            <Contact />
            <GoogleMap />
            <Footer />
        </div>
    );
};

export default App;
