import React, { useState } from 'react'
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";
import "./Modal.scss"
import { ADD_PRODUCT } from '../../utils/apiConstant';
import axios from "axios"

const override = css`
  display: block;
  margin: 0 auto;
  border-color: var(--green);
  left: calc(50% - 75px);
  position: fixed;
  z-index: 2001;
`;

function ProductModal({ showModal, setShowModal, }) {


    const [name, setName] = useState();
    const [price, setPrice] = useState();
    const [brand_id, setBrand_id] = useState();
    const [categoryId, setCategroyId] = useState();
    const [manufacturerId, setManufacturerId] = useState();
    const [sampleAvailable, setSampleAvailable] = useState(false);
    const [images, setImages] = useState();

    let [loading, setLoading] = useState(false);
    let [color, setColor] = useState("#000000");


    const handleSubmit = async () => {

        const obj = {
            name: name,
            price: price,
            brand_id: brand_id,
            category_id: categoryId,
            manufacturer_id: manufacturerId,
            sample_available: sampleAvailable,
            images: images
        }

        await axios.post(ADD_PRODUCT, obj)
            .then(res => {
                console.log(res.data);
                alert(res.data.message);
            })
            .catch(err => {
                console.log(err);
            })
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
                    <div className="modal_top">
                        <h2>Add Product </h2>
                        <button  ><img src="./Assets/x.svg" alt="" /></button>
                    </div>
                    <hr />
                    <div className="modal_body">

                        {/* <div className="row">
                            <div className="col-6">

                                <div className="u_img">

                                    <input
                                        type='file'
                                        accept='image/*' />
                                    <p>
                                        Upload Image
                                    </p>
                                </div>

                            </div>
                        </div> */}


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
                                    Price
                                </label>
                                <input type="number" value={price} className="form-control" placeholder="Enter the price" onChange={(e) => setPrice(e.target.value)} />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <label className="input-lebel">
                                    Brand Id
                                </label>
                                <input type="number" value={brand_id} className="form-control" placeholder="Enter the Email" onChange={(e) => setBrand_id(e.target.value)} />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <label className="input-lebel">
                                    Category Id
                                </label>
                                <input type="number" value={categoryId} className="form-control" placeholder="Enter the Address" onChange={(e) => setCategroyId(e.target.value)} />
                            </div>
                        </div>


                        <div className="row">
                            <div className="col">
                                <label className="input-lebel">
                                    Manufacturer Id
                                </label>
                                <input type="number" value={manufacturerId} className="form-control" placeholder="Enter the Address" onChange={(e) => setManufacturerId(e.target.value)} />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <label className="input-lebel">
                                    Sample Available = {`${sampleAvailable}`}
                                </label>
                                <button onClick={() => setSampleAvailable(!sampleAvailable)}>TOOGLR</button>
                            </div>
                        </div>


                        <div className="row">
                            <div className="col">
                                <label className="input-lebel">
                                    Images
                                </label>
                                <input type="text" value={images} className="form-control" placeholder="Enter the Address" onChange={(e) => setImages(e.target.value)} />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col"></div>
                            <div className="col">
                                <div className="form_buttons">
                                    <button className="btn btn-primary" onClick={() => setShowModal(prev => !prev)} >Cancel</button>

                                    <input type="submit" onClick={() => handleSubmit()} />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </> : null}

        </>
    )
}

export default ProductModal