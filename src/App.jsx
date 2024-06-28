import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./style/style.css";
import { Header } from "./components/Header/Header";
import { MainPageLayout } from "./pages/MainPage/MainPageLayout";
import { routes } from "./routes/routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainPageLayout />}>
          {routes.map((route) => {
            return (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            );
          })}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
