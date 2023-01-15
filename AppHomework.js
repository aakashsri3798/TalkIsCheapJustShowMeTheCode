// import {createElement as ce} from "react" ; 
import React from "react"  ; 
import ReactDOM from "react-dom/client"

    const HeaderComponent = () =>(
      <div>
        {heading} 
        {headingJSX} 
        <HeadingComponent />
        </div>
    )
//  {heading} => Passing nested header Lemeents using React.createlement to see how difficult it is to make nested html elements 
//   with React.createElement()
    // Above is a react element


    

    const heading = React.createElement("div",
{
    id: "title",
    key: "h2",
},
[React.createElement(
    "h1",{
        id: "title",
        key: "h2",
           },
           "NamasteReact from h1"
), 
React.createElement(
    "h1",{
        id: "title",
        key: "h2",
           },
           "NamasteReact from h2"
),
React.createElement(
    "h1",{
        id: "title",
        key: "h2",
           },
           "NamasteReact from h3"
)]);

//JSX

const headingJSX = (
    <h1 id = "title" key ="h2">
        <h1 id ="title" key ="h2">NamasteReact from h1</h1>
        <h1 id="title" key = "h2">NamasteReact from h2</h1>
        <h1 id= "title" key="h2">NamasteReact from h3</h1>

    </h1>
)

// Form a functional component of the above JSX code

const HeadingComponent= function(){
    return(
<h1 id = "title" key ="h2">
<h1 id ="title" key ="h2">NamasteReact from h1</h1>
<h1 id="title" key = "h2">NamasteReact from h2</h1>
<h1 id= "title" key="h2">NamasteReact from h3</h1>

</h1>
    )
};
    const root = ReactDOM.createRoot(document.getElementById("root"));

    // root.render(heading);
//    root.render(<HeaderComponent />);

   // some important points 

   // 1. Name of functional component always starts with a capital letter 
   // 2. if we want to pass a react element inside a functional component we just have to do like this
   //    {reactelement}
   // 3. if we want to pass a functional cpmonent inside another functional component then it is called as component composition
   //     and we do this as below
   //     <FunctionComponent /> or {function()}
   // 4.  Also we can render components inside root as  below 
   //     root.render(< Component />) or we can also do as root.render({Component()})
   // 5.  We cna write any javascript code inside the curly braces ({}).
   

  


 