import { LeftOutlined } from "@ant-design/icons";
import React from "react";
interface Props {
  title: string;
}
const Header = (props: Props) => {
  return (
    <div
      className="bg-teal px-3 d-flex align-items-center "
      style={{ height: "75px" }}
    >
      <div className="d-flex align-items-center">
        <div className="me-3  d-flex align-items-center pointer">
          <LeftOutlined className="text-white " />
        </div>
        <div className="">
          <span className=" text-large fw-600 text-white ">{props.title}</span>
        </div>
      </div>
    </div>
  );
};
export default React.memo(Header);
