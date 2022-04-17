import React, { useState, useEffect } from 'react'
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";
import "./Modal.scss"
import axios from 'axios';
import { ADD_CATEGORY } from '../../utils/apiConstant';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: var(--green);
  left: calc(50% - 75px);
  position: fixed;
  z-index: 2001;
`;

function CategoryModal({showModal, setShowModal, data, setData, setTrigger}) {

    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [img, setImg] = useState()
    const [parentId, setParentId] = useState()

    let [loading, setLoading] = useState(false);
    let [color, setColor] = useState("#000000");
  


    useEffect(() => {

        if (data) {
            setTitle(data.title)
            setDescription(data.description)
            setImg(data.image)
            setParentId(data.parent_id)
        }

    }, [data])



    const handleSubmit = async() => {

        const obj = {
            title: title,
            description:description,
            image: img,
            parent_id: parentId
        }

        await axios.post(ADD_CATEGORY, obj)
        .then(res => {
            console.log(res.data);
            alert(res.data.data);
            setTrigger(prev => !prev)
        })
        .catch(err => {
            console.log(err);
        })
    }
    



    const handleUpdate = async () => {
        
        const obj = {
            title: title,
            description:description,
            image: img,
            parent_id: parentId
        }

        await axios.put(`${ADD_CATEGORY}/${data.id}`, obj)
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
        setTitle();
        setImg();
        setDescription();
        setParentId();
        setData();
    }


    const closeModal = () => {

        close()
        setShowModal(prev => !prev)

    }



    return (
        <>
        <>{ loading ?
    <div className='loader'>
    <ClipLoader color={color} loading={true} css={override} size={150} /> </div> : null}</> 
            {showModal ? <>

                <div className="modal" >
                </div>
                <div className="modal_content">
                    <div className="modal_top">
                        <h2>Add Menu Item</h2>
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
                                    Category Name
                                </label>
                                <input type="text" value={title} className="form-control" placeholder="Enter the Name" onChange = {(e) => setTitle(e.target.value)}/>
                            </div>
                        </div>

                        

                        <div className="row">
                            <div className="col">
                                <label className="input-lebel">
                                    Description
                                </label>
                                <input type="text" value={description} className="form-control" placeholder="Enter the Description" onChange = {(e) => setDescription(e.target.value)}/>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <label className="input-lebel">
                                    Image
                                </label>
                                <input type="text" value={img} className="form-control" placeholder="Enter the Image url" onChange = {(e) => setImg(e.target.value)}/>
                            </div>
                        </div>


                        <div className="row">
                            <div className="col">
                                <label className="input-lebel">
                                    Parent Id
                                </label>
                                <input type="number" value={parentId} className="form-control" placeholder="Enter the Parent Id" onChange = {(e) => setParentId(e.target.value)}/>
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

export default CategoryModal