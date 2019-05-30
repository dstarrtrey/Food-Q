import React from 'react';
import styled from 'styled-components';
import waitlisto from './waitlisto.png';
import waitlistyum from './waitlistyum.png';
import './LoadingBar.css';

const StyledBar = styled.div`
  display: grid;
  background-color: white;
  grid-template-columns: repeat(${props => props.amount}, 1fr);
  padding: 0;
  font-size: 20px;
  font-weight: lighter;
  border-radius: 10px;
  margin-bottom: 50px;
  justify-items: center;
  align-items: center;
`;

const StyledO = styled.img`
  border: 3px solid green;
  width: 50px;
  height: 30px;
`;

const StyledYum = styled.img`
  border: 3px solid yellow;
  width: 50px;
  height: 50px;
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
        if (index) return <img key={i} className="waitlistimg" src={waitlisto} alt="My Status" />
        {/* The final index */}
        if (i === myProgress.length - 1) return <img key={i} className="waitlistimg" src={waitlistyum} alt="Food Time" />
        {/* Any other index in between */}
        return <div key={i}>|</div>
      })}
    </StyledBar>
  );
};

export default LoadingBar;