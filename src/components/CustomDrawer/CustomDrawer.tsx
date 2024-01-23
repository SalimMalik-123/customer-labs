import { ReactNode } from "react";
import { Drawer } from "antd";
import Header from "../Header";
import { LeftOutlined } from "@ant-design/icons";
import "./drawer.css";

interface Props {
  children: ReactNode;
  onClose: () => void;
  open?: boolean | undefined;
}
const CustomDrawer = (props: Props) => {
  //   const showDrawer = () => {
  //     setOpen(true);
  //   };

  //   const onClose = () => {
  //     setOpen(false);
  //   };

  return (
    <Drawer
      closeIcon={<LeftOutlined />}
      closable={false}
      title={<Header title="Saving Segment" />}
      open={props.open}
      // style={{ margin: 0 }}
      style={{ font: `var(--font)` }}
      styles={{
        body: { margin: 0, padding: 0 },
        header: { margin: 0, padding: 0 },
      }}
      width={"30%"}
    >
      <div className="py-2 h-100 d-flex flex-column overflow-y">
        {props.children}
      </div>
    </Drawer>
  );
};

export default CustomDrawer;
