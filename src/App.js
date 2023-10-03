import React, { useEffect, useState } from "react";
import "./App.css";
import Comp1 from "./components/component1/comp1";
import Comp2 from "./components/component2/Comp2";
import data from "./styles.json";

function App() {
  const [themeData, setThemeData] = useState("");
  const objectKeys = Object.keys(data);

  const getTheme = (key, themeStyle) => {
    console.log(key, JSON.parse(themeStyle));
    setThemeData(JSON.parse(themeStyle));
  };

  return (
    <div className="App">
      <div style={themeData?.homePage?.layout}>
      <Comp1 themeData={themeData?.homePage?.['top-banner-section']} />
      <Comp2 themeData={themeData?.homePage?.['trending-products-section']}/>
      </div>
      
      <div style={{ display: "flex", flexDirection: "column", rowGap: "2rem" }}>
        <h2>Choose themes</h2>
        <div style={{ display: "flex", columnGap: "1rem" }}>
          {objectKeys.map((key, index) => (
            <h2
              key={index}
              style={{
                border: "1px solid black",
                padding: "4rem",
                cursor: "pointer",
              }}
              onClick={() => getTheme(key, JSON.stringify(data[key], null, 2))}
            >
              {key}
            </h2>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
