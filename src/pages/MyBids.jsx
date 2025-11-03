import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import useFetchData from "../hooks/useFetchData";
import TRForMyBids from "../components/TRForMyBids";
import Swal from "sweetalert2";

const MyBids = () => {
  const { user, userLoading } = useContext(AuthContext);

  const {
    data: initialBids,
    loading,
    error,
  } = useFetchData(`http://localhost:3000/bids?email=${user?.email}`);

  const [bids, setBids] = useState([]);
  
    useEffect(() => {
      if (initialBids) {
        setBids(initialBids);
      }
    }, [initialBids]);

  const bidDeleteHandler = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/bids/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
            const remainingBids = bids.filter((bid) => bid._id !== id);
            setBids(remainingBids);
          });
      }
    });
  };

  return (
    <section className="flex flex-col items-center max-w-7xl mx-auto margin-y  px-8 xl:px-0">
      <h2>My Bids: {bids.length}</h2>
      <div className="margin-y w-full">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>SL No.</th>
                <th>Buyer info</th>
                <th>Bid Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {bids.map((bid, idx) => (
                <TRForMyBids
                  key={bid._id}
                  idx={idx}
                  bid={bid}
                  bidDeleteHandler={bidDeleteHandler}
                />
              ))}
              {/* row 2 */}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default MyBids;
