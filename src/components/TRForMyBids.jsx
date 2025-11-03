import React from "react";

const TRForMyBids = ({ bid, idx, bidDeleteHandler }) => {
  return (
    <tr>
      <th>{idx+1}</th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={bid?.buyer_image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{bid?.buyer_name}</div>
            <div className="text-sm opacity-50">{bid?.buyer_email}</div>
          </div>
        </div>
      </td>
      <td>{bid.bid_price}</td>
      <td className="space-x-2">
        <button onClick={()=>bidDeleteHandler(bid._id)} className="btn btn-ghost btn-outline btn-error text-red-500 hover:text-white btn-xs">Remove Bid</button>
      </td>
    </tr>
  );
};

export default TRForMyBids;
