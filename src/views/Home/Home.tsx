import { Gallery } from "../../components/Gallery/Gallery";
import { Navbar } from "../../components/NavBar/Navbar";
import css from "./home.module.css";
export const Home = () => {
  return (
    <div className={css.container}>
      <Navbar />
      <Gallery/>
    </div>
  );
};
