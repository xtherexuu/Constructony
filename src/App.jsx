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

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<MainLayout />}></Route>)
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
