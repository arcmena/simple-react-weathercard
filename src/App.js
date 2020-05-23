import React from "react";

import Weather from "./components/Weather/index.jsx";
import { AppWhrapper } from "./styles";

export default function App() {
  return (
    <AppWhrapper>
      <Weather location="são paulo" />
    </AppWhrapper>
  );
}
