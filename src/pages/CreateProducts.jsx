// import axios from "axios";
import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";

// import useAxios from "../hooks/useAxios";

const CreateProducts = () => {
  const {user} = useAuth()
  // const axiosInstance = useAxios()
  const axiosSecure = useAxiosSecure()

  const [isChecked, setIsChecked] = useState("");
  const [usedMonths, setUsedMonths] = useState("");

  const isCheckedHandler = (value) => {
    setIsChecked(value);
    if (value === "new") setUsedMonths("");
  };

  const productSubmitHandler = (e) => {
    e.preventDefault();
    const title = e.target.productName.value;
    const category = e.target.productCategory.value;
    const price_min = e.target.priceMin.value;
    const price_max = e.target.priceMax.value;
    const image = e.target.productImage.value;
    const seller_name = e.target.sellerName.value;
    const email = e.target.sellerEmail.value;
    const seller_contact = e.target.sellerContact.value;
    const seller_image = e.target.sellerImage.value;
    const location = e.target.location.value;
    const description = e.target.description.value;
    const created_at = "05-11-2025"
    const status = "pending"



    const newProduct = {
      title,
      category,
      price_min,
      price_max,
      condition: isChecked,
      usage: isChecked === "used" ? `${usedMonths} months` : "",
      image,
      seller_name,
      email,
      seller_contact,
      seller_image,
      location,
      description,
      created_at,
      status
    };
    console.log("product posted", {newProduct});

    axiosSecure.post("/products", newProduct)
    .then(data =>{
      console.log("data after post",data.data)
    })

    axiosSecure.post("/products", newProduct)
    .then(data =>{
      console.log(data.data);
    })

    // with Axios-------------------------
    // axios.post("http://localhost:3000/products",newProduct)
    // .then(data =>{
    //   if(data.data.insertedId){
    //      Swal.fire({
    //         position: "top-center",
    //         icon: "success",
    //         title: "Your product has been created",
    //         showConfirmButton: false,
    //         timer: 1500,
    //       });
    //   }
    // })

    // fetch("http://localhost:3000/products",{
    //   method: "POST",
    //   headers:{
    //     "content-type": "application/json"
    //   },
    //   body: JSON.stringify(newProduct)
    // })
    // .then(res => res.json())
    // .then(data =>{
    //   console.log("after posting product",data)
    // })
  };

  return (
    <div className="flex flex-col items-center margin-y px-4 md:px-12 lg:px-0">
      <Link className="text-xl font-medium flex gap-2 items-center btn btn-ghost w-fit">
        <FaArrowLeft /> Back To Products
      </Link>
      <h2 className="text-5xl font-bold text-center">
        Create <span className="text-gradient">A Product</span>
      </h2>
      <form
        onSubmit={productSubmitHandler}
        className="bg-white p-8 margin-top w-full lg:w-3/5 "
      >
        <fieldset className="fieldset text-sm">
          <div className="space-y-4">
            {/* 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
              <div className="flex flex-col gap-2">
                {/* product-name */}
                <label className="font-semibold">Product Name</label>
                <input
                  name="productName"
                  type="text"
                  className="input w-full"
                  placeholder="Enter your product name"
                />
              </div>
              <div className="flex flex-col gap-2">
                {/* product-category */}
                <label className="font-semibold">Product Category</label>
                <input
                  name="productCategory"
                  type="text"
                  className="input w-full"
                  placeholder="Select Category"
                />
              </div>
            </div>

            {/* 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
              <div className="flex flex-col gap-2">
                {/* min price */}
                <label className="font-semibold">
                  Min Price You want to sale($)
                </label>
                <input
                  name="priceMin"
                  type="text"
                  className="input w-full"
                  placeholder="Enter your min price"
                />
              </div>
              <div className="flex flex-col gap-2">
                {/* max price */}
                <label className="font-semibold">
                  Max Price You want to sale($)
                </label>
                <input
                  name="priceMax"
                  type="text"
                  className="input w-full"
                  placeholder="Enter your max price"
                />
              </div>
            </div>

            {/* 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
              <div className="flex flex-col gap-2">
                {/* product condition */}
                <label className="font-semibold">
                  Product Condition
                </label>
                <div className="flex flex-col gap-2">
                  <div className="flex gap-8">
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={isChecked === "new"}
                        onChange={() => isCheckedHandler("new")}
                        className="checkbox checkbox-md"
                      />
                      <span>New</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={isChecked === "used"}
                        onChange={() => isCheckedHandler("used")}
                        className="checkbox checkbox-md"
                      />
                      <span>Used</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                 {/* Product Usage time */}
              <label className="font-semibold">Product Usage time</label>
              <input
                type="text"
                className="input w-full"
                disabled={isChecked === "new"}
                required={isChecked === "used"}
                placeholder="How many months used?"
                onChange={(e) => setUsedMonths(e.target.value)}
              />
              </div>
            </div>

            {/* 4 */}
            <div className="flex flex-col gap-2">
              {/* product-image */}
              <label className="font-semibold">Product Image URL</label>
              <input
                name="productImage"
                type="text"
                className="input w-full"
                placeholder="https://emample.png"
              />
            </div>

             {/* 5 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
              <div className="flex flex-col gap-2">
                {/* product-name */}
                <label className="font-semibold">Seller Name</label>
                <input
                  name="sellerName"
                  type="text"
                  defaultValue={user.displayName}
                  className="input w-full"
                  placeholder="Enter your name"
                />
              </div>
              <div className="flex flex-col gap-2">
                {/* seller email */}
                <label className="font-semibold">Seller Email</label>
                <input
                  name="sellerEmail"
                  type="email"
                  defaultValue={user.email}
                  readOnly
                  className="input w-full"
                  placeholder="Enter your email"
                />
              </div>
            </div>

             {/* 6 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
              <div className="flex flex-col gap-2">
                {/* seller contact */}
                <label className="font-semibold">Seller Contact</label>
                <input
                  name="sellerContact"
                  type="text"
                  className="input w-full"
                  placeholder="Enter your contact"
                />
              </div>
              <div className="flex flex-col gap-2">
                {/* seller image url */}
                <label className="font-semibold">Seller Image URL</label>
                <input
                  name="sellerImage"
                  type="text"
                  readOnly
                  defaultValue={user.photoURL}
                  className="input w-full"
                  placeholder="https://emample.png"
                />
              </div>
            </div>

             {/* 7 */}
            <div className="flex flex-col gap-2">
              {/* seller location */}
              <label className="font-semibold">Seller Location</label>
              <input
                name="location"
                type="text"
                className="input w-full"
                placeholder="e.g. PS, Dist"
              />
            </div>

             {/* 8 */}
            <div className="flex flex-col gap-2">
              {/* product-image */}
              <label className="font-semibold">Product Description</label>
              <textarea
                name="description"
                type="text"
                className="input w-full h-16 p-2"
                placeholder="Write about your product here"
              />
            </div>

            
          </div>

          <button type="submit" className="btn bg-gradient text-white mt-4">
            Create a Product
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default CreateProducts;
