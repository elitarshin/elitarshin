import './index.css'
import App from './App.jsx'
import { createRoot } from 'react-dom/client'
import { initReactI18next } from 'react-i18next';
import i18next from 'i18next';
import { am } from './local/am/am.jsx';
import { en } from './local/en/en.jsx';
import { BrowserRouter } from 'react-router-dom';
import { createContext } from "react";
import { Provider } from 'react-redux';
import { store } from './store.jsx';


let defaultLanguage = localStorage.getItem("language") ||  "am";

i18next.use(initReactI18next).init({
  resources: {
    am: am,
    en: en,
  },
  lng: defaultLanguage,
  fallBackLng: defaultLanguage,
  interpolation: {
    escapeValue: false,
  },
});


  export const langsContext = createContext();
  const langs = [
    {
      id : Math.random(),
      title:"Հայ",
      lang:"am"
    },
    {
      id : Math.random(),
      title:"Eng",
      lang:"en"
    }
  ]

createRoot(document.getElementById('root')).render(
  <langsContext.Provider value={langs}>
    <BrowserRouter>
      <Provider store={store}>
        <App/>
      </Provider>
    </BrowserRouter>
  </langsContext.Provider>,
)
