import React from "react";
import Dealer from "../components/Dealer";
import Header from "../components/Header";
import Layout from "../components/Layout";
import News from "../components/News";
import Slide from "../components/Slide";
import Slider from "../components/Slider";

export default function Home() {
  return (
    <Layout>
      <Header />
      <Slider/>
      <Slide/>
      <Dealer/>
      <News />
    </Layout>
  );
}
