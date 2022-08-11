import React from "react";
import Banner from "./Banner";
import Client from "./Client";

type HomeProps = {};

const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <Banner />
      <Client />
    </>
  );
};
export default Home;
