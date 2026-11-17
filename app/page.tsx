import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CloudTransition from "@/components/CloudTransition";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FallingLeaves from "@/components/FallingLeaves";

export default function Home() { return <main className="portfolio-page"><FallingLeaves /><Navbar /><Hero /><CloudTransition /><About /><Experience /><Portfolio /><Contact /><Footer /></main>; }
