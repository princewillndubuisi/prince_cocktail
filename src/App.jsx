import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger, TextPlugin } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const App = () => {
  return (
    <div className="flex-center h-screen">
      <h1 className="text-3xl text-yellow-600">Helloooopppp</h1>
    </div>
  );
};

export default App;
