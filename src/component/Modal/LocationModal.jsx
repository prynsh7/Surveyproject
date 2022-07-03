import React, { useState, useEffect } from 'react'
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";
import "./Modal.scss"
import { ADD_LOCATION, ADD_LOCATIONS } from '../../utils/apiConstant';
import axios from "axios"

const override = css`
  display: block;
  margin: 0 auto;
  border-color: var(--green);
  left: calc(50% - 75px);
  position: fixed;
  z-index: 2001;
`;

function ManufacturerModal({ showModal, setShowModal, data, setData, setTrigger }) {


    const [id, setId] = useState();
    const [name, setName] = useState();
    const [phone, setPhone] = useState();
    const [email, setEmail] = useState();
    const [address, setAddress] = useState();
    const [image, setImage] = useState();
    const [rating, setRating] = useState();
    const [minOrder, setMinOrder] = useState();
    const [avgDelivery, setAvgDelivery] = useState();
    const [status, setStatus] = useState();

    let [loading, setLoading] = useState(false);
    let [color, setColor] = useState("#000000");


    useEffect(() => {

        if (data) {
            setName(data.id)
            setName(data.name)
            setPhone(data.phone)
            setEmail(data.email)
            setAddress(data.address)
            setImage(data.image)
            setMinOrder(data.min_order_value)
            setAvgDelivery(data.avg_delivery_time)
            setStatus(status)
        }

    }, [data])


    const handleSubmit = async () => {

        const obj = {
            id: id,
            name: name,
            phone: phone,
            email: email,
            address: address,
            image: image,
            min_order_value: minOrder,
            avg_dispatch_time: avgDelivery,
            status: status
        }

        const auth = localStorage.getItem("auth");

        const headers = {
            "Authorization": `Bearer ${auth}`
        }

        await axios.post(ADD_LOCATIONS, obj, {headers: headers})
            .then(res => {
                console.log(res.data);
                alert(res.data.message);
                setTrigger(prev => !prev)
            })
            .catch(err => {
                console.log(err);
            })
    }


    const handleUpdate = async () => {

        const obj = {
            name: name,
            phone: phone,
            email: email,
            address: address,
            image: image,
            min_order_value: minOrder,
            avg_dispatch_time: avgDelivery,
            status: status
        }

        await axios.put(`${ADD_LOCATIONS}/${data.id}`, obj)
            .then(res => {
                console.log(res.data);
                alert(res.data.message);
                setTrigger(prev => !prev)
            })
            .catch(err => {
                console.log(err);
            })
    }



    const close = () => {
        setName();
        setPhone();
        setEmail();
        setAddress();
        setImage();
        setMinOrder();
        setAvgDelivery();
        setStatus()
        setData();
    }


    const closeModal = () => {

        close()
        setShowModal(prev => !prev)

    }


    // phone: req.body.phone,
    //     email: req.body.email,
    //         address: req.body.address,
    //             image: req.body.image,
    //                 rating: req.body.rating,
    //                     min_order_value: req.body.min_order_value,
    //                         avg_delivery_time: req.body.avg_delivery_time,
    //
    // status: req.body.status



    return (
        <>
            <>{loading ?
                <div className='loader'>
                    <ClipLoader color={color} loading={true} css={override} size={150} /> </div> : null}</>
            {showModal ? <>

                <div className="modal" >
                </div>
                <div className="modal_content">
                    <div className="modal_top">
                        <h2>Add LOCATION</h2>
                        <button  ><img src="./Assets/x.svg" alt="" /></button>
                    </div>
                    <hr />
                    <div className="modal_body">


                        <div className="row">
                            <div className="col">
                                <label className="input-lebel">
                                    Name
                                </label>
                                <input type="text" value={name} className="form-control" placeholder="Enter the name" onChange={(e) => setName(e.target.value)} />
                            </div>
                        </div>



                        <div className="row">
                            <div className="col">
                                <label className="input-lebel">
                                    Address
                                </label>
                                <input type="text" value={address} className="form-control" placeholder="Enter the Address" onChange={(e) => setAddress(e.target.value)} />
                            </div>
                        </div>


                        <div className="row">
                            <div className="col"></div>
                            <div className="col">
                                <div className="form_buttons">
                                    <button className="btn btn-primary" onClick={() => closeModal()} >Cancel</button>

                                    {data ? <input type="submit" value="update" onClick={() => handleUpdate()} /> : <input type="submit" onClick={() => handleSubmit()} />}

                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </> : null}

        </>
    )
}

export default ManufacturerModal