import Header from "./components/header";
import Hero from "./components/hero";
import Body from "./components/body";
import Bodyt from "./components/bodyt";
import Bodythree from "./components/bodythree";
import Bodyfour from "./components/bodyfour";
import Bodyfive from "./components/bodyfive";
import Bodysix from "./components/bodysix";
import Footerbg from "./components/footerbg";
import Footer from "./components/footer";

function App() {
  return (
    <div className="pt-0 lg:pt-0 overflow-hidden">
      <Header></Header>
      <Hero></Hero>
      <Body></Body>
      <Bodyt></Bodyt>
      <Bodythree></Bodythree>
      <Bodyfour></Bodyfour>
      <Bodyfive></Bodyfive>
      <Bodysix></Bodysix>
      <Footerbg></Footerbg>
      <Footer></Footer>
    </div>
  );
}

export default App;
