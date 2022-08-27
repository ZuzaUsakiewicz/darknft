import { useState, createContext } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./theme/globalStyles";
import { theme } from "./theme/theme";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Creators from "./pages/Creators";
import Community from "./pages/Community";
import ErrorPage from "./pages/ErrorPage";
import ScrollToTop from "./components/ScrollToTop";
import nftdata from "./nftdata";

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
            <Route path="explore" element={<Explore />} />
            <Route path="creators" element={<Creators />} />
            <Route path="community" element={<Community />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </ScrollToTop>
      </NftContext.Provider>
    </ThemeProvider>
  );
}

export default App;
