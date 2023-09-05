import React from 'react';
import './App.css';
import { InputComponent } from './components/InputComponent';
import { FlexColumn } from './styled/Flex';

function App() {
  return (
    <FlexColumn width='100%' height='100vh' justifyContent='center' alignItems='center' background='lightblue'>
      <FlexColumn width='50%' height='80vh' alignItems='center' background='blue' borderRadius='40px' color='white'>
        <h1>WEATHER</h1>
        <InputComponent/>
      </FlexColumn>
        
      
    </FlexColumn>
    
  );
}

export default App;
