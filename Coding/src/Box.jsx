import React from "react";

function Box(props){

    function like(){
        alert("좋아요를 눌렀습니다.")
    }
    return(
        <div className='box'>
        Box{props.num} <br/>
        {props.name}<br/>
        <button onClick={like}>좋아요</button>
      </div>
    )
}

export default Box;