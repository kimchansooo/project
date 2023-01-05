

import { useParams } from "react-router-dom";

function Detail2(props){
   
    let {id} = useParams(); //HOOK
    console.log(props);
    console.log(id);
    let findId = props.shirts.find((item)=> item.id == id);
    let result = findId.price.toLocaleString('ko-KR');
    return(
        <>
           <div className="col-md-12 col-sm-12">
            <div className="row">
                <div className="col-md-4">
            <img src={findId.img} width={'100%'} />
            </div>
            <div className="col-md-6">
            <h4>{findId.title}</h4>
            <p>{findId.author}</p>
            <p>￦{result}원</p>
            <p>{findId.text}</p>
            <p>{findId.text2}</p>
            </div>
            <div className="col-md-12">
           <img src={findId.img2} />
           </div>
            </div>
        </div>
        </>
    )
}

export default Detail2
// function aa(){
//     return(<h1>asdf</h1>)
// }
// export default aa;