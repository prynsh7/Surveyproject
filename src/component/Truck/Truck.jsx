import React, { useState, useEffect} from 'react'
import {GET_TRUCK, GET_Truck } from '../../utils/apiConstant';

import axios from "axios"
import TruckModal from '../Modal/TruckModal';

function Truck() {

    const [truck, setTruck] = useState();
    const [showModal, setShowModal] = useState(false);
    const [data, setData] = useState();
    const [trigger, setTrigger] = useState()

    const getData = async () => {
        await axios.get(GET_TRUCK)
            .then(res => {
                console.log(res)
                setTruck(res.data)
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
            <TruckModal showModal={showModal} setShowModal={setShowModal} data={data} setData={setData} setTrigger={setTrigger} />
            <div className="header">
            </div>

            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">ID</th>
                        <th scope="col">Product Id</th>
                        <th scope="col">Manufacturer Id</th>
                        <th scope="col">Retailer Id</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Promo id</th>
                        <th scope="col">Order Id</th>
                        <th scope="col">status</th>
                        <th scope="col">Setting</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {truck && truck.map((data, key) => {
                        return <tr>
                            <th scope="row">{key + 1}</th>
                            <td>{data.id}</td>
                            <td>{data.product_id}</td>
                            <td>{data.manufacturer_id}</td>
                            <td>{data.retailer_id}</td>
                            <td>{data.quantity}</td>
                            <td>{data.promo_id}</td>
                            <td>{data.order_id}</td>
                            <td>{data.status}</td>
                            <td><button onClick={(e) => {
                                e.preventDefault();
                                setData(data);
                                openModal()
                            }}>Edit</button></td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Truck