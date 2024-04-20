import { useTranslations } from "next-intl";
import LocaleSwitcherButtons from "./LocaleSwitcherButtons";
import "styles/header.scss";

//Assets
//import logo from "public/logo.png";

export default function Header() {
  const t = useTranslations("Header");

  return (
    <header className="header">
      <img className="logo" src="logo.png" alt=""></img>
      <h1>{t("prometheus_collective")}</h1>
      <div className="menu">
        <span>PASLAUGOS</span>
        <span>NAUDA</span>
        <span>PROCESAS</span>
        <span>APIE MUS</span>
        <LocaleSwitcherButtons />
      </div>
      
      
    </header>
  );
}
