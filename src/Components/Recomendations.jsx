import React from 'react';
import Cards from '../Components/Cards';
import styled from 'styled-components';

let cards=[
     {
        "id":13,
        "title": "Temperament Ladies Women's New Loose Flocking Flower Coat Wide-leg Pants Two-piece Fashion Suit Women - S Black",
        "url": "https://imgaz.staticbg.com/thumb/large/oaupload/banggood/images/9D/A3/845a336e-e36d-4384-938b-012c71dd21d1.jpg.webp",
        "price": "2947.20",
 
       }, {
           "id":14,
           "category": "T-Shirts",
           "title": "Season New Casual Sports Suit Female Loose Thin Wide Leg Pants Sportswear Suit Two-piece - white XXL",
           "url": "https://imgaz1.staticbg.com/thumb/large/oaupload/banggood/images/5E/3E/5c7f01fb-8c13-4b31-9d87-118df40da80e.jpg.webp",
           "price": "2871.61",

       }, {
           "id":15,
           "title": "Season New Fashion Casual Large Size Striped Wide Leg Shorts Two-piece Slimming Net Red Suit Female - Blue XL",
           "url": "https://imgaz1.staticbg.com/thumb/large/oaupload/banggood/images/2F/75/71461c5b-5afb-44f4-903d-dd8ec268cd78.jpg.webp",
           "price": "2871.61",
},
{
           "id":16,   
           "title": "Women's New Suit Fashion Loose Thin Temperament Season Goddess Wide Leg Pants Two Sets Of Tide - L Black",
           "url": "https://imgaz3.staticbg.com/thumb/large/oaupload/banggood/images/32/1C/60b152be-5b0b-4edf-92ec-3ef9f9655858.jpg.webp",
           "price": "2871.61",
         
       }, 
{
        "title": "Season New Women's Black Two-piece Wide Leg Pants Printing Suit Casual Fashion Suit Female Large Size - S Black",
        "url": "https://imgaz2.staticbg.com/thumb/large/oaupload/banggood/images/B4/B9/f1c1804e-427b-42ab-bf62-293ade45ab1a.jpg.webp",
        "price": "2871.61",     
}];


const Container=styled.div`
     display:grid;
     grid-template-columns:repeat(5,1fr);
     gap:20px;
    `;
const Div=styled.div`
    width:90%;
    margin:20px auto;

    `;
const Recomendations = () => {
  return (
      <Div>
          <h4>Recommendations For You</h4>
    <Container>
        {cards.map(item=>
            <Cards {...item}/>
        )}
    </Container>
    </Div>
  )
}

export default Recomendations