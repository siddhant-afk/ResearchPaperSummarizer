import { useState } from "react";
import { Form } from "react-router-dom";

function TextBox(props){
 

const [article,setArticle] = useState("");


function handleChange(event){

    setArticle(event.target.value)
  
}

function handleClick(event){

    props.onSubmit(article);
    event.preventDefault();

}

 return(
    <div className="container text-box">

<form action="/Result" className=" mx-auto">

<textarea name="" id="" cols="83" rows="10" placeholder="Enter Text or Article.." className=" form px-4 py-3" value={article} onChange={handleChange}></textarea>

<button type="submit" className="button" onClick={handleClick}>Summarize</button>
</form>
    </div>




   
 );
  
}

export default TextBox;