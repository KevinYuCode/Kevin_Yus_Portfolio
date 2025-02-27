import React from "react";
import { Layout } from "./components/ui/layout";
import { Navigation } from "./features/nav/components/nav";
import { Home } from "./app/home";
import Work from "./app/work";
import Hackathons from "./app/hackathons";

function App() {
  return (
    <>
      <Layout>
        <Navigation />
        <Home />
        <Work />
        <Hackathons />
      </Layout>
    </>
  );
}

export default App;
