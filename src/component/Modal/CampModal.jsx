import React, { useState, useEffect } from 'react'
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";
import "./Modal.scss"
import { ADD_CAMP, GET_FACULTY, GET_LOCATIONS, HEADERS } from '../../utils/apiConstant';
import axios from "axios"
import Select from 'react-select'

const override = css`
  display: block;
  margin: 0 auto;
  border-color: var(--green);
  left: calc(50% - 75px);
  position: fixed;
  z-index: 2001;
`;

function ProductModal({ showModal, setShowModal, data, setData, setTrigger, location, faculty }) {


    const [name, setName] = useState();
    const [price, setPrice] = useState();
    const [brandId, setBrandId] = useState();
    const [categoryId, setCategroyId] = useState();
    const [manufacturerId, setManufacturerId] = useState();
    const [sampleAvailable, setSampleAvailable] = useState(false);
    const [images, setImages] = useState();
    const [locationItem, setLocationItem] = useState(null);
    const [facultyItem, setFacultyItem] = useState(null);

    let [loading, setLoading] = useState(false);
    let [color, setColor] = useState("#000000");


    const auth = localStorage.getItem("auth");

    const headers = {
        "Authorization": `Bearer ${auth}`
    }

    const handleSubmit = async () => {

        const obj = {
            name: name,
            locationId: locationItem
        }


        var arr2 = [];

        for(var j of facultyItem){
            arr2.push(j.value);
        }

        obj.faculty = arr2;
        


        await axios.post(ADD_CAMP, obj, { headers: headers })
            .then(res => {
                console.log(res.data);
                alert(res.data.message);
                setTrigger(prev => !prev)

            })
            .catch(err => {
                console.log(err);
            })
    }



    


    useEffect(() => {

        if (data) {

            setName(data.name)
            setPrice(data.mrp)
            setBrandId(data.brand_id)
            setCategroyId(data.category_id)
            setManufacturerId(data.manufacturer_id)
            setSampleAvailable(data.sample_available)
            setImages(data.images)
        }

    }, [data])



    const handleUpdate = async () => {

        const obj = {
            name: name,
            mrp: parseInt(price),
            brand_id: brandId,
            category_id: categoryId,
            manufacturer_id: manufacturerId,
            sample_available: sampleAvailable,
            images: images
        }

        await axios.put(ADD_CAMP, obj)
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

        setName()
        setPrice()
        setBrandId()
        setCategroyId()
        setManufacturerId()
        setSampleAvailable()
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
                    <div className="modal_top">
                        <h2>Add Camp </h2>
                        <button  ><img src="./Assets/x.svg" alt="" /></button>
                    </div>
                    <hr />
                    <div className="modal_body">


                        <div className="row">
                            <div className="col">

                                <label class="input-lebel" for="">Location</label>
                                <select class="form-select form-select-lg" id="year" value={locationItem} onChange={(e) => setLocationItem(e.target.value)}>
                                    <option >Please select a Location</option>
                                    {location && location.map((data, key) => {
                                        return <option key={key} value={data._id}>{data.name}</option>
                                    })}
                                </select>
                            </div>

                        </div>

                        <div className="row">
                            <div className="col">
                                <label class="input-lebel" for="">Faculty</label>
                                <Select
                                    closeMenuOnSelect={false}
                                    isMulti
                                    options={faculty}
                                    // value={facultyItem}
                                    onChange={(e) => setFacultyItem(e)}
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <label className="input-lebel">
                                    Name
                                </label>
                                <input type="text" value={name} className="form-control" placeholder="Enter the name" onChange={(e) => setName(e.target.value)} />
                            </div>
                        </div>


{/* 
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
                                <input type="number" value={brandId} className="form-control" placeholder="Enter the Brand Id" onChange={(e) => setBrandId(e.target.value)} />
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
                        </div> */}

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

export default ProductModal