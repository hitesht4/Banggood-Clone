import React,{useState} from 'react';
import './style.css';


const Sidebar = ({Sort,filterBtn,filterBrand,filterCat}) => {
    const [open,isOpen]=useState(true);
    const [open1,isOpen1]=useState(true);
    const [open2,isOpen2]=useState(true);
    const [open3,isOpen3]=useState(true);
    const [open4,isOpen4]=useState(true);
    const [open5,isOpen5]=useState(true);

    const handleDrop=(value)=>{
      if(value===0){
          isOpen(!open);
      }
      else if(value===1){
        isOpen1(!open1);
      }
      else if(value===2){
        isOpen2(!open2);
      }
      else if(value===3){
        isOpen3(!open3);
      }
      else if(value===4){
        isOpen4(!open4);
      }
      else{
        isOpen5(!open5)
      }
        
    }
  return (

    <>
        <div className="dropdown">
      <div className="dropdown-btn" onClick={()=>handleDrop(4)}>Sort By Price
      <span style={{fontWeight:"bold"}}>+</span>
      </div>
        {open4 ? <div className="dropdown-content">
                <div className="dropdown-item" onClick={()=>Sort("Low","P")}>Low To High</div> 
                <div className="dropdown-item" onClick={()=>Sort("High","P")}>High To Low</div>   
          </div> :""} 
    </div>
        <div className="dropdown">
      <div className="dropdown-btn" onClick={()=>handleDrop(5)}>Sort By ratings
      <span style={{fontWeight:"bold"}}>+</span>
      </div>
        {open5 ? <div className="dropdown-content">
                <div className="dropdown-item" onClick={()=>Sort("Low","R")}>Low To High</div> 
                <div className="dropdown-item" onClick={()=>Sort("High","R")}>High To Low</div>   
          </div> :""} 
    </div>
    <div>
    <div className="dropdown">
      <div className="dropdown-btn" onClick={()=>handleDrop(0)}>Filter By Color
      <span style={{fontWeight:"bold"}}>+</span>
      </div>
        {open ? <div className="dropdown-content">
                <div className="dropdown-item" onClick={()=>filterBtn("Black")}>Black</div> 
                <div className="dropdown-item" onClick={()=>filterBtn("Blue")}>Blue</div> 
                <div className="dropdown-item" onClick={()=>filterBtn("Colorblocked")}>Colorblocked</div> 
                <div className="dropdown-item" onClick={()=>filterBtn("Striped")}>Stripes</div>   
          </div> :""} 
    </div>
    </div>
    <div className="dropdown">
      <div className="dropdown-btn" onClick={()=>handleDrop(1)}>Filter By Categories
      <span style={{fontWeight:"bold"}}>+</span>
      </div>
        {open1 ? <div className="dropdown-content">
                <div className="dropdown-item" onClick={()=>filterCat("T-Shirts")}>Tshirts</div> 
                <div className="dropdown-item" onClick={()=>filterCat("pants")}>Pants</div> 
                <div className="dropdown-item" onClick={()=>filterCat("Shirt")}>Shirts</div>   
          </div> :""} 
    </div>
        <div className="dropdown">
      <div className="dropdown-btn" onClick={()=>handleDrop(2)}>Filter By Brands
      <span style={{fontWeight:"bold"}}>+</span>
      </div>
        {open2 ? <div className="dropdown-content">
                <div className="dropdown-item" onClick={()=>filterBrand("Reebok")}>Reebok</div> 
                <div className="dropdown-item" onClick={()=>filterBrand("Nike")}>Nike</div> 
                <div className="dropdown-item" onClick={()=>filterBrand("Adidas")}>Adidas</div>   
          </div> :""} 
    </div>
    </>
  )
}

export default Sidebar