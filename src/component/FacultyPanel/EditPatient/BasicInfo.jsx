import React, { useState , useEffect} from "react";
import "../AddPatient/AddPatient.scss";
const years = [2001, 2002, 2003];

const annualInc = ["10,000 - 100,000", "100,000 - 500,000"];

const maritalStat = ["single", "married", "divorsed"];

const alcoholUse = [1, 2, 3, 4, 5, 6, 7, 8];

const alcoholUnits = [250, 500, 1000, 2000];

function BasicInfo({setData, setStep, data}) {

  const [alcohol, setAlcohol] = useState(false);
  const [smoking, setSmoking] = useState(false);

  //formData

  const [name, setName] = useState(data?.name);
  const [age, setAge] = useState(data?.age);
  const [sex, setSex] = useState(data?.sex);
  const [address, setAddress] = useState(data?.address);
  const [taluk, setTaluk] = useState(data?.taluk);
  const [phone, setPhone] = useState(data?.phone);
  const [community, setCommunity] = useState(data?.community);
  const [educationYear, setEducationYear] = useState(data?.education_in_year);
  const [occupation, setOccupation] = useState(data?.occupation);
  const [annualIncome, setAnnualIncome] = useState(data?.annual_income);
  const [maritalStatus, setMaritalStatus] = useState(data?.marital_status);
  const [livingArrangement, setLivingArrangement] = useState(data?.living_arrangement);
  const [refferal, setRefferal] = useState(data?.refferal);
  const [aaoAlcohol, setAaoAlcohol] = useState(data?.aao_for_alochol_in_year);
  const [durationAlcohol, setDurationAlcohol] = useState(data?.duration_of_use_of_alcohol_in_year);
  const [avgUnit, setAvgUnit] = useState(data?.avarage_units_used_in_last_30days);
  const [lastDrinkDate, setLastDrinkDate] = useState(data?.last_drink_date);
  const [assesmentDate, setAssesmentDate] = useState(data?.assesment_date);
  const [qtyLastDrink, setQtyLastDrink] = useState(data?.quantity_of_last_drink);
  const [reasonStart, setReasonStart] = useState(data?.reason_for_starting_alcohol);
  const [reasonContinue, setReasonContinue] = useState(data?.reasons_for_continued_use_of_alcohol);
  const [nicotine, setNicotine] = useState(data?.nicotine);
  const [qtySmoke, setQtySmoke] = useState(data?.quantity_per_day);
  const [lastSmUse, setLastSmUse] = useState(data?.last_use);
  const [stressors, setStressors] = useState(data?.stressors);




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
      duration_of_use_of_alcohol_in_year: durationAlcohol,
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
      Stressors: stressors
    }

    // setData({...data, ...obj})
    setStep(2);

  }

  useEffect(() => {
 setName(data?.name)
  setAge(data?.age);
  setSex(data?.sex);
  setAddress(data?.address);
  setTaluk(data?.taluk);
  setPhone(data?.phone);
  setCommunity(data?.community);
  setEducationYear(data?.education_in_year);
  setOccupation(data?.occupation);
  setAnnualIncome(data?.annual_income);
  setMaritalStatus(data?.marital_status);
  setLivingArrangement(data?.living_arrangement);
  setRefferal(data?.refferal);
  setAaoAlcohol(data?.aao_for_alochol_in_year);
  setDurationAlcohol(data?.duration_of_use_of_alcohol_in_year);
  setAvgUnit(data?.avarage_units_used_in_last_30days);
  setLastDrinkDate(data?.last_drink_date);
  setAssesmentDate(data?.assesment_date);
  setQtyLastDrink(data?.quantity_of_last_drink);
  setReasonStart(data?.reason_for_starting_alcohol);
  setReasonContinue(data?.reasons_for_continued_use_of_alcohol);
  setNicotine(data?.nicotine);
  setQtySmoke(data?.quantity_per_day);
  setLastSmUse(data?.last_use);
  setStressors(data?.stressors);

  }, [data])
  

  console.log(data)

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
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="col-sm-12 col-lg-6">
          <label className="input-lebel">Age</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter the age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-lg-6 col-sm-12">
          <label className="input-lebel" for="">
            Sex
          </label>
          <select
            className="form-select form-select-lg"
            value={sex}
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
            value={address}
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
            value={taluk}
            onChange={(e) => setTaluk(e.target.value)}
          />
        </div>

        <div className="col-sm-12 col-lg-6">
          <label className="input-lebel">Phone</label>
          <input
            type="tel"
            className="form-control"
            placeholder="Enter the phone"
            value={phone}
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
            value={community}
            onChange={(e) => setCommunity(e.target.value)}
          />
        </div>

        <div className="col-sm-12 col-lg-6">
          <label className="input-lebel">Education in Year</label>
          <select
            className="form-select form-select-lg"
            id="year"
            value={educationYear}
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
            value={occupation}
            onChange={(e) => setOccupation(e.target.value)}
          />
        </div>

        <div className="col-sm-12 col-lg-6">
          <label className="input-lebel">Annual Income</label>
          <select
            className="form-select form-select-lg"
            id="year"
            value={annualIncome}
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
            className="form-select form-select-lg"
            id="year"
            value={maritalStatus}
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
            value={livingArrangement}
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
            value={refferal}
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
                className="form-select form-select-lg"
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
                className="form-select form-select-lg"
                id="year"
                value={durationAlcohol}
                onChange={(e) => setDurationAlcohol(e.target.value)}
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
              <label className="input-lebel">
                Duration of Excessive use of alcohol
              </label>
              <select
                className="form-select form-select-lg"
                id="year"
                value={durationAlcohol}
                onChange={(e) => setDurationAlcohol(e.target.value)}
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
                Average Units used in last 30 days
              </label>

              <select
                className="form-select form-select-lg"
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
                className="form-control"
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
                className="form-control"
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
                className="form-select form-select-lg"
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
                className="form-select form-select-lg"
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
                className="form-select form-select-lg"
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
