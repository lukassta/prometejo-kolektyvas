import Image from "next/image";
import { useTranslations } from "next-intl";
import LocaleSwitcherButtons from "./LocaleSwitcherButtons";
import "styles/header.scss";
import { Link } from "../navigation";

import logo from "public/logo.png";

//Assets
//import logo from "public/logo.png";

export default function Header() {
  const t = useTranslations("Header");

  return (
    <header className="header">
      <Link href="/">
        <Image className="logo" src={logo} alt="" />
        <h1>{t("prometheus_collective")}</h1>
      </Link>
      <nav className="menu">
        <Link href="/services">{t("services")}</Link>
        <Link href="/benefit">{t("benefit")}</Link>
        <Link href="/process">{t("process")}</Link>
        <Link href="/about-us">{t("about-us")}</Link>
        <LocaleSwitcherButtons />
      </nav>
    </header>
  );
}
