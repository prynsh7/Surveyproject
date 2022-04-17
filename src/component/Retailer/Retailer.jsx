import React, { useState, useEffect} from 'react'
import { GET_RETAILER } from '../../utils/apiConstant';
import axios from "axios"

function Retailer() {

    const [retailer, setRetailer] = useState();
    const [showModal, setShowModal] = useState(false);

    const getData = async () => {
        await axios.get(GET_RETAILER)
            .then(res => {
                console.log(res)
                setRetailer(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {

        getData();

    }, [])



    const openModal = () => {
        setShowModal(prev => !prev);
    };

    return (
        <div className='content'>
            <div className="header">
                <button onClick={openModal}>Add Retailer</button>
            </div>

            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col">address</th>
                        <th scope="col">image</th>
                        <th scope="col">rating</th>
                        <th scope="col">min_order_value</th>
                        <th scope="col">avg_delivery_time</th>
                        <th scope="col">status</th>
                        <th scope="col">Setting</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {retailer && retailer.map((data, key) => {
                        return <tr>
                            <th scope="row">{key + 1}</th>
                            <td>{data.name}</td>
                            <td>{data.phone}</td>
                            <td>{data.email}</td>
                            <td>{data.address}</td>
                            <td>{data.image}</td>
                            <td>{data.rating}</td>
                            <td>{data.min_order_value}</td>
                            <td>{data.avg_delivery_time}</td>
                            <td>{data.status}</td>
                            <td><button>Edit</button></td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Retailer