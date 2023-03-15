import React from 'react'
import { useTranslation } from "react-i18next";
import i18next from "i18next";
  const languageMap = {
    en: { label: "English", dir: "ltr", active: true },
    ur: { label: "اردو", dir: "ltr", active: false },
   
  };
const LanguageSelect = () => {
    const selected = localStorage.getItem("i18nextLng") || "en";
  const { t } = useTranslation();

  const [menuAnchor, setMenuAnchor] = React.useState(null);
  React.useEffect(() => {
    document.body.dir = languageMap[selected].dir;
  }, [menuAnchor, selected]);


  return (
    <>
    
    <div className="d-flex justify-content-end align-items-center language-select-root">
      <select
      style={{
        borderColor: 'purple',
        color: 'white',
        borderWidth: '2.5px',
        borderStyle: 'solid',
      }}
       header={t("select_language")}
     
        className="form-select  text-dark"
        value={selected}
        onChange={(event) => {
          i18next.changeLanguage(event.target.value);
          setMenuAnchor(null);
        }}
      >
        {Object.keys(languageMap)?.map((item) => (
          <option value={item} key={item}>
            {languageMap[item].label}
          </option>
        ))}
      </select>
    </div>
    </>
  )
}

export default LanguageSelect
