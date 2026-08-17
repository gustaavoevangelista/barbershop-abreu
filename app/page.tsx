import Header from "./components/Header";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Story from "./components/Story";
import Team from "./components/Team";
import Services from "./components/Services";
import Ritual from "./components/Ritual";
import TicketDivider from "./components/TicketDivider";
import Reviews from "./components/Reviews";
import Location from "./components/Location";
import CtaBanner from "./components/CtaBanner";
import Footer from "./components/Footer";
import ScrollVinyl from "./components/ScrollVinyl";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <Story />
        <Team />
        <Services />
        <Ritual />
        <TicketDivider />
        <Reviews />
        <Location />
        <CtaBanner />
      </main>
      <Footer />
      <ScrollVinyl />
    </>
  );
}
