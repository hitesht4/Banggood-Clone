import React from 'react'
import Cards from './Cards';
import data from '../Hardcode.json';
import styled from 'styled-components';

const Container=styled.div`
width:100%;
margin:30px auto;
display:grid;
grid-template-columns:repeat(6,1fr);
grid-template-rows:310px 310px 310px;
grid-gap:15px;
overflow-x: auto;
`;
const MainContainer=styled.div`
width:90%;
margin:30px auto;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

`;

const AllCards = () => {
  return (
      <MainContainer>
      <div className="p-3">
      <h5 >Recommendations For You</h5>
      </div>
    <Container>
       {data.map(item=>{
            return(
                <>
                 <Cards {...item}/>
                </>
            )
        })}
    </Container>
  
    </MainContainer>
  )
}

export default AllCards