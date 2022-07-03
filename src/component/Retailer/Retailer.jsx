import React, { useState, useEffect} from 'react'
import { GET_RETAILER } from '../../utils/apiConstant';
import axios from "axios"
import RetailerModal from '../Modal/RetailerModal';

function Retailer() {

    const [retailer, setRetailer] = useState();
    const [showModal, setShowModal] = useState(false);
    const [data, setData] = useState();
    const [trigger, setTrigger] = useState()


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

    }, [trigger])



    const openModal = () => {
        setShowModal(prev => !prev);
    };

    return (
        <div className='content'>
            <RetailerModal showModal={showModal} setShowModal={setShowModal} data={data} setData={setData} setTrigger={setTrigger} />

            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Id</th>
                        <th scope="col">user Id</th>
                        <th scope="col">Image</th>
                        <th scope="col">Is Verified</th>
                        <th scope="col">Shop Address</th>
                        <th scope="col">Shop Name</th>
                        <th scope="col">status</th>
                        <th scope="col">Setting</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {retailer && retailer.map((data, key) => {
                        return <tr>
                            <th scope="row">{key + 1}</th>
                            <td>{data.id}</td>
                            <td>{data.user_id}</td>
                            <td>{data.image}</td>
                            <td>{data.isVerified}</td>
                            <td>{data.shop_address}</td>
                            <td>{data.shop_name}</td>
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

export default Retailer