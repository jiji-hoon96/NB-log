import { Helmet } from "react-helmet-async";
// containers
import Hexagonal from "containers/main/Hexagonal";
// components

const MainPage = () => {
  return (
    <>
      <Helmet>
        <title>NB#log - Main</title>
      </Helmet>
      <Hexagonal />
    </>
  );
};

export default MainPage;
