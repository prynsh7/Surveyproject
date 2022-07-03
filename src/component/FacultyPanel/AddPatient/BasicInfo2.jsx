import axios from "axios";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router";
import { ADD_PATIENT } from "../../../utils/apiConstant";
import "./AddPatient.scss";

const Impression = ["Good", "Bad", "Worst"];

const Choice = ["Yes", "No"];

function BasicInfo2({data, setData, setStep}) {

  const navigate = useNavigate();

  const [impressionOfficer, setImpressionOfficer] = useState(null);
  const [denialSubstance, setDenialSubstance] = useState(null);
  const [motivationFactor, setMotivationFactor] = useState(null);
  const [actionTaken, setActionTaken] = useState(null);
  const [weigthAdmission, setweightAdmission] = useState(null);
  const [weigthDischarge, setweightDischarge] = useState(null);
  const [height, setHeight] = useState(null);
  const [sugar, setSugar] = useState(null);
  const [otherIssue, setOtherIssue] = useState(null);
  const [withdrawl, setWithdrawl] = useState(null);
  const [pastMedical, setpastMedical] = useState(null);
  const [presentMedical, setPresentMedical] = useState(null);
  const [chronicHealth, setChronicHealth] = useState(null);
  const [pastPsychatricProblem, setPastPsychatricProblem] = useState(null);
  const [presentPsychatricProblem, setPresentPsychatricProblem] = useState(null);
  const [previousHeadInjury, setPreviousHeadInjury] = useState(null);

  
  const submit = async () => {
    
    const obj = {
      impression_of_camp_officer_about_the_patient: impressionOfficer,
    denial_of_substance_use_related_problems: denialSubstance,
    motivation_factor: motivationFactor,
    action_taken: actionTaken,
    weight_while_admission_in_kg: weigthAdmission,
    weight_while_discharge_in_kg: weigthDischarge,
    height_in_ft: height,
    sugar_in_mg: sugar,
    other_issues: otherIssue,
    withdrawal_symptoms_experienced_when_the_patient_stopped: withdrawl,
    past_medical_problem: pastMedical,
    present_medical_problem: presentMedical,
    chronic_health_problem: chronicHealth,
    past_psychiatric_complication: pastPsychatricProblem,
    present_psychiatric_complication: presentPsychatricProblem,
    history_of_previous_head_injureies: previousHeadInjury,
    }

    setData({...data, ...obj})

    const auth = localStorage.getItem("facultyAuth");

    const headers = {
        "Authorization": `Bearer ${auth}`
    }


    try{
      const datum = await axios.post(ADD_PATIENT, {obj: data},  {headers: headers})

      if(datum){
        alert("patient Added successfully");
        navigate("/faculty")
      }

      

    }catch(err){
      console.log(err)
    }

  }


  return (
    <div className="basic-info">
      <h2 className="w-100 text-center my-4">Basic Information</h2>

      <div className="row my-3">
        <div className="col-sm-12 col-lg-6">
          <label className="input-lebel">
            Impression of camp officer about the Patient
          </label>
          <select class="form-select form-select-lg" id="year" onChange={(e) => setImpressionOfficer(e.target.value)} >
            <option>Please select</option>
            {Impression &&
              Impression.map((data, key) => {
                return (
                  <option key={key} value={data}>
                    {data}
                  </option>
                );
              })}
          </select>
        </div>

        <div className="col-sm-12 col-lg-6">
          <label className="input-lebel">
            Denial of substance use related problems
          </label>
          <select class="form-select form-select-lg" id="year" onChange={(e) => setDenialSubstance(e.target.value)}>
            <option>Please select</option>
            {Impression &&
              Impression.map((data, key) => {
                return (
                  <option key={key} value={data}>
                    {data}
                  </option>
                );
              })}
          </select>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-sm-12 col-lg-6">
          <label className="input-lebel">Motivation Factor</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter the Motivation Factor"
            onChange={(e) => setMotivationFactor(e.target.value)}
          />
        </div>

        <div className="col-sm-12 col-lg-6">
          <label className="input-lebel">Action Taken</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter the action taken"
            onChange={(e) => setActionTaken(e.target.value)}
          />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-sm-12 col-lg-6">
          <label className="input-lebel">Weight while admission in (kg)</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter the weight"
            onChange={(e) => setweightAdmission(e.target.value)}
          />
        </div>

        <div className="col-sm-12 col-lg-6">
          <label className="input-lebel">Weight while discharge in (kg)</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter the weight"
            onChange={(e) => setweightDischarge(e.target.value)}
          />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-sm-12 col-lg-6">
          <label className="input-lebel">Height in (ft)</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter the height"
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>

        <div className="col-sm-12 col-lg-6">
          <label className="input-lebel">Sugar in (mg)</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter sugar"
            onChange={(e) => setSugar(e.target.value)}
          />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-sm-12 col-lg-6">
          <label className="input-lebel">Other Issues</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter other Issues"
            onChange={(e) => setOtherIssue(e.target.value)}
          />

        </div>

        <div className="col-sm-12 col-lg-6">
          <label className="input-lebel">Withdrawal symptoms</label>
          <select class="form-select form-select-lg" onChange={(e) => setWithdrawl(e.target.value)}>
            <option>Please select</option>
            {Choice &&
              Choice.map((data, key) => {
                return (
                  <option key={key} value={data}>
                    {data}
                  </option>
                );
              })}
          </select>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-sm-12 col-lg-6">
          <label className="input-lebel">Past medical problems</label>
          <select class="form-select form-select-lg" onChange={(e) => setpastMedical(e.target.value)}>
            <option>Please select</option>
            {Choice &&
              Choice.map((data, key) => {
                return (
                  <option key={key} value={data}>
                    {data}
                  </option>
                );
              })}
          </select>
        </div>

        <div className="col-sm-12 col-lg-6">
          <label className="input-lebel">Present Medical Problems</label>
          <select class="form-select form-select-lg" id="year" onChange={(e) => setPresentMedical(e.target.value)}>
            <option>Please select</option>
            {Choice &&
              Choice.map((data, key) => {
                return (
                  <option key={key} value={data}>
                    {data}
                  </option>
                );
              })}
          </select>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-sm-12 col-lg-6">
          <label className="input-lebel">Chronic Health Problem</label>
          <select class="form-select form-select-lg" onChange={(e) => setChronicHealth(e.target.value)}>
            <option>Please select</option>
            {Choice &&
              Choice.map((data, key) => {
                return (
                  <option key={key} value={data}>
                    {data}
                  </option>
                );
              })}
          </select>
        </div>

        <div className="col-sm-12 col-lg-6">
          <label className="input-lebel">Past psychatric complication</label>
          <select class="form-select form-select-lg" id="year" onChange={(e) => setPastPsychatricProblem(e.target.value)} >
            <option>Please select</option>
            {Choice &&
              Choice.map((data, key) => {
                return (
                  <option key={key} value={data}>
                    {data}
                  </option>
                );
              })}
          </select>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-sm-12 col-lg-6">
          <label className="input-lebel">Present Psychatric Complication</label>
          <select class="form-select form-select-lg" id="year" onChange={(e) => setPresentPsychatricProblem(e.target.value)}>
            <option>Please select</option>
            {Choice &&
              Choice.map((data, key) => {
                return (
                  <option key={key} value={data}>
                    {data}
                  </option>
                );
              })}
          </select>
        </div>

        <div className="col-sm-12 col-lg-6">
          <label className="input-lebel">History of previous Head Injury</label>
          <select class="form-select form-select-lg" onChange={(e) => setPreviousHeadInjury(e.target.value)}>
            <option>Please select</option>
            {Choice &&
              Choice.map((data, key) => {
                return (
                  <option key={key} value={data}>
                    {data}
                  </option>
                );
              })}
          </select>
        </div>
      </div>


      <div className="row w-50 me-auto ml-auto">
        <div className="col-12">
          <div className="form_buttons">
            
            
          <button className="btn btn-primary" onClick={() => setStep(1)} >
                Prev
              </button>

              <button className="btn btn-primary" onClick={() => submit()} >
                Submit
              </button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default BasicInfo2;
