import React, { useContext, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { toast } from "react-toastify";
import { AuthContext } from "../../../../Context/AuthContext";
import VisitorRow from "./VisitorRow";

const Visitor = () => {
  const { user } = useContext(AuthContext);
  const [visits, setVisits] = useState([]);
  useEffect(() => {
    fetch(
      `https://dentatist-server-rahatbinoamr.vercel.app/visitors?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setVisits(data);
      });
  }, [user?.email]);

  const handleDelete = id =>{
    const proceed = window.confirm('Are you sure, you want to cancel this order');
    if(proceed){
        fetch(`https://dentatist-server-rahatbinoamr.vercel.app/visitors/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.deletedCount > 0){
                toast.success('Register successful!', { autoClose: 500 })
                const remaining = visits.filter(odr => odr._id !== id);
                setVisits(remaining);
               
            }
        })
    }
}
const handleStatusUpdate = id => {
    fetch(`https://dentatist-server-rahatbinoamr.vercel.app/visitors/${id}`, {
        method: 'PATCH', 
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({status: 'Approved'})
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.modifiedCount > 0) {
            const remaining = visits.filter(odr => odr._id !== id);
            const approving = visits.find(odr => odr._id === id);
            approving.status = 'Approved'

            const newOrders = [approving, ...remaining];
            setVisits(newOrders);
        }
    })
}
  return (
    <div>
      <div className="p-5">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Visit</th>
              <th>#</th>
            </tr>
          </thead>
          <tbody>
            {visits.map((visitor) => (
              <VisitorRow key={visitor._id} handleDelete={handleDelete} handleStatusUpdate={handleStatusUpdate} visitor={visitor}></VisitorRow>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Visitor;
