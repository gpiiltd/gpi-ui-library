import React from "react";
import Typography from "../component/Typography";
import { TypographyVariant } from "../component/types";
import { IoSettingsOutline } from "react-icons/io5";
import Card from "../component/Card";
import PropsDescription from "../component/PropsDescription";

const ViewCard = () => {
  return (
    <div className="pt-8">
      <Typography variant={TypographyVariant.TITLE} className="text-black">
        Card
      </Typography>
      <div className="">
        <Card titleLeft="Card" titleRight={<IoSettingsOutline />}>
          <Typography
            variant={TypographyVariant.NORMAL}
            className="text-black "
          >
            Card is a component that displays content in a container with a
            title and an optional icon. Card is a component that displays
            content in a container with a title and an optional icon. Card is a
            component that displays content in a container with a title and an
            optional icon.
          </Typography>
          <hr className="border-2 border-gray-300 my-10" />
          <Typography
            variant={TypographyVariant.NORMAL}
            className="text-black "
          >
            Card is a component that displays content in a container with a
            title and an optional icon. Card is a component that displays
            content in a container with a title and an optional icon. Card is a
            component that displays content in a container with a title and an
            optional icon.
          </Typography>
        </Card>
      </div>

      <div className="">
        <PropsDescription
          rows={[
            {
              name: "titleLeft",
              description: "Left aligned Title of the card",
            },
            {
              name: "titleRight",
              description: "Right aligned Title of the card",
            },
            {
              name: "children",
              description: "Content of the card",
            },
            {
              name: "width",
              description: "Width of the card",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default ViewCard;
