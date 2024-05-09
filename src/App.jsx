import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { store } from "../redux/store.js";
import { useTheme } from "../redux/useTheme.js";
import { GlobalStyles } from "../style/GlobalStyles.js";
import { MainLayout } from "./layouts/MainLayout";
import { HomePage } from "./components/Pages/Home/index.jsx";
import About from "./components/Pages/About/index.jsx";
import Offer from "./components/Pages/Offer/index.jsx";
import Contact from "./components/Pages/Contact/index.jsx";
import Projects from "./components/Pages/Projects/index.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="aboutus" element={<About />} />
      <Route path="offer" element={<Offer />} />
      <Route path="contact" element={<Contact />} />
      <Route path="projects" element={<Projects />} />
    </Route>
  )
);

function App() {
  const theme = useTheme();

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
        <GlobalStyles />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
