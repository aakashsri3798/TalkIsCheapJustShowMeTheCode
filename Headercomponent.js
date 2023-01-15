import React from "react"  ; 
import Lefticon from "./components/Lefticon";
import Usericon from "./components/Usericon";


    export default function Headercomponent(){
        return(
        <content>
            <Lefticon />
            <div className="searchbox">
            <input type="text" placeholder="Search.."  className="search_bar"/>
            <button type="submit"><i class="fa fa-search" ></i></button>
            </div>
            <Usericon />
        

        </content>
        )
    }

   