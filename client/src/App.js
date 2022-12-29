import Navbar from "./components/Navbar";
import TextBox from "./components/TextBox";
import Footer from "./components/Footer";
import Result from "./components/Result";
import { useState } from "react";
function App() {


  const [summary,setSummary] = useState("");

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
