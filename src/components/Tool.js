import { useDeferredValue, useEffect, useMemo, useState, useTransition } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import ToolList from "./ToolList";
import SearchBar from "./SearchBar";

const Tool = () => {

   const [tools, setTools] = useState([]);
   const [posts, setPosts] = useState([]);
   const [loading, setLoading] = useState(false);

   useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get('http://openapi.seoul.go.kr:8088/546a68584d746f643538794442424a/json/tbVGongu/1/100');
        setTools(res.data.tbVGongu.row);
        setPosts(res.data.tbVGongu.row);
      } catch(e) {
        console.log(e);
      }
        setLoading(false);
    };
    fetchData();
  }, []);

  if(loading) {
    return <div>대기중...</div>
  }

  if(!tools) {
    return null;
  }


  return (
    <>
      <SearchBar posts={posts} setTools={setTools} />
      <ToolList tools={tools}/> 
    </>
  );
};
// onClick=(() => navigate(`detail/${tool.GONGUSEQ}`))
export default Tool;

