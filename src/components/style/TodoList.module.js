import React from 'react';
import styled from 'styled-components';

// Creating a styled component
const Container = styled.section`
  justify-content: center;
  display:inline-block;
  width: 100%;
  h2{
    display:flex;
    justify-content: center;
  }
  .todoTable{
      tr{
        background-color:lightgray;
      }
      .tableSection{
        align-self: center;
      }
  }
  .addData{
    width: 30%;
    justify-content:center;
    display:flex;
    // margin:0px 350px;
    float:right
  }
`;

export default Container;
