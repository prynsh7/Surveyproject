import React, { useState, useEffect } from 'react'
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";
import "./Modal.scss"
import { ADD_PRODUCT, GET_RETAILER, GET_TRUCK } from '../../utils/apiConstant';
import axios from "axios"

const override = css`
  display: block;
  margin: 0 auto;
  border-color: var(--green);
  left: calc(50% - 75px);
  position: fixed;
  z-index: 2001;
`;

function RetailerModal({ showModal, setShowModal, data, setData, setTrigger }) {


    const [status, setStatus] = useState()

    let [loading, setLoading] = useState(false);
    let [color, setColor] = useState("#000000");


    useEffect(() => {

        if (data) {
            setStatus(data.status)
        }

    }, [data])



    const handleUpdate = async () => {

        const obj = {
            status: status
        }

        await axios.put(`${GET_RETAILER}/${data.id}`, obj)
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

        setStatus()
        setData();
    }


    const closeModal = () => {

        close()
        setShowModal(prev => !prev)

    }




    return (
        <>
            <>{loading ?
                <div className='loader'>
                    <ClipLoader color={color} loading={true} css={override} size={150} /> </div> : null}</>
            {showModal ? <>

                <div className="modal" >
                </div>
                <div className="modal_content">
                    <hr />
                    <div className="modal_body">

                        <div className="row">
                            <div className="col">
                                <label className="input-lebel">
                                    Status = ACTIVE, INACTIVE, BLOCKED
                                </label>
                                <input type="text" value={status} className="form-control" placeholder="Enter the Status" onChange={(e) => setStatus(e.target.value)} />
                            </div>
                        </div>


                        <div className="row">
                            <div className="col"></div>
                            <div className="col">
                                <div className="form_buttons">
                                    <button className="btn btn-primary" onClick={() => closeModal()} >Cancel</button>


                                    {data ? <input type="submit" value="update" onClick={() => handleUpdate()} /> : null}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </> : null}

        </>
    )
}

export default RetailerModal