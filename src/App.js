import React from "react";
import Modal from "react-modal";
import JobApplication from "./JobApplication";
Modal.setAppElement("#root");
const App = () => {
  return (
    <div style={{ backgroundColor: "white" }}>
      <JobApplication />
    </div>
  );
};
export default App;
