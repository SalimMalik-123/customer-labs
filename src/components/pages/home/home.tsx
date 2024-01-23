import { useState } from "react";
import Header from "../../Header";
import CustomDrawer from "../../CustomDrawer/CustomDrawer";
import CustomInput from "../../CustomInput";
import SchemaSection from "./SchemaSection";
import { PostSegment, Segment } from "../../../core/models/master";
import { useSendData } from "../../../core/services/master";
const IntialSchema: Segment[] = [
  {
    label: "First Name",
    value: "frist_name",
    color: "#58ed67",
    options: [
      { value: "Salim", label: "Salim" },
      { value: "lucy", label: "Lucy" },
      { value: "Syed", label: "Syed" },
    ],
  },
  {
    label: "Last Name",
    value: "last_name",
    color: "red",
    options: [
      { value: "Malik", label: "Malik" },
      { value: "Rio", label: "Rio" },
      { value: "Ijaz", label: "Ijaz" },
    ],
  },
];
function Home() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [segmentName, setSegmentName] = useState<string>("");
  const [isErr, setIsErr] = useState<boolean>(false);

  const [schemas, setSchemas] = useState<Segment[]>(IntialSchema);

  const handleSave = async () => {
    if (segmentName === "") {
      setIsErr(true);
      return;
    }
    let postData: PostSegment = { segment_name: segmentName, schema: [] };
    // let l: any[] = [];
    schemas.forEach((o) => {
      postData.schema.push({ [o.value]: o.label });
    });
    try {
      console.log(postData);

      let res = await useSendData(postData);
      if (res.status === 200) {
        console.log("saved succefully");
        setSegmentName("");
        // set
      }
    } catch (error) {
      console.log("Error", error);
    }
  };
  return (
    <div className="app ">
      <Header title="View Audience" />
      <div
        className=" d-flex align-item-center"
        style={{ height: `calc(100% - 75px)` }}
      >
        <div className="mt-5 ms-5">
          <button
            className=" btn btn-outline-dark"
            onClick={() => setIsOpen(true)}
          >
            Save segment
          </button>
        </div>
      </div>
      <CustomDrawer open={isOpen} onClose={() => setIsOpen(false)}>
        <div className="my-3 px-4  ">
          <div className="mb-2">
            <span className="ms-1 text-medium   ">
              Enter the Name of the Segment
            </span>
          </div>
          <div className="mb-2">
            <CustomInput
              placeholder="Name of the segment"
              value={segmentName}
              onChange={(val) => {
                setIsErr(false);
                setSegmentName(val);
              }}
              isError={isErr}
            />
          </div>
        </div>
        <div className="my-2 px-4 ">
          <div className="mb-3 ms-1">
            <span className=" text-medium   ">
              To save your, you need to add the schemas to build the query
            </span>
          </div>
        </div>
        <div className="my-2 px-4  d-flex justify-content-end ">
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

        <SchemaSection schemas={schemas} setSchemas={setSchemas} />
        <div className="mt-auto flex-grow-1 d-flex align-items-end">
          <div
            className="px-3  d-flex align-items-center w-100    "
            style={{ height: 70, background: "#f4eeee" }}
          >
            <button
              className="me-3 bg-light-green text-white fw-600 btn   "
              onClick={handleSave}
            >
              Save the segment
            </button>
            <button className="me-3 bg-white text-danger fw-600 btn   ">
              Cancel
            </button>
          </div>
        </div>
      </CustomDrawer>
    </div>
  );
}

export default Home;
