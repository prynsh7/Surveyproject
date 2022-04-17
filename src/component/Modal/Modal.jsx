import cogoToast from 'cogo-toast';
import React, { useState, useEffect } from 'react'
import './Modal.scss'
import { storage } from '../../../Firebase/Firebase';
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";
import {categories} from '../../../data'
import * as ApiHelper from '../../../services/apiHelper';


const override = css`
  display: block;
  margin: 0 auto;
  border-color: var(--green);
  left: calc(50% - 75px);
  position: fixed;
  z-index: 2001;
`;




function Modal({ showModal, setShowModal, itemId, setItemId }) {

    const [allImages, setImages] = useState([]);
    const [addon, setAddon] = useState([]);
  //  const [image, setImage] = useState([]);
    const [addonName, setAddonName] = useState();
    const [addonPrice, setAddonPrice] = useState();
//    const [grape, setGrape] = useState();
    const [imgUrl, setImgUrl] = useState([]);
    let [loading, setLoading] = useState(false);
    let [color, setColor] = useState("#000000");
  

    const [category, setCategory] = useState(itemId != null? itemId.category : '');
    const [title, setTitle] = useState(itemId != null ? itemId.title : '');
    const [description, setDescription] = useState(itemId != null ? itemId.description : '');
    const [price, setPrice] = useState(itemId != null ? itemId.price : '');


    useEffect(() => {

        if(itemId != null){
            setCategory(itemId.category);
            setTitle(itemId.name);
            setDescription(itemId.description);
            setPrice(itemId.price);
            setAddon(itemId.addOns);
            setImgUrl(itemId.image);
        }

    }, [itemId])

    // console.log(categories);

    const addAddon = async () => {

        var arr = addon;
        var id = arr.length;

        await setAddon('');
        arr.push({
            'name': addonName,
            'price': addonPrice
        });
        setAddon(arr);
        document.getElementById('addon_p').value = '';
        document.getElementById('addon_n').value = '';
    }

    const del_addon = async (e, data) => {
        e.preventDefault();
        var arr = addon;
        await setAddon('');
        arr.splice(data, 1);
        setAddon(arr);
    }

    const addData = async () => {
        console.log('click')
        const obj = {
            "image" : imgUrl,
            "name" : title,
            "description" : description,
            "addOns" :  addon,
            "price" : price,
            "category" : category,
            "available" : true
        }

        setLoading(true)

        if(itemId != null){
            await ApiHelper.UpdateMenu(itemId._id, obj).then((response) => {
                if(response.isSuccess == true)
                {
                  cogoToast.success(response.message);
                  setLoading(false);
                  close();
                }
                else{
                  setLoading(false);
                  cogoToast.error(response.message);
                //   localStorage.setItem(storageConstants.AUTH, JSON.stringify(response.data.token, (k, v) => v === undefined ? null : v));
                }
              });
        }else{
            await ApiHelper.AddMenuItem(obj).then((response) => {
                if(response.isSuccess == true)
                {
                  cogoToast.success(response.message);
                  setLoading(false);
                  close();
                }
                else{
                  setLoading(false);
                  cogoToast.error(response.message);
                //   localStorage.setItem(storageConstants.AUTH, JSON.stringify(response.data.token, (k, v) => v === undefined ? null : v));
                }
              });
        }
        
    }

    // const image_add = async (e, data) => {
    //     var arr = image;
    //     await setImage('');
    //     arr.push(data);
    //     setImage(arr);
    //     var reader = new FileReader();
    //     console.log(data);

    //     if (data === undefined) {
    //         var url = reader.readAsDataURL(data);
    //         console.log(url);
    //     }
    //     // var url = reader.readAsDataURL(data);

    // }

    const del_img = async (e, data, url) => {
        e.preventDefault();
        var arr = imgUrl;
        await setImgUrl(null);
        arr.splice(data, 1);
        deleteFromFirebase(url);
        setImgUrl(arr);
    }


    const handleUpload = (file) => {

        if(file && imgUrl.length < 3){

            setLoading(true);

        const uploadTask = storage.ref(`images/${file.name}`).put(file);
        uploadTask.on(
            "state_changed",
            snapshot => {},
            error => {
                console.log(error);
            },
            () => {
                storage
                .ref("images")
                .child(file.name)
                .getDownloadURL()
                .then(url => {
                    setImgUrl([...imgUrl, url])
                    setLoading(false);
                })

            }
        )
        }else{
            cogoToast.error('cant add more than 3 image');
        }
        
    }

    const getFromFirebase = () => {
        
        let storageRef = storage.ref();
        
        storageRef.listAll().then(function (res) {
        
            res.items.forEach((imageRef) => {
              imageRef.getDownloadURL().then((url) => {
        
                  setImages((allImages) => [...allImages, url]);
              });
            });
          })
          .catch(function (error) {
            console.log(error);
          });
      };

      const deleteFromFirebase = (url) => {
        
        let pictureRef = storage.refFromURL(url);
       
        pictureRef.delete()
          .then(() => {
            setImages(allImages.filter((image) => image !== url));
          })
          .catch((err) => {
            console.log(err);
          });
      };

      useEffect(() => {
        getFromFirebase();        
      }, [itemId]);


      const close = () => {
        setCategory('');
        setTitle('');
        setDescription('');
        setPrice('');
        setAddon([]);
        setImgUrl([]);
        setItemId(null);
        setShowModal(prev => !prev)}
       

    return (
        <>
        <>{ loading ?
    <div className='loader'>
    <ClipLoader color={color} loading={true} css={override} size={150} /> </div> : null}</> 
            {showModal ? <>

                <div className="modal" onClick={() => close()}>
                </div>
                <div className="modal_content">
                    <div className="modal_top">
                        <h2>Add Menu Item</h2>
                        <button onClick={() => close()} ><img src="./Assets/x.svg" alt="" /></button>
                    </div>
                    <hr />
                    <div className="modal_body">

                        <div className="row">

                            {imgUrl ? imgUrl.map((data, key) => {
                                return <div className="col imgcontainer" key={key}>
                                    <img src={data} />
                                    <button className='del_img' onClick={(e) => { del_img(e, key, data) }}> <img src="./Assets/x (2).svg" alt="" /> </button>
                                </div>
                            }) : null

                            }
                        </div>


                        <div className="row">
                            <div className="col-6">

                                <div className="u_img">

                                    <input
                                        type='file'
                                        accept='image/*'
                                        onChange={(e) => {
                                            const file = e.target.files[0];

                                            if (file) {
                                                handleUpload(file);
                                                // setGrape(file);
                                            } else {
                                                // setGrape(null);
                                            }
                                        }} />
                                    <p>
                                        Upload Image
                                    </p>
                                </div>

                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                
                                    <label class="input-lebel" for="">Category</label>
                                    <select class="form-select form-select-lg" id="year" value={category} onChange={(e) => setCategory(e.target.value)}>
                                        <option >Please select a category</option>
                                        {categories && categories.map((data, key) => {
                                            return <option key={key} value={data.name}>{data.name}</option>
                                        })}
                                    </select>
                                    </div>
                            
                        </div>

                        <div className="row">
                            <div className="col">
                                <label className="input-lebel">
                                    Title
                                </label>
                                <input type="text" value={title} className="form-control" placeholder="Enter the food title" onChange = {(e) => setTitle(e.target.value)}/>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <label className="input-lebel">
                                    Description
                                </label>
                                <textarea name="" id="" className="form-control" placeholder="Enter the food Description" cols="30" rows="5" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                            </div>
                        </div>


                        <div className="row">
                            <div className="col">
                                <label className="input-lebel">
                                    Price
                                </label>
                                <input type="number" className="form-control" placeholder="Enter Price" value={price} onChange={(e) => setPrice(e.target.value)} />
                            </div>
                        </div>
                        <div className="row">

                            {
                                addon ? addon.map((data, key) => {
                                    return <div className="addon_pill" key={key}>
                                        <div className='d-flex'>
                                            <p>{data.name}</p>
                                            <span>($ {data.price} )</span>
                                        </div>
                                        <button className='del_img' onClick={(e) => { del_addon(e, key) }}> <img src="./Assets/x (2).svg" alt="" /> </button>
                                    </div>
                                }) : null
                            }

                        </div>


                        <div className="row">

                            <div className="col">
                                <label className="input-lebel">
                                    Name
                                </label>
                                <input type="text" className="form-control" id='addon_n' placeholder="Enter Name" onChange={(e) => { setAddonName(e.target.value); }} />
                            </div>

                            <div className="col">
                                <label className="input-lebel">
                                    Price
                                </label>
                                <input type="number" className="form-control" id='addon_p' placeholder="Enter Price" onChange={(e) => setAddonPrice(e.target.value)} />
                            </div>

                            <div className="col d-flex">
                                <button className='addon_button' onClick={() => addAddon()}>Add addon Item</button>
                            </div>

                        </div>

                        <div className="row">
                            <div className="col"></div>
                            <div className="col">
                                <div className="form_buttons">
                                    <button className="btn btn-primary" onClick={() => close()}>Cancel</button>

                                    <input type="submit" onClick={addData} />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </> : null}

        </>

    )


}

export default Modal
