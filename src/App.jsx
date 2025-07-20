import Banner from "./Banner";
import Footer from "./Footer";
import Languages from "./Languages";
import Locations from "./Locations";
import Profies from "./Profies";
import Services from "./Services";
import { useEffect, useState } from "react";

function App() {
  const [lang, setLang] = useState("ca");
  const whiteList = ["en", "es", "ru", "ca"];

  useEffect(() => {
    let sotrageLang = window.localStorage.getItem("lang");
    if (!sotrageLang || !whiteList.includes(sotrageLang)) return;
    setLang(sotrageLang);
  }, []);

  const changeLanguage = (language) => {
    if (!language || !whiteList.includes(language)) return;
    setLang(language);
    window.localStorage.setItem("lang", language);
  };

  return (
    <>
      <Banner lang={lang} />
      <Services lang={lang} />
      <Profies lang={lang} />
      <Locations lang={lang} />
      <Languages changeLanguage={changeLanguage} />
      <Footer lang={lang} />
    </>
  );
}

export default App;
