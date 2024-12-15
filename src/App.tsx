import React from "react";
import "./App.css";

import {
  Button,
  StapleButton,
  RotatingBorder,
  SkewedBorder,
  ShinyCard,
} from "./lib/main";

function App() {
  return (
    <div>
      <Button variant="outlined" className="">
        Button
      </Button>
      <br />
      <br />
      <StapleButton className="">X</StapleButton>
      <br />
      <br />
      <ShinyCard
        headline="headline"
        main="main"
        link="link"
        // color="red"
        // colorTwo="blue"
        size="medium"
      >
        <h3>shiny card</h3>
      </ShinyCard>
      <br />
      <br />
      <RotatingBorder size="medium" rotate_color="red">
        <h3>rotating border</h3>
      </RotatingBorder>
      <br />
      <SkewedBorder variant="blue" size="medium">
        <div>
          <h3>skewed border</h3>
          <p>test hopefully works</p>
        </div>
      </SkewedBorder>
    </div>
  );
}

export default App;
