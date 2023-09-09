import React from "react";
import "./App.css";
import { InputComponent } from "./components/InputComponent";
import { FlexColumn} from './styled/Flex';


function App() {
  return (
      <FlexColumn
        width="100%"
        height="100vh"
        justifyContent="center"
        alignItems="center"
      >
        <FlexColumn
          className="device"
          width="50%"
          height="80vh"
          alignItems="center"
          borderRadius="40px"
          color="yellow"
        >
          <h1>WEATHER</h1>
          <InputComponent />
        </FlexColumn>
        
      </FlexColumn>
  );
}

export default App;
