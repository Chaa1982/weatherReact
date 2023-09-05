import React from 'react'
import { FlexRow } from '../styled/Flex'
import styled from 'styled-components';
import { Button } from '../styled/Button';

export const InputComponent = () => {
  return (
    <FlexRow>
       <input type='text' placeholder='enter city'/>

        <Button height='23px'>get data</Button> 
    </FlexRow>
    

  )
}
