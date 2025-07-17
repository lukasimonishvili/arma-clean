import Banner from "./Banner";
import Languages from "./Languages";
import Locations from "./Locations";
import Profies from "./Profies";
import Services from "./Services";
import { useEffect, useState } from "react";

function App() {
  const [lang, setLang] = useState("es");
  const whiteList = ["en", "es", "ru"];

  useEffect(() => {
    let sotrageLang = window.localStorage.getItem("lang");
    if (!sotrageLang || !whiteList.includes(sotrageLang)) return;
    setLang(sotrageLang);
  }, []);

  const changeLanguage = (language) => {
    console.log("hiiiiiii");
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
    </>
  );
}

export default App;
