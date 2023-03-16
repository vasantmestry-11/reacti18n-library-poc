import { Suspense, useState } from "react";
import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";


const translationEn = {
  welcome: "Welcome!!!",
  changed: "You have changed language {{count}} time",
  changed_other: "You have changed language {{count}} times",
};

const translationFr = {
  welcome: "Bienvenue!",
  changed: "Vous avez changé de langue {{count}} fois",
};

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: translationEn },
    fr: { translation: translationFr },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    esacapeValue: false,
  },
});

function App() {
  const { t } = useTranslation();
  const [count, setCount] = useState(0);

  const handleChange = (event) => {
    i18n.changeLanguage(event.target.value);
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <Suspense fallback="Loading...">
      <div className="app">
        <header className="app-header">
          <h1>{t("welcome")}</h1>
          <p>
            Sample
            <strong>
              <i> text</i>
            </strong>
            .
          </p>

          <p>{t("changed", { count })}</p>
          <select name="language" onChange={handleChange}>
            <option value="en">English</option>
            <option value="fr">French</option>
          </select>
        </header>
      </div>
    </Suspense>
  );
}

export default App;
