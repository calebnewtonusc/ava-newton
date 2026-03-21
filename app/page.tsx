import Hero from "./components/Hero";
import MarqueeBanner from "./components/MarqueeBanner";
import Stats from "./components/Stats";
import EliteQualities from "./components/EliteQualities";
import Quotes from "./components/Quotes";
import PhotoMoments from "./components/PhotoMoments";
import FunFacts from "./components/FunFacts";
import FinalVerdict from "./components/FinalVerdict";

export default function Home() {
  return (
    <main style={{ background: "#09090f" }}>
      <Hero />
      <MarqueeBanner />
      <Stats />
      <EliteQualities />
      <Quotes />
      <PhotoMoments />
      <FunFacts />
      <FinalVerdict />
    </main>
  );
}
