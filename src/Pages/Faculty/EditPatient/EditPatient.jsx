import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import BasicInfo from "../../../component/FacultyPanel/EditPatient/BasicInfo";
import BasicInfo2 from "../../../component/FacultyPanel/EditPatient/BasicInfo2";

function EditPatient() {
  const [data, setData] = useState();

  const [step, setStep] = useState(1);

  const { id } = useParams();

  const getPatientData = () => {
    console.log(id);

    const patData = JSON.parse(localStorage.getItem("patients"));

    var filteredArray = patData.filter(function (itm) {
      return itm._id == id;
    });

    setData(filteredArray[0]);
  };

  useEffect(() => {
    getPatientData();
  }, []);

  return (
    <div>
      {step == 1 ? <BasicInfo data={data} setStep={setStep} /> : null}
      {step == 2 ? <BasicInfo2 data={data} setStep={setStep} /> : null}
    </div>
  );
}

export default EditPatient;
