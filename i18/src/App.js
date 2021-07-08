import logo from './logo.svg';
import './App.css';
import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';

function HeaderComponent (){
  const {t, i18n} = useTranslation('common');

  return (
    <div>
      <h1>{t('welcome.title', {framework:'React'})}</h1>
      <button onClick={()=> i18n.changeLanguage('de')}>de</button>
      <button onClick={()=> i18n.changeLanguage('en')}>en</button>
      <button onClick={()=> i18n.changeLanguage('ko')}>ko</button>
    </div>
  )
}

function App() {
  return (
    <Suspense fallback="loading" >
      <div className="App">
        <HeaderComponent/>
      </div>
    </Suspense>
  );
}

export default App;
