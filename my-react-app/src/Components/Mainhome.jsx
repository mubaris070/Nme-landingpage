import About from "./About";
import Features from "./Features";
import Header from "./Header";
import Home from "./Home";

function Mainhome(){
    return(
        <div style={{
    background: "linear-gradient(135deg, #E4EEFF, #7D99FF)",
  }}>
            <Header/>
            <Home/>
            <Features/>
            <About/>
        </div>
    )
}
export default Mainhome