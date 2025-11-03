import React, { useContext, useEffect, useRef, useState } from "react";
import useFetchData from "../hooks/useFetchData";
import { Link, useParams } from "react-router";
import { FaArrowLeft } from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";
import BidsTable from "../components/BidsTable";

const ProductDetails = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const {
    data: product,
    loading,
    error,
  } = useFetchData(`http://localhost:3000/products/${id}`);

  const {
    data: initialBids,
    loading: bidsLoading,
    error: bidsError,
  } = useFetchData(`http://localhost:3000/products/bids/${id}`);
  const [bids, setBids] = useState([]);

  useEffect(() => {
    if (initialBids) {
      setBids(initialBids);
    }
  }, [initialBids]);

  const bidModalRef = useRef(null);

  const {
    _id,
    image,
    condition,
    usage,
    description,
    title,
    category,
    price_min,
    price_max,
    created_at,
    seller_image,
    seller_name,
    seller_contact,
    location,
    status,
  } = product;

  const openBidModalHandler = () => {
    bidModalRef.current.showModal();
  };
  const bidSubmitHandler = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photoUrl = e.target.photoUrl.value;
    const bid = e.target.bid.value;
    const contact = e.target.contact.value;
    const newBid = {
      product: _id,
      buyer_name: name,
      buyer_email: email,
      buyer_image: photoUrl,
      bid_price: bid,
      buyer_contact: contact,
    };
    fetch("http://localhost:3000/bids", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newBid),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          bidModalRef.current.close();
          newBid._id = data.insertedId;
          const newBids = [...initialBids, newBid];
          newBids.sort((a,b)=>b.bid_price - a.bid_price)
          setBids(newBids);
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Your bid has been placed",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <section className="grid grid-cols-5 gap-8 max-w-7xl mx-auto margin-y  px-8 xl:px-0">
      {/* left div */}
      <div className="col-span-full lg:col-span-2 space-y-8">
        <img
          className="h-96 w-full object-cover rounded-lg shadow-sm"
          src={image}
          alt={title}
        />
        <div className="bg-white p-8 rounded-lg shadow-sm space-y-4">
          <h4 className="text-2xl font-semibold">Product Description</h4>
          <div className="grid grid-cols-2 border-b-2 pb-2">
            <p className="font-semibold">
              <span className="text-gradient">Condition:</span> {condition}
            </p>
            <p className="font-semibold">
              <span className="text-gradient">Usage Time:</span> {usage}
            </p>
          </div>
          <p className="text-accent">{description}</p>
        </div>
      </div>
      {/* right-div */}
      <div className="col-span-full lg:col-span-3 space-y-4">
        <Link className="text-xl font-medium flex gap-2 items-center btn btn-ghost w-fit">
          <FaArrowLeft /> Back To Products
        </Link>
        <h1 className="text-5xl font-bold">{title}</h1>
        <div className="px-3 py-0.5 w-fit bg-purple-200 rounded-full">
          <p className="text-gradient ">{category}</p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-sm space-y-2">
          <p className="text-3xl font-bold text-green-400">
            ${price_min}-{price_max}
          </p>
          <p>Price start from</p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-sm space-y-2">
          <h4 className="text-2xl font-semibold">Product Details</h4>
          <p>
            <span className="font-semibold">Product ID:</span> {_id}
          </p>
          <p>
            <span className="font-semibold">Posted:</span> {created_at}
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-sm space-y-2">
          <h4 className="text-2xl font-semibold">Seller Information</h4>
          <div className="flex items-center gap-4">
            <img
              className="size-12 object-cover rounded-full"
              src={seller_image}
              alt=""
            />
            <div>
              <p className="font-semibold">{seller_name}</p>
              <p>{seller_contact}</p>
            </div>
          </div>
          <p>
            <span className="font-semibold">Location:</span> {location}
          </p>
          <p>
            <span className="font-semibold">Status:</span> <span>{status}</span>
          </p>
        </div>
        {/* button */}
        <button
          onClick={openBidModalHandler}
          className="btn bg-gradient text-white w-full"
        >
          I want Buy This Product
        </button>
      </div>
      <dialog ref={bidModalRef} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-2xl text-center">
            Give Seller Your Offered Price!
          </h3>
          <form onSubmit={bidSubmitHandler}>
            <fieldset className="fieldset text-base space-y-1">
              {/* name */}
              <label className="label">Buyer Name</label>
              <input
                type="text"
                className="input w-full"
                name="name"
                defaultValue={user?.displayName}
                readOnly
              />
              {/* email */}
              <label className="label">Buyer Email</label>
              <input
                type="email"
                className="input w-full"
                name="email"
                defaultValue={user?.email}
                readOnly
              />
              {/* photo */}
              <label className="label">Buyer Image URL</label>
              <input
                type="text"
                className="input w-full"
                name="photoUrl"
                defaultValue={user?.photoURL}
                readOnly
              />
              {/* Place your Price */}
              <label className="label">Place your Price</label>
              <input
                type="number"
                className="input w-full"
                name="bid"
                placeholder="$..."
              />
              {/* Contact Info */}
              <label className="label">Contact Info</label>
              <input
                type="text"
                className="input w-full"
                name="contact"
                placeholder="e.g. +1-555-1234"
              />
              <button type="submit" className="btn bg-gradient text-white mt-2">
                Submit
              </button>
            </fieldset>
          </form>

          <div className="modal-action  flex justify-end items-center">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn w-full">Cancel</button>
            </form>
          </div>
        </div>
      </dialog>

      {/* bids for this products */}
      <div className="col-span-full">
        <h2 className="text-5xl font-bold">
          Bids For This Products:{" "}
          <span className="text-gradient">{bids.length}</span>
        </h2>
        {/* table */}
        <div className="margin-y">
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
                  <BidsTable key={bid._id} idx={idx} bid={bid}/>
                ))}
                {/* row 2 */}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProductDetails;
