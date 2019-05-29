import React from 'react';
import styled from 'styled-components';

const StyledBar = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.amount}, 1fr);
  border: 1px solid gray;
  padding: 0;
  background-color: white;
  margin-bottom: 10px;
  line-height: 1.5;
  justify-items: center;
`;

const LoadingBar = ({ starts, index }) => {
  console.log(starts.startingLength, index);
  const myProgress = Array(starts.startingLength).fill(false);
  myProgress[myProgress.length - index - 1] = true;
  console.log(myProgress);
  return (
    <StyledBar amount={starts.startingLength}>
      {myProgress.map((index, i) => {
        if (index && i === myProgress.length - 1) return <div key={i}>FOOD TIME</div> 
        if (index) return <div key={i}>O</div>
        if (i === myProgress.length - 1) return <div key={i}>YUM</div>
        return <div key={i}>|</div>
      })}
    </StyledBar>
  );
};

export default LoadingBar;