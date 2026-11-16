import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import SkillsPortfolio from "@/components/SkillsPortfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return <main className="site-grid relative min-h-screen overflow-hidden"><div className="blob left-[-10rem] top-[20rem] h-72 w-72 bg-purple-600" /><div className="blob right-[-8rem] top-[42rem] h-80 w-80 bg-cyan-500" /><Navbar /><Hero /><About /><SkillsPortfolio /><Contact /><Footer /></main>;
}
