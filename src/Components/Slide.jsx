import React from 'react'
import styled from 'styled-components';

const Pic=styled.img`
width:100%;
height:100%;
`;

const Slide = ({url}) => {
  return (
    <>
       <Pic src={url} alt="" />
    </>
  )
}

export default Slide