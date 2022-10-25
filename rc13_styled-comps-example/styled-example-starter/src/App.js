import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
const theme = {
  colors: {
    header: "#333",
    body: "#fff",
    footer: "#8a1c4a",
  },
  margins: {},
  responsive: {},
};

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    </>
  );
};

export default App;
