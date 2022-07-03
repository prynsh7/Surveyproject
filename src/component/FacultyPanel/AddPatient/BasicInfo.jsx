import React, { useState } from "react";
import "./AddPatient.scss";

const years = [2001, 2002, 2003];

const annualInc = ["10,000 - 100,000", "100,000 - 500,000"];

const maritalStat = ["single", "married", "divorsed"];

const alcoholUse = [1, 2, 3, 4, 5, 6, 7, 8];

const alcoholUnits = [250, 500, 1000, 2000];

function BasicInfo({setData, setStep, data}) {

  const [alcohol, setAlcohol] = useState(false);
  const [smoking, setSmoking] = useState(false);

  //formData

  const [name, setName] = useState(null);
  const [age, setAge] = useState(null);
  const [sex, setSex] = useState(null);
  const [address, setAddress] = useState(null);
  const [taluk, setTaluk] = useState(null);
  const [phone, setPhone] = useState(null);
  const [community, setCommunity] = useState(null);
  const [educationYear, setEducationYear] = useState(null);
  const [occupation, setOccupation] = useState(null);
  const [annualIncome, setAnnualIncome] = useState(null);
  const [maritalStatus, setMaritalStatus] = useState(null);
  const [livingArrangement, setLivingArrangement] = useState(null);
  const [refferal, setRefferal] = useState(null);
  const [aaoAlcohol, setAaoAlcohol] = useState(null);
  const [durationAlochol, setDurationAlcohol] = useState(null);
  const [avgUnit, setAvgUnit] = useState(null);
  const [lastDrinkDate, setLastDrinkDate] = useState(null);
  const [assesmentDate, setAssesmentDate] = useState(null);
  const [qtyLastDrink, setQtyLastDrink] = useState(null);
  const [reasonStart, setReasonStart] = useState(null);
  const [reasonContinue, setReasonContinue] = useState(null);
  const [nicotine, setNicotine] = useState(false);
  const [qtySmoke, setQtySmoke] = useState(null);
  const [lastSmUse, setLastSmUse] = useState(null);
  const [Stressors, setStressors] = useState(null);




  const nextStep = () => {
    const obj = {
      name: name,
      age: age,
      sex: sex,
      address: address,
      taluk: taluk,
      phone: phone,
      community: community,
      education_in_year: educationYear,
      occupation: occupation,
      annual_income: annualIncome,
      marital_status: maritalStatus,
      living_arrangement: livingArrangement,
      refferal: refferal,
      alcohol: alcohol,
      aao_for_alochol_in_year: aaoAlcohol,
      duration_of_use_of_alcohol_in_year: durationAlochol,
      avarage_units_used_in_last_30days: avgUnit,
      last_drink_date: lastDrinkDate,
      assesment_date: assesmentDate,
      quantity_of_last_drink: qtyLastDrink,
      reason_for_starting_alcohol: reasonStart,
      reasons_for_continued_use_of_alcohol: reasonContinue,
      nicotine: nicotine,
      smoking: smoking,
      quantity_per_day: qtySmoke,
      last_use: lastSmUse,
      Stressors: Stressors
    }

    setData({...data, ...obj})
    setStep(2);

  }

  return (
    <div className="basic-info">
      <h2 className="w-100 text-center my-4">Basic Information</h2>
      <div className="row mb-3">
        <div className="col-sm-12 col-lg-6">
          <label className="input-lebel">Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter the name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="col-sm-12 col-lg-6">
          <label className="input-lebel">Age</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter the age"
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-lg-6 col-sm-12">
          <label class="input-lebel" for="">
            Sex
          </label>
          <select
            class="form-select form-select-lg"
            onChange={(e) => setSex(e.target.value)}
          >
            <option>Please select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="others">Others</option>
          </select>
        </div>

        <div className="col-sm-12 col-lg-6">
          <label className="input-lebel">Address</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter the address"
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-sm-12 col-lg-6">
          <label className="input-lebel">Taluk</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter the taluk"
            onChange={(e) => setTaluk(e.target.value)}
          />
        </div>

        <div className="col-sm-12 col-lg-6">
          <label className="input-lebel">Phone</label>
          <input
            type="tel"
            className="form-control"
            placeholder="Enter the phone"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-sm-12 col-lg-6">
          <label className="input-lebel">Community</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter the community"
            onChange={(e) => setCommunity(e.target.value)}
          />
        </div>

        <div className="col-sm-12 col-lg-6">
          <label className="input-lebel">Education in Year</label>
          <select
            class="form-select form-select-lg"
            id="year"
            onChange={(e) => setEducationYear(e.target.value)}
          >
            <option>Please select</option>
            {years &&
              years.map((data, key) => {
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
          <label className="input-lebel">Occupation</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter the occupation"
            onChange={(e) => setOccupation(e.target.value)}
          />
        </div>

        <div className="col-sm-12 col-lg-6">
          <label className="input-lebel">Annual Income</label>
          <select
            class="form-select form-select-lg"
            id="year"
            onChange={(e) => setAnnualIncome(e.target.value)}
          >
            <option>Please select</option>
            {annualInc &&
              annualInc.map((data, key) => {
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
          <label className="input-lebel">Marital Status</label>
          <select
            class="form-select form-select-lg"
            id="year"
            onChange={(e) => setMaritalStatus(e.target.value)}
          >
            <option>Please select</option>
            {maritalStat &&
              maritalStat.map((data, key) => {
                return (
                  <option key={key} value={data}>
                    {data}
                  </option>
                );
              })}
          </select>
        </div>

        <div className="col-sm-12 col-lg-6">
          <label className="input-lebel">Living Arrangement</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter the living arrangement"
            onChange={(e) => setLivingArrangement(e.target.value)}
          />
        </div>
      </div>

      <div className="row mb-3 d-flex align-items-center">
        <div className="col-sm-12 col-lg-6">
          <label className="input-lebel">Referral</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter the referral"
            onChange={(e) => setRefferal(e.target.value)}
          />
        </div>

        <div className="col-sm-12 col-lg-6">
          <label className="input-lebel me-3">Alcohol</label>
          <input
            type="checkbox"
            name="alcohol"
            id="alcohol"
            value={alcohol}
            onChange={() => setAlcohol((prev) => !prev)}
          />
        </div>
      </div>

      {alcohol ? (
        <div className="w-100 my-3">
          <hr />
          <h2 className="my-3">Alcohol Information</h2>

          <div className="row mb-3">
            <div className="col-sm-12 col-lg-6">
              <label className="input-lebel">AAO for alcohol in year</label>
              <select
                class="form-select form-select-lg"
                id="year"
                onChange={(e) => setAaoAlcohol(e.target.value)}
              >
                <option>Please select</option>
                {alcoholUse &&
                  alcoholUse.map((data, key) => {
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
                Duration of use of alcohol in year
              </label>
              <select
                class="form-select form-select-lg"
                id="year"
                onChange={(e) => setDurationAlcohol(e.target.value)}
              >
                <option>Please select</option>
                {alcoholUse &&
                  alcoholUse.map((data, key) => {
                    return (
                      <option key={key} value={data}>
                        {data} years
                      </option>
                    );
                  })}
              </select>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-sm-12 col-lg-6">
              <label className="input-lebel">
                Duration of Excessive use of alcohol
              </label>
              <select
                class="form-select form-select-lg"
                id="year"
                onChange={(e) => setDurationAlcohol(e.target.value)}
              >
                <option>Please select</option>
                {alcoholUse &&
                  alcoholUse.map((data, key) => {
                    return (
                      <option key={key} value={data}>
                        {data} years
                      </option>
                    );
                  })}
              </select>
            </div>

            <div className="col-sm-12 col-lg-6">
              <label className="input-lebel">
                Average Units used in last 30 days
              </label>

              <select
                class="form-select form-select-lg"
                id="year"
                onChange={(e) => setAvgUnit(e.target.value)}
              >
                <option>Please select</option>
                {alcoholUnits &&
                  alcoholUnits.map((data, key) => {
                    return (
                      <option key={key} value={data}>
                        {data} ml
                      </option>
                    );
                  })}
              </select>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-sm-12 col-lg-6">
              <label className="input-lebel">Last drink date</label>
              <input
                type="date"
                className="form-control"
                onChange={(e) => setLastDrinkDate(e.target.value)}
              />
            </div>

            <div className="col-sm-12 col-lg-6">
              <label className="input-lebel">Assesment Date</label>
              <input
                type="date"
                className="form-control"
                onChange={(e) => setAssesmentDate(e.target.value)}
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-sm-12 col-lg-6">
              <label className="input-lebel">Quantity of last drink</label>
              <input
                type="text"
                className="form-control"
                placeholder="Quantity of last drink"
                onChange={(e) => setQtyLastDrink(e.target.value)}
              />
            </div>

            <div className="col-sm-12 col-lg-6">
              <label className="input-lebel">Reson for starting alcohol</label>
              <input
                type="text"
                class="form-control"
                placeholder="Reason for starting alcohol"
                onChange={(e) => setReasonStart(e.target.value)}
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-sm-12 col-lg-6">
              <label className="input-lebel">
                Reson for continuing use of alcohol
              </label>
              <input
                type="text"
                class="form-control"
                placeholder="Reason for continuing alcohol"
                onChange={(e) => setReasonContinue(e.target.value)}
              />
            </div>
          </div>

          <hr />
        </div>
      ) : null}

      <div className="row mb-3 d-flex align-items-center">
        <div className="col-sm-12 col-lg-6">
          <label className="input-lebel me-3">Nicotine</label>
          <input type="checkbox" name="nicotine" id="nicotine" onChange={(e) => setNicotine(prev => !prev)} />
          
        </div>

        <div className="col-sm-12 col-lg-6">
          <label className="input-lebel me-3">Smoking</label>
          <input
            type="checkbox"
            name="somking"
            id="smoking"
            value={smoking}
            onChange={() => setSmoking((prev) => !prev)}
          />
        </div>
      </div>

      {smoking ? (
        <div className="w-100 my-3">
          <hr />
          <h2 className="my-3">Smoking Information</h2>

          <div className="row mb-3">
            <div className="col-sm-12 col-lg-6">
              <label className="input-lebel">Quantity per day</label>
              <select
                class="form-select form-select-lg"
                id="year"
                onChange={(e) => setQtySmoke(e.target.value)}
              >
                <option>Please select</option>
                {alcoholUse &&
                  alcoholUse.map((data, key) => {
                    return (
                      <option key={key} value={data}>
                        {data}
                      </option>
                    );
                  })}
              </select>
            </div>

            <div className="col-sm-12 col-lg-6">
              <label className="input-lebel">Last Use</label>
              <select
                class="form-select form-select-lg"
                id="year"
                onChange={(e) => setLastSmUse(e.target.value)}
              >
                <option>Please select</option>
                {alcoholUse &&
                  alcoholUse.map((data, key) => {
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
              <label className="input-lebel">Stressors</label>
              <select
                class="form-select form-select-lg"
                id="year"
                onChange={(e) => setStressors(e.target.value)}
              >
                <option>Please select</option>
                {alcoholUse &&
                  alcoholUse.map((data, key) => {
                    return (
                      <option key={key} value={data}>
                        {data}
                      </option>
                    );
                  })}
              </select>
            </div>
          </div>
        </div>
      ) : null}

      <div className="row w-50 me-auto ml-auto">
        <div className="col-12">
          <div className="form_buttons">
            
              <button className="btn btn-primary" onClick={() => nextStep()}>
                Next
              </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasicInfo;
