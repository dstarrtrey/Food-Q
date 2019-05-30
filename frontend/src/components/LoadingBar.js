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

  // Array of indexes, one of which is the user's.
  // ie. [false, false, true , false false false false]
  const myProgress = Array(starts.startingLength).fill(false);
  myProgress[myProgress.length - index - 1] = true;
  
  return (
    <StyledBar amount={starts.startingLength}>
      {myProgress.map((index, i) => {
        {/* If it is the user's turn */}
        if (index && i === myProgress.length - 1) return <div key={i}>FOOD TIME</div> 
        {/* The user's index */}
        if (index) return <div key={i}>O</div>
        {/* The final index */}
        if (i === myProgress.length - 1) return <div key={i}>YUM</div>
        {/* Any other index in between */}
        return <div key={i}>|</div>
      })}
    </StyledBar>
  );
};

export default LoadingBar;