import React, { useState, useEffect } from 'react'
import ProductModal from '../Modal/ProductModal';
import axios from "axios"
import { GET_PRODUCT } from '../../utils/apiConstant';

function Product() {

    const [product, setProduct] = useState();
    const [showModal, setShowModal] = useState(false);

    const getData = async () => {
        await axios.get(GET_PRODUCT)
            .then(res => {
                console.log(res)
                setProduct(res.data)
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
            <ProductModal showModal={showModal} setShowModal={setShowModal} />
            <div className="header">
                <button onClick={openModal}>Add Product</button>
            </div>

            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Size</th>
                        <th scope="col">Mrp</th>
                        <th scope="col">Sample Available</th>
                        <th scope="col">images</th>
                        <th scope="col">Price Id</th>
                        <th scope="col">Brand Id</th>
                        <th scope="col">Category Id</th>
                        <th scope="col">Manufacturer Id</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        product && product.map((data, key) => {
                            return <tr>
                            <th scope="row">{key + 1}</th>
                            <td>{data.name}</td>
                            <td>{data.size}</td>
                            <td>{data.mrp}</td>
                            <td>{`${data.sample_available}`}</td>
                            <td>{data.images}</td>
                            <td>{data.brand_id}</td>
                            <td>{data.price_id}</td>
                            <td>{data.category_id}</td>
                            <td>{data.manufacturer_id}</td>
                            <td>{data.status}</td>    
                        </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Product