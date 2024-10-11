import React from "react";
import { TableRow, TypographyVariant } from "../types";
import Typography from "../Typography/Typography";

type TableProps = {
  rows: TableRow[];
};

const highlightDescription = (
  description: string,
  highlightText: string[] = []
) => {
  if (highlightText.length === 0) return description;
  const escapedHighlightText = highlightText.map((text) =>
    text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  );
  const regex = new RegExp(`\\b(${escapedHighlightText.join("|")})\\b`, "gi");
  const parts = description.split(regex);
  return (
    <>
      {parts.map((part, index) =>
        highlightText.some(
          (text) => text.toLowerCase() === part.toLowerCase()
        ) ? (
          <span
            key={index}
            className="bg-orange-100 px-1 rounded cursor-pointer "
          >
            {part}
          </span>
        ) : (
          part
        )
      )}
    </>
  );
};

const TableComponent: React.FC<TableProps> = ({ rows }) => {
  return (
    <div className="overflow-x-auto">
      <Typography variant={TypographyVariant.SUBTITLE} className="mb-2">
        Props description
      </Typography>

      <table className="min-w-full table-auto border-collapse border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left border border-gray-200">Name</th>
            <th className="px-4 py-2 text-left border border-gray-200">
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index} className="odd:bg-white even:bg-gray-50">
              <td className="px-4 py-2 border border-gray-200">{row.name}</td>
              <td className="px-4 py-2 border border-gray-200">
                {highlightDescription(row.description, row.highlightText)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
