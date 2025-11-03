import React from "react";

const BidsTable = ({ bid, idx }) => {
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
        <button className="btn btn-ghost btn-outline btn-success hover:text-white btn-xs">Accept Offer</button>
        <button className="btn btn-ghost btn-outline btn-error hover:text-white btn-xs">Reject Offer</button>
      </td>
    </tr>
  );
};

export default BidsTable;
