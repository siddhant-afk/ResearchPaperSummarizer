import Navbar from "./components/Navbar";
import TextBox from "./components/TextBox";
import Footer from "./components/Footer";
import Result from "./components/Result";
import { useState ,useEffect } from "react";
function App() {


  const [summary,setSummary] = useState("");
  
  const[data,setData] = useState({})


  useEffect(()=>{
    fetch("/summary").then(
     res => res.json()
    ).then(
      data =>{
        setData(data)
        console.log(data)
      }
    )
  },[])
  

  function summarize(article){
    
    
    setSummary(article);
    
  }
  return (
   <div>
    <Navbar />
    <div className="row">
    <div className="col-md-6">    <TextBox onSubmit={summarize} /></div>
    <div className="col-md-6">    <Result summary={summary}/></div>

     
    </div>
    
    <Footer />
   </div>
    
  );
}

export default App;
