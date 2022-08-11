import React from "react";
import Banner from "./Banner";
import Client from "./Client";
import Services from "./Services";

type HomeProps = {};

const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <Banner />
      <Client />
      <Services />
    </>
  );
};
export default Home;
