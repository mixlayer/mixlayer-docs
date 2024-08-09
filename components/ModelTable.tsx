import React from "react";

export default function ModelTable(props: {
  className?: string;
  models: any[];
}) {
  return (
    <table className={`mt-4 ${props.className}`}>
      <thead>
        <tr>
          <th className="p-2 text-left">Model</th>
          <th className="p-2 text-left">Price</th>
          <th className="p-2 text-left">Details</th>
        </tr>
      </thead>
      <tbody>
        {props.models.map((model) => (
          <tr>
            <td className="align-top w-[300px] p-2 text-sm font-mono">
              {model.sku}
            </td>
            <td className="align-top p-2">{model.price}</td>
            <td className="align-top p-2">{model.details}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
