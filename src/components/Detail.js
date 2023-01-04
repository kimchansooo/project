import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const Detail = () => {
  //  <tr key={tool.GONGUSEQ} onClick={() => { navigate(`/detail/${tool.GONGUSEQ}/${tool.SUBGONGUNAME}/${tool.GONGUNAME}/${tool.RENTALCOST}/${tool.GONGUCOUNT}/${tool.DETAILADDR}/${tool.WEBSITE}/${tool.TELEPHONE}`)}}>
  const {GONGUSEQ, SUBGONGUNAME, GONGUNAME, RENTALCOST, GONGUCOUNT ,DETAILADDR, TELEPHONE} = useParams();
  const navigate = useNavigate();
  return (
    <>
      <div>상세페이지</div>
    <Card className="text-center">     
      <Card.Body key={GONGUSEQ}>
        <Card.Title>{GONGUNAME}</Card.Title>
        <Card.Text>
          중분류 : {SUBGONGUNAME}
        </Card.Text>
        <Card.Text>
          요금 : {RENTALCOST}
        </Card.Text>
        <Card.Text>
          수량 : {GONGUCOUNT}
        </Card.Text>
        <Card.Text>
          상세주소 : {DETAILADDR}
        </Card.Text>
        <Card.Text>
          전화번호 : {TELEPHONE}
        </Card.Text>
        <Button variant="primary" 
         onClick={() => { navigate('/') }}
        >뒤로 가기</Button>
      </Card.Body>
    </Card>
    </>
    
  )
}

export default Detail;