import React, { useState, useEffect} from 'react'
import { GET_ORDER, GET_RETAILER } from '../../utils/apiConstant';
import axios from "axios"
import OrderModal from '../Modal/OrderModal';

function Order() {

    const [order, setOrder] = useState();
    const [showModal, setShowModal] = useState(false);
    const [data, setData] = useState();
    const [trigger, setTrigger] = useState()


    const getData = async () => {
        await axios.get(GET_ORDER)
            .then(res => {
                console.log(res)
                setOrder(res.data)
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
            <OrderModal showModal={showModal} setShowModal={setShowModal} data={data} setData={setData} setTrigger={setTrigger} />

            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Order Id</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Address Id</th>
                        <th scope="col">Mode</th>
                        <th scope="col">Payment Id</th>
                        <th scope="col">Promo Id</th>
                        <th scope="col">Retailer id</th>
                        <th scope="col">Status</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {order && order.map((data, key) => {
                        return <tr>
                            <th scope="row">{key + 1}</th>
                            <td>{data.order_id}</td>
                            <td>{data.amount}</td>
                            <td>{data.address_id}</td>
                            <td>{data.mode}</td>
                            <td>{data.payment_id}</td>
                            <td>{data.promo_id}</td>
                            <td>{data.retailer_id}</td>
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

export default Order