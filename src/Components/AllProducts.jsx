import React from 'react';
import Product from './Product';
import styled from 'styled-components';



const ProductContainer=styled.div`
display:grid;
grid-template-columns:repeat(4,1fr);
grid-template-rows:auto;
width:100%;
margin:auto;
grid-gap:10px;
`;
const AllProducts = (item) => {
  return (
    <ProductContainer >
        {item.props.map(item=>
          <Product {...item}/>
        )}
    </ProductContainer>
  )
}

export default AllProducts;