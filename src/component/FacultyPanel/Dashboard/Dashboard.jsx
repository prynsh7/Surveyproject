import React, {useEffect, useState} from 'react'
import "./Dashboard.scss"

import axios from 'axios';

import { useNavigate } from 'react-router'
import { GET_PATIENT_USER, GET_USER_CAMP } from '../../../utils/apiConstant';

function Dashboard() {
    const navigate = useNavigate();

    const auth = localStorage.getItem("facultyAuth");
    const [camps, setCamps] = useState();
    const [patients, setPatients] = useState();

    const getCamps = async() => {

        const headers = {
            "Authorization": `Bearer ${auth}`
        }

        await axios.get(GET_USER_CAMP, {headers: headers}).then((res) => {
            console.log(res);
            setCamps(res.data.data);
         }).catch(err => {
            console.log(err);
         })
    }


    const getPatients = async() => {

      const headers = {
          "Authorization": `Bearer ${auth}`
      }

      await axios.get(GET_PATIENT_USER, {headers: headers}).then((res) => {
          console.log(res);
          setPatients(res.data.data);
          localStorage.setItem("patients", JSON.stringify(res.data.data))
       }).catch(err => {
          console.log(err);
       })
  }


  const setPatient = (id) => {
    console.log(id);
    


    navigate(`/patientview/${id}`);

  }
  


    useEffect(() => {
      getPatients();
      getCamps();
    }, [])
    

  return (
    <div className='faculty-dashboard'>

      <div className="camps-list">


  {camps ? camps.map((data, key) => {
    return <div className='camp'> 
    <p>{data.name}</p> 
    <div className="controls">
      <button onClick={() => navigate(`/patientAdd/${data._id}`)}>Add Patients</button>
      <button onClick={() => setPatient(data._id)}>View Patients</button>
    </div>
    </div> 
  }) : null}
  
  </div>


    </div>
  )
}

export default Dashboard