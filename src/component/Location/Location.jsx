import React, { useState, useEffect} from 'react'
import { GET_LOCATIONS } from '../../utils/apiConstant';
import LocationModal from '../Modal/LocationModal';
import "./Location.scss"
import axios from "axios"

function Location() {

    const [manufacturer, setManufacturer] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [data, setData] = useState()
    const [trigger, setTrigger] = useState(false)

    const auth = localStorage.getItem("auth");

    const headers = {
        "Authorization" :  `Bearer ${auth}`
    }

    const getData = async () => {
        await axios.get(GET_LOCATIONS, {headers: headers})
            .then(res => {
                console.log(res)
                setManufacturer(res.data.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {

        getData();

    }, [trigger])



    const openModal = () => {
        setShowModal(prev => !prev);
    };

    return (
        <div className='content'>
            <LocationModal showModal={showModal} setShowModal={setShowModal} data={data} setData={setData} setTrigger={setTrigger} />
            <div className="header">
                <button onClick={openModal} >Add Location</button>
            </div>

            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Address</th>
                    </tr>
                </thead>
                <tbody>
                    {manufacturer ?  manufacturer.map((data, key) => {
                        return <tr>
                            <th scope="row">{key + 1}</th>
                            <td>{data.id}</td>
                            
                            <td>{data.name}</td>
                            <td>{data.phone}</td>
                            <td>{data.email}</td>
                            <td>{data.address}</td>
                            <td>{data.image}</td>
                            <td>{data.rating}</td>
                            <td>{data.min_order_value}</td>
                            <td>{data.avg_delivery_time}</td>
                            <td>{data.status}</td>
                            <td><button onClick={(e) => 
                            {e.preventDefault(); 
                             setData(data);
                            openModal()
                             }}>Edit</button></td>
                        </tr>
                    }) : null}
                </tbody>
            </table>
        </div>
    )
}

export default Location