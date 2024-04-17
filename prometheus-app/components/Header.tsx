import { useTranslations } from "next-intl";
import LocaleSwitcher from "./LocaleSwitcher";

export default function Header() {
  const t = useTranslations("Header");

  return (
    <header>
      <h1>{t("prometheus_collective")}</h1>
      <nav>Nav bar</nav>
      <LocaleSwitcher />
    </header>
  );
}
