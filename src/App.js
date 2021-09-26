// Elements
import ContainerFull from "./components/ContainerFull";
import { ThemeProvider } from "./context/ThemeContext";


function App() {
  return (
    <ThemeProvider>
      <ContainerFull />
    </ThemeProvider>
  );
}

export default App;
