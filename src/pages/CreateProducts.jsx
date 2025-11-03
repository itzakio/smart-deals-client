import React, {useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router";

const CreateProducts = () => {
    const [isChecked, setIsChecked] =useState("")
    const [usedMonths, setUsedMonths] = useState("")


    const isCheckedHandler = (value) =>{
        setIsChecked(value)
        if (value === "new") setUsedMonths("");
    }

    const productSubmitHandler = (e)=>{
        e.preventDefault()
        const newProduct = {
            condition: isChecked,
            used: isChecked === "used"?`${usedMonths} months`:""
        }
        console.log("product posted", newProduct)
    }

  return (
    <div className="flex flex-col items-center margin-y">
      <Link className="text-xl font-medium flex gap-2 items-center btn btn-ghost w-fit">
        <FaArrowLeft /> Back To Products
      </Link>
      <h2 className="text-5xl font-bold text-center">
        Create <span className="text-gradient">A Products</span>
      </h2>
      <form onSubmit={productSubmitHandler} className="bg-white p-8 margin-top w-3/5">
        <fieldset className="fieldset text-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* left side input */}
            <div className="flex flex-col gap-2 ">
              {/* product-name */}
              <label className="font-semibold">Product Name</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Enter your product name"
              />
              {/* min-price */}
              <label className="font-semibold">
                Min Price You want to sale($)
              </label>
              <input
                type="number"
                className="input w-full"
                placeholder="Enter your product name"
              />
              {/* product is used or not */}
              <div className="flex flex-col gap-2">
                <label className="font-semibold">
                  Min Price You want to sale($)
                </label>
                <div className="flex gap-8">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={isChecked === "new"}
                      onChange={()=>isCheckedHandler("new")}
                      className="checkbox checkbox-md"
                    />
                    <span>New</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={isChecked === "used"}
                      onChange={()=>isCheckedHandler("used")}
                      className="checkbox checkbox-md"
                    />
                    <span>Used</span>
                  </div>
                </div>
              </div>
            </div>
            {/* right side input */}
            <div className="flex flex-col gap-2">
              {/* product-name */}
              <label className="font-semibold">Product Name</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Enter your product name"
              />
              {/* min-price */}
              <label className="font-semibold">
                Min Price You want to sale($)
              </label>
              <input
                type="number"
                className="input w-full"
                placeholder="Enter your product name"
              />
              {/* Product Usage time */}
              <label className="font-semibold">Product Usage time</label>
              <input
                type="number"
                className="input w-full"
                disabled={isChecked==="new"}
                required={isChecked==="used"}
                placeholder="How many months used?"
                onChange={(e)=>setUsedMonths(e.target.value)}
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
