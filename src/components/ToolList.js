import React from 'react'
import { Table } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

const ToolList = ({tools}) => {
  const navigate = useNavigate();
  
  return (
  <Table striped bordered hover>
    <thead>
      <tr>
        <th>분류</th>
        <th>공구 이름</th>
        <th>요금</th>
        <th>대여장소명</th>
      </tr>
    </thead>
    <tbody>
         {tools.map(tool => (
            <tr key={tool.GONGUSEQ} onClick={() => { navigate(`/detail/${tool.GONGUSEQ}/${tool.SUBGONGUNAME}/${tool.GONGUNAME}/${tool.RENTALCOST}/${tool.GONGUCOUNT}/${tool.DETAILADDR}/${tool.TELEPHONE}`)}}>
              <td>{tool.GONGUNAME}</td>
              <td>{tool.SUBGONGUNAME}</td>
              <td>{tool.RENTALCOST}</td>
              <td>{tool.PLACENAME}</td>
            </tr>
          ))} 
    </tbody>
  </Table>
  )
}

export default ToolList