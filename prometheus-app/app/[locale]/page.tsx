import { useTranslations } from "next-intl";
import "styles/index.scss";


export default function Index() {
  const t = useTranslations("Index");
  return (
    <>
      <section>
        <h1 className="slogan">{t("title")}</h1>
        <div className="contact-button">
          <span>Parašykite mums</span>
          <img src="/Icons/Arrow_right.png"></img>
        </div>
        
      </section>
    </>
  );
}
