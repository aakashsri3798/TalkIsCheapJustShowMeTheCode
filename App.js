// import {createElement as ce} from "react" ; 
import React from "react"  ; 
import ReactDOM from "react-dom/client"
import Headercomponent from "./Headercomponent";
import "./style.css";

// trying to reduce the react code by importing directly the createElement library instead of react


        // const heading = ce(
        //   "h1", 
        //   {
        //     id: "title",
        //     key: "h2",
        //   },
        //     "NamasteReact"
        // );

    //JSX

    const Title = () =>(
      <h1 id = "title" key="h2">
        NamasteReact
      </h1>
    )

    const HeaderComponent = () =>(
      <div>
        <Title />
        <h2>Namaste React functional component</h2>
        <h2>This is a h2 tag</h2>
       
        
      </div>
    )

    

    

    const heading2 = <h1 id ="title" key = "h2">Namaste React</h1>

    const root = ReactDOM.createRoot(document.getElementById("root"));

    // root.render(heading);
  
    root.render(<Headercomponent />) ; 
  
  

  


 