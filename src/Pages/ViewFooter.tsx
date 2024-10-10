import Footer from "../component/Footer";
import { TypographyVariant } from "../component/types";
import Typography from "../component/Typography";
import logo from "../component/Assets/logo.svg";
import TableComponent from "../component/PropsDescription";

const data = [
    {
        name: "bg_color",
        description: "The background color of the footer. Accepts any valid CSS color value or Tailwind color class.",
      },
      {
        name: "children",
        description: "The content to be displayed inside the footer. Typically includes text, links, or other elements.",
      },
      {
        name: "className",
        description: "Optional additional CSS classes to customize the styling or positioning of the footer. For example, you can pass classes like 'absolute bottom-0' to fix the footer at the bottom of the page.",
      },
      {
        name: "logo",
        description: "Optional logo to display in the footer. Can be an image or any other React element.",
      },
]

const ViewFooter = () => {
    return (
        <div className="pt-6">
          <Typography variant={TypographyVariant.TITLE} className="text-black">
            Footer
          </Typography>
          <div className="py-6 ">
            <Footer logo={logo}  bg_color="black"> 
              <div className="bg-black py-14">
                &copy; {new Date().getFullYear()} GPI. All rights reserved.
              </div>
            </Footer>
          </div>
          <TableComponent rows={data} />

        </div>
      );
  };

  export default ViewFooter;