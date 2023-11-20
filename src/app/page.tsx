import Header from "./layouts/Header";
import About from "./layouts/About";
import Offerts from "./layouts/Offerts";
import MainComponent from "./layouts/MainComponent";
import Profits from "./layouts/Profits";
import DownloadApp from "./layouts/DownloadApp";
import Contact from "./layouts/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <MainComponent />
      <About />
      <Offerts />
      <Profits/>
      <DownloadApp/>
      <Contact/>
    </>
  );
}
