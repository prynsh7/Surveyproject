import React, {useEffect, useState} from 'react'
import "./ViewPatient.scss"
import { useNavigate, useParams } from 'react-router';

function ViewPatient() {
    
    const [patientData, setPatientData] = useState([]);

    const navigate = useNavigate();

    const {id} = useParams()

    const getPatients = () => {

        console.log("running");
        const data = JSON.parse(localStorage.getItem("patients"));
        var filteredArray = data.filter(function(itm){
            return itm.campId == id;
          });

          setPatientData(filteredArray);

    }

    useEffect(() => {
        getPatients()
    }, [])

  return (
    <div className='patientData'>
        {patientData.length != 0 ? 
        <div className='patient-list'>
            {patientData.map((data, key) => {
                return <div className="patient">
                <p>{data.name}</p> 
                <div className="controls">
                  <button onClick={() => navigate(`/patient/${data._id}`)}>View</button>
                  <button onClick={() => navigate(`/patient/${data._id}`)} >Edit</button>
                </div>
                </div>
            })}
        </div>
    : <p className=''>No Patinets Added Yet</p>    
    }
    </div>
  )
}

export default ViewPatient