import React from "react";
import Header from "../component/Header";
import Typography from "../component/Typography";
import { TypographyVariant } from "../component/types";
import logo from "../component/Assets/logo.svg";
import { IoSettingsOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import PropsDescription from "../component/PropsDescription";

const ViewHeader = () => {
  return (
    <div className="pt-8">
      <Typography variant={TypographyVariant.TITLE} className="text-black">
        Header
      </Typography>
      <div className="pt-8">
        <Header
          bg_color="pink"
          logo={logo}
          children={
            <>
              <Typography
                variant={TypographyVariant.NORMAL}
                className="text-black"
              >
                Header
              </Typography>
              <div className="flex gap-2">
                <IoSettingsOutline className="text-blue-600" size={20} />
                <CgProfile className="text-blue-600" size={20} />
              </div>
            </>
          }
        />
        <div className="mt-24">
          <PropsDescription
            rows={[
              {
                name: "bg_color",
                description: "Background color of the header",
              },
              {
                name: "logo",
                description: "Logo of the header",
              },
              {
                name: "children",
                description: "Children of the header",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default ViewHeader;
