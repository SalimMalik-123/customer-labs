import React from "react";
import CustomSelect from "./CustomSelect";
import { Option } from "../core/models/master";
interface Props {
  color: string;
  options?: Option[];
  onChange?: (value: string) => void;
  placeholder: string;
  value?: string;
}
const SegmentCard = (props: Props) => {
  return (
    <div className="mt-3  d-flex align-items-center">
      <div
        className="me-2 rounded-circle"
        style={{ width: 9, height: 9, backgroundColor: props.color }}
      ></div>
      <div className="mx-2 flex-grow-1">
        <CustomSelect {...props} />
      </div>
      <div
        style={{
          width: "35px",
          height: "30px",
          backgroundColor: "#d1f2eb",
        }}
        className="rounded-2 d-flex justify-content-center align-items-center"
      >
        <div
          className="w-75 rounded-pill"
          style={{ height: 6, backgroundColor: "var(--font-color)" }}
        ></div>
      </div>
    </div>
  );
};

export default React.memo(SegmentCard);
