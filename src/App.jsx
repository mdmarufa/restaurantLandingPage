import "./App.scss";
import Header from "./components/Header/Header";
import Hero from "./components/hero/Hero";
import Catagory from "./components/catagori/Catagory";
import SpecialDish from "./components/specialDish/SpecialDish";
import Testimonials from "./components/testimonials/Testimonials";
import ServicesComponent from "./components/servicesComponent/Services";
import Footer from "./components/footer/Footer";
import { DataContext } from "./context/Context";
import { use, useEffect, useRef, useState } from "react";
import handleScroll from "./handler/handleScroll";
import handleDocClick from "./handler/documentOnclikcHandle";
import handleAutoResponsive from "./handler/handleAutoResponsive";

function App() {
  const appRef = useRef(); // HTML tag or classname
  const headerRef = useRef(); // HTML tag or classname
  const mainRef = useRef(); // HTML tag or classname

  const [appAutoReSize, setStyles] = useState({});
  const [mainWindHeight, setMainWindHeight] = useState({});

  const dataContext = use(DataContext);
  document.onclick = (e) => handleDocClick(e, dataContext);

  const handleAutoRes = () => {
    const appMaxWidth = 1440; //px
    if (innerWidth > appMaxWidth) {
      handleAutoResponsive(
        appRef,
        appMaxWidth,
        setStyles,
        headerRef,
        setMainWindHeight
      );
    }
  };

  window.onresize = handleAutoRes;
  useEffect(handleAutoRes, []);

  return (
    <div className={`app`} ref={appRef} style={appAutoReSize}>
      <Header ref={headerRef} />
      <main
        onScroll={(e) => handleScroll(e, dataContext)}
        ref={mainRef}
        style={mainWindHeight}
      >
        <Hero />
        <Catagory />
        <SpecialDish />
        <Testimonials />
        <ServicesComponent />
        <Footer />
      </main>
    </div>
  );
}

export default App;
