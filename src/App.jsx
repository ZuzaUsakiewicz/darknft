import React, { useState, createContext, Suspense } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./theme/globalStyles";
import { theme } from "./theme/theme";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Home from "./pages/Home";
import Creators from "./pages/Creators";
import Community from "./pages/Community";
import ScrollToTop from "./components/ScrollToTop";
import nftdata from "./data/nftdata";
import Page404 from "./components/404/Page404";
import Footer from "./components/Footer/Footer";
import { AllAuctions } from "./components/ExplorePage/AllAuctions";

const Explore = React.lazy(() => import("./pages/Explore"));

export const NftContext = createContext();

function App() {
  const [data] = useState(nftdata);

  return (
    <ThemeProvider theme={theme}>
      <NftContext.Provider value={data}>
        <ScrollToTop>
          <GlobalStyle />
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="explore/"
              element={
                <React.Suspense fallback={<div>Loading...</div>}>
                  <Explore />
                </React.Suspense>
              }
            >
              <Route index element={<AllAuctions />} />
              <Route path="*" element={<Page404 />} />
            </Route>
            <Route path="creators" element={<Creators />} />
            <Route path="community" element={<Community />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </NftContext.Provider>
    </ThemeProvider>
  );
}

export default App;
