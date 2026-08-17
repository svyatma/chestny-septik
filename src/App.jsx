import { HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './utils/metrika';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PodborIUstanovka from './pages/PodborIUstanovka/PagePodborIUstanovka.jsx';
import PolitikaObrabotkiDannyh from './pages/PolitikaObrabotkiDannyh/PolitikaObrabotkiDannyh.jsx';
import PolitikaCookies from './pages/PolitikaCookies/PolitikaCookies.jsx';
import './App.scss';
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.jsx";
import CookieBanner from "./components/CookieBanner/CookieBanner.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import CatalogPage from './pages/CatalogPage/CatalogPage.jsx';

function App() {
  const location = useLocation();
  
  useEffect(() => {
    if (typeof window.ym === 'function') {
      window.ym(110089865, 'hit', location.pathname + location.search);
    }
  }, [location]);
  
  return (
    <>
      <Routes>
        {/*<Route path="/podbor-i-ustanovka" element={<PodborIUstanovka />} />*/}
        <Route path="/" element={<PodborIUstanovka />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/politika-obrabotki-dannyh" element={<PolitikaObrabotkiDannyh />} />
        <Route path="/politika-cookies" element={<PolitikaCookies />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
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