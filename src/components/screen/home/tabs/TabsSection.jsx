import { useState } from "react";
import {tabs} from "../../../../data"
import Button from "../../../ui/button/Button"



export default function TabsSection(){
  
    
  const [content, setContent] = useState(null)


  function handleClicked(type){
    setContent(tabs[type])
  }


  return(
    <section>
    <h2>Buttons</h2>
    <Button onClick={() => handleClicked("free")}>Free</Button>
    <Button onClick={() => handleClicked("pro")}>Pro</Button>
    <Button onClick={() => handleClicked("pro_max")}>Pro-Max</Button>

    {content ? <p>{content}</p> : <p>No Content</p>}
   </section>
  );
}