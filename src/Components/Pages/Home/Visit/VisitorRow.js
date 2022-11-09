import React from "react";
import { Link } from "react-router-dom";
import useTitle from "../../../../Hooks/useTitle";

const VisitorRow = ({visitor,handleDelete}) => {
  useTitle('VisitorRow')
    const {_id,name,visit,email}=visitor;
    console.log(visitor)
  return (
   
      <tr>
        <td> <button onClick={()=>handleDelete(_id)}>X</button> </td>
        <td>{name} </td>
        <td>{email} </td>
        <td>{visit} </td>
        <td> 
        <Link to={`/update/${_id}`}>
        <button >Edit </button>
        
        </Link>  
          
        </td>
      </tr>
    
  );
};

export default VisitorRow;
