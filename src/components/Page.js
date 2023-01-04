import { useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import data from "../data";

function Page(){
    let [shirts, setShirts] = useState(data);
    let navigate = useNavigate();
    console.log(shirts);

    return(
        <>
 
        <img src="img/교보2.png"  alt='교보2' width={'100%'} height={'50%'}></img>
        <br></br>
        <br></br>
<h4>베스트 셀러</h4>

<div className="container">
 <div className="row">
   {
   shirts.map((item,i)=>{
    let result = item.price.toLocaleString('ko-KR');
     return ( 
     <div className="col-md-4">
     <img onClick={()=>{navigate(`/detail2/${item.id}`) }} src={item.img} width="80%"/>
       <h4>{item.title}</h4>
       <p>{item.author}</p>
       <p>￦{result}원</p>
   </div>
)
   })
   }
 </div>
 </div>

      </>
      
     
    );
}

export default Page;