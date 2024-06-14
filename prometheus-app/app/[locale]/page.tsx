import { useTranslations } from "next-intl";
import "styles/index.scss";

export default function Index() {
  const t = useTranslations("Index");
  return (
    <>
      <section className="extra-margin">
        <h1 className="slogan">{t("title")}</h1>
        <div className="contact-button">
          <span>Parašykite mums</span>
          <img src="/Icons/Arrow_right.png"></img>
        </div>
      </section>
      <section className="box">
        <div className="fifty">
          <h2>Paslaugos</h2>
          <ul className="square">
            <li>Tinklapių kūrimas</li>
            <li>Tinklapių atnaujinimas</li>
            <li>Tinklapių koregavimas</li>
            <li>Tinklapių išlaikymas</li>
          </ul>
        </div>
        <div className="fifty">
          <button className="orange-button">Sužinokite daugiau</button>
        </div>
      </section>
    </>
  );
}
