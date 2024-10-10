import { useState } from "react";
import Button from "../component/Button";
import Typography from "../component/Typography";
import { TypographyVariant } from "../component/types";
import TableComponent from "../component/PropsDescription";

const data = [
  {
    name: "text",
    description: "The text displayed inside the button.",
  },
  {
    name: "loading",
    description:
      "A boolean value indicating whether the button is in a loading state. When true, a loading indicator is shown, and the button is disabled.",
    highlightText: ["loading state"],
  },
  {
    name: "onClick",
    description:
      "A function that is triggered when the button is clicked. This handles the button's click event.",
  },
  {
    name: "active",
    description:
      "A boolean value indicating whether the button is in an active state. When true, the button may have a different style to show it’s currently active.",
    highlightText: ["active state"],
  },
  {
    name: "bg_color",
    description: "Defines the background color of the button.",
  },
  {
    name: "text_color",
    description: "Defines the text color displayed inside the button.",
  },
  {
    name: "border_color",
    description: "Defines the border color of the button.",
  },
];

const ViewButton = () => {
  const [load, setLoad] = useState(false);
  const handleClick = () => {
    setLoad(!load);
    setTimeout(() => {
      setLoad(false);
    }, 2000);
  };

  return (
    <div className="pt-6">
      <Typography variant={TypographyVariant.TITLE} className="text-black">
        Button
      </Typography>
      <div className="pb-8 pt-4">
        <Button
          text="Click to see loader"
          bg_color="green"
          text_color="white"
          active={true}
          loading={load}
          onClick={handleClick}
        />
      </div>
      <TableComponent rows={data} />
    </div>
  );
};

export default ViewButton;
