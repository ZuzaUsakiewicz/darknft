import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./theme/globalStyles";
import { theme } from "./theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <h1>Nothing</h1>
    </ThemeProvider>
  );
}

export default App;
