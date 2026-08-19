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
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import SeptikFor3Users from "./pages/SeptikFor3Users/SeptikFor3Users.jsx";
import SeptikFor4Users from "./pages/SeptikFor4Users/SeptikFor4Users.jsx";
import SeptikFor2Users from "./pages/SeptikFor2Users/SeptikFor2Users.jsx";

function App() {
  const location = useLocation();
  
  useEffect(() => {
    if (typeof window.ym === 'function') {
      window.ym(110089865, 'hit', location.pathname);
    }
  }, [location.pathname]);
  
  return (
    <>
      <Header />
      <main>
        <Routes>
          {/*<Route path="/podbor-i-ustanovka" element={<PodborIUstanovka />} />*/}
          <Route path="/" element={<PodborIUstanovka />} />
          <Route path="/catalog" element={<CatalogPage />} />
          {/*<Route path="/septik-na-2-cheloveka" element={<SeptikFor2Users />} />*/}
          <Route path="/septik-na-3-cheloveka" element={<SeptikFor3Users />} />
          {/*<Route path="/septik-na-4-cheloveka" element={<SeptikFor4Users />} />*/}
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