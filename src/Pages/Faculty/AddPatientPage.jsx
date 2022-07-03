import React, { useState } from "react";
import { useParams } from "react-router";
import BasicInfo from "../../component/FacultyPanel/AddPatient/BasicInfo";
import BasicInfo2 from "../../component/FacultyPanel/AddPatient/BasicInfo2";
import "./AddPatientPage.scss";

function AddPatientPage() {
  const [step, setStep] = useState(1);

  const {id} = useParams();

  const [data, setData] = useState({
    campId: id,
  });



  return (
    <div className="add-patient">
      {step == 1 ? <BasicInfo setData={setData} data={data} setStep={setStep} /> : null}
      {step == 2 ? <BasicInfo2 setData={setData} data={data} setStep={setStep} /> : null}  
    </div>
  );
}

export default AddPatientPage;
