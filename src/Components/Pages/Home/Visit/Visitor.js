import React, { useContext, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { toast } from "react-toastify";
import { AuthContext } from "../../../../Context/AuthContext";
import useTitle from "../../../../Hooks/useTitle";
import VisitorRow from "./VisitorRow";

const Visitor = () => {
  useTitle('Visitor')
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
                toast.success('Delete successful!', { autoClose: 500 })
                const remaining = visits.filter(odr => odr._id !== id);
                setVisits(remaining);
               
            }
        })
    }
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
              <VisitorRow key={visitor._id}
              id={visitor._id}
              handleDelete={handleDelete} visitor={visitor}></VisitorRow>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Visitor;
