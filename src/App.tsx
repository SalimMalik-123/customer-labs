import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import CustomDrawer from "./components/CustomDrawer/CustomDrawer";
import CustomInput from "./components/CustomInput";

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="app ">
      <Header title="View Audience" />
      <div
        className=" d-flex align-item-center"
        style={{ height: `calc(100% - 75px)` }}
      >
        <div>
          <button className="btn-primary" onClick={() => setIsOpen(true)}>
            open
          </button>
        </div>
      </div>
      <CustomDrawer open={isOpen} onClose={() => setIsOpen(false)}>
        <div className="my-3 ">
          <div className="mb-2">
            <span className="ms-1 text-medium   ">
              Enter the Name of the Segment
            </span>
          </div>
          <div className="mb-2">
            <CustomInput placeholder="Name of the segment" />
          </div>
        </div>
        <div className="my-2">
          <div className="mb-3 ms-1">
            <span className=" text-medium   ">
              To save your, you need to add the schemas to build the query
            </span>
          </div>
        </div>
        <div className="my-2 d-flex justify-content-end ">
          <div className="me-3  d-flex align-items-center">
            <div
              className="me-2 rounded-circle"
              style={{ width: 9, height: 9, background: "#58ed67" }}
            ></div>
            <div>
              <span className=" text-small d-flex align-items-center   ">
                - User Traits
              </span>
            </div>
          </div>
          <div className="me-3 d-flex align-items-center ">
            <div
              className="me-2 rounded-circle bg-danger"
              style={{ width: 9, height: 9 }}
            ></div>
            <div>
              <span className=" text-small d-flex align-items-center  ">
                - Group Traits
              </span>
            </div>
          </div>
        </div>
      </CustomDrawer>
    </div>
  );
}

export default App;
