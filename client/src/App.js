import Navbar from "./components/Navbar";
import TextBox from "./components/TextBox";
import Footer from "./components/Footer";
import Result from "./components/Result";
function App() {
  return (
   <div>
    <Navbar />
    <div className="row">
    <div className="col-md-6">    <TextBox /></div>
    <div className="col-md-6">    <Result /></div>

     
    </div>
    
    <Footer />
   </div>
    
  );
}

export default App;
