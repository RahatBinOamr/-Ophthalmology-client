import React, { useContext, useEffect, useState } from "react";
import { Spinner, Table } from "react-bootstrap";
import { toast } from "react-toastify";
import { AuthContext } from "../../../../Context/AuthContext";
import useTitle from "../../../../Hooks/useTitle";
import VisitorRow from "./VisitorRow";

const Visitor = () => {
  useTitle('Visitor')
  const { user,loading , logOut} = useContext(AuthContext);
  const [visits, setVisits] = useState([]);
  useEffect(() => {
    fetch(
      `https://dentatist-server.vercel.app/visitors?email=${user?.email}`,{
        headers:{
          authorization:`Bearer ${localStorage.getItem('token')}`
        }
      }
    )
      .then((res) => {
        if(res.status===401|| res.status===403){
          localStorage.removeItem('token')
         return logOut()
        }
       return res.json()
      })
      
      .then((data) => {
       return setVisits(data);
      });
  }, [user?.email,logOut]);

  const handleDelete = id =>{
    const proceed = window.confirm('Are you sure, you want to cancel this order');
    if(proceed){
        fetch(`https://dentatist-server.vercel.app/visitors/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data?.deletedCount > 0){
                toast.success('Delete successful!', { autoClose: 500 })
                const remaining = visits?.filter(odr => odr?._id !== id);
                setVisits(remaining);
               
            }
        })
    }
}

if(loading){
  return  <Spinner animation="border" variant="primary" />
}

  return (
    <div>
      <div className="p-5">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>photo</th>
              <th>Name</th>
              <th>Email</th>
              <th>Visit</th>
              <th>Message</th>
              <th>#</th>
            </tr>
          </thead>
          <tbody>
            {visits?.map((visitor) => (
              <VisitorRow key={visitor?._id}
              id={visitor?._id}
              handleDelete={handleDelete} visitor={visitor}></VisitorRow>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Visitor;
