import React from 'react'
import Cards from './Cards';
import data from '../Hardcode.json';
import styled from 'styled-components';

const Container=styled.div`
width:90%;
margin:30px auto;
display:grid;
grid-template-columns:repeat(6,1fr);
grid-template-rows:310px 310px 310px;
grid-gap:15px;
overflow-x: auto;
`;

const AllCards = () => {
  return (
      <>
      
      <h3 style={{textAlign:"left"}}>Recommendations For You</h3>
    <Container>
       {data.map(item=>{
            return(
                <>
                 <Cards {...item}/>
                </>
            )
        })}
    </Container>
  
    </>
  )
}

export default AllCards