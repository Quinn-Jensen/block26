import { useState } from "react"; 

function YourComponent({contact}) {
    
    console.log(contact)
    return (
      // JSX for your component
      <div>
        <div>{contact.name}</div>
        <div>{contact.phone}</div>
        <div>{contact.email}</div>
      </div>
    );
  } 
  
  export default YourComponent;
