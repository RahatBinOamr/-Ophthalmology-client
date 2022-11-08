import React from "react";

const VisitorRow = ({visitor,handleDelete,handleStatusUpdate}) => {
    const {_id,name,visit,email}=visitor;
    console.log(visitor)
  return (
   
      <tr>
        <td> <button onClick={()=>handleDelete(_id)}>X</button> </td>
        <td>{name} </td>
        <td>{email} </td>
        <td>{visit} </td>
        <td> <button onClick={()=>handleStatusUpdate(_id)}> Update </button> </td>
      </tr>
    
  );
};

export default VisitorRow;
