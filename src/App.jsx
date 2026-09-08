import './App.scss';
import {Helmet, HelmetProvider} from 'react-helmet-async';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './utils/metrika';
import PodborIUstanovka from './pages/PodborIUstanovka/PagePodborIUstanovka.jsx';
import PolitikaObrabotkiDannyh from './pages/PolitikaObrabotkiDannyh/PolitikaObrabotkiDannyh.jsx';
import PolitikaCookies from './pages/PolitikaCookies/PolitikaCookies.jsx';
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.jsx";
import CookieBanner from "./components/CookieBanner/CookieBanner.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import CatalogPage from './pages/CatalogPage/CatalogPage.jsx';
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import SeptikDlyaDachi from "./pages/SeptikDlya/SeptikDlyaDachi/SeptikDlyaDachi.jsx";
import SeptikDlyaChastnogoDoma from "./pages/SeptikDlya/SeptikDlyaChastnogoDoma/SeptikDlyaChastnogoDoma.jsx";
import SeptikiEvrobion from "./pages/SeptikiEvrobion/SeptikiEvrobion.jsx";
import SeptikiTopas from "./pages/SeptikiTopas/SeptikiTopas.jsx";
import SeptikiAstra from "./pages/SeptikiAstra/SeptikiAstra.jsx";
import SeptikiEvrolos from "./pages/SeptikiEvrolos/SeptikiEvrolos.jsx";
import SeptikiZorde from "./pages/SeptikiZorde/SeptikiZorde.jsx";
import { stationRoutes, stationValidPaths } from './router/stationRoutes';
import { forPeopleRoutes, forPeopleValidPaths} from "./router/forPeopleRoutes.jsx";

const validPaths = [
  '/',
  '/catalog',
  
  '/septiki-evrobion',
  '/septiki-topas',
  '/septiki-astra',
  '/septiki-evrolos',
  '/septiki-zorde',
  
  ...forPeopleValidPaths,
  
  '/septik-dlya-chastnogo-doma',
  '/septik-dlya-dachi',
  
  ...stationValidPaths,
  
  '/politika-obrabotki-dannyh',
  '/politika-cookies',
];

function App() {
  const location = useLocation();
  const canonicalUrl = validPaths.includes(location.pathname)
    ? `https://chestnyseptik.ru${location.pathname === '/' ? '' : location.pathname}`
    : 'https://chestnyseptik.ru';
  
  useEffect(() => {
    if (typeof window.ym === 'function') {
      window.ym(110089865, 'hit', location.pathname);
    }
  }, [location.pathname]);
  
  return (
    
    <>
      <Helmet>
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      
      <Header />
      <main>
        <Routes>
          {/*<Route path="/podbor-i-ustanovka" element={<PodborIUstanovka />} />*/}
          <Route path="/" element={<PodborIUstanovka />} />
          
          <Route path="/catalog" element={<CatalogPage />} />
          
          <Route path="/septiki-evrobion" element={<SeptikiEvrobion />} />
          <Route path="/septiki-topas" element={<SeptikiTopas />} />
          <Route path="/septiki-astra" element={<SeptikiAstra />} />
          <Route path="/septiki-evrolos" element={<SeptikiEvrolos />} />
          <Route path="/septiki-zorde" element={<SeptikiZorde />} />
          
          {forPeopleRoutes.map(route => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
          
          <Route path="/septik-dlya-chastnogo-doma" element={<SeptikDlyaChastnogoDoma />} />
          <Route path="/septik-dlya-dachi" element={<SeptikDlyaDachi />} />
          
          {stationRoutes.map(route => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
          
          <Route path="/politika-obrabotki-dannyh" element={<PolitikaObrabotkiDannyh />} />
          <Route path="/politika-cookies" element={<PolitikaCookies />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}


export default function Root() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </BrowserRouter>
  );
}