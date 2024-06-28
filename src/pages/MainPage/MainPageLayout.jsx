import { Outlet } from "react-router-dom";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { Navigation } from "../../components/Header/Navigation";

function MainPageLayout() {
  return (
    <>
      <Header />
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
}
export { MainPageLayout };
