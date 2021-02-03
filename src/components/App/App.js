import React from "react";
import FormTest from "../form/Form.component";
import "./App.css";

function App() {
  return (
    <FormTest
      config={{
        name: "Brian",
        email: "me@you.com",
        specialPower: "invisibility",
      }}
    />
  );
}

export default App;
