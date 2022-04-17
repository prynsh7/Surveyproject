import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { DotLoader } from 'react-spinners';
import { GET_CATEGORY } from '../../utils/apiConstant';
import CategoryModal from '../Modal/CategoryModal';


function Category() {

    const [category, setCategory] = useState();
    const [trigger, setTrigger] = useState()
    const [data, setData] = useState()

    const getData = async () => {
        await axios.get(GET_CATEGORY)
            .then(res => {
                console.log(res)
                setCategory(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {

        getData();

    }, [trigger])


    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev);
    };

    return (
        <div className='content'>
            <CategoryModal showModal={showModal} setShowModal={setShowModal} data={data} setData={setData} setTrigger={setTrigger} />
            <div className="header">
                <button onClick={openModal}>Add Category</button>
            </div>

            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Id</th>
                        <th scope="col">Title</th>
                        <th scope="col">Description</th>
                        <th scope="col">Img</th>
                        <th scope="col">parent Id</th>
                        <th scope="col">Setting</th>

                    </tr>
                </thead>
                <tbody>
                    {category ? category.map((data, key) => {
                        return <tr>
                            <th scope="row">{key}</th>
                            <td>{data.id}</td>
                            <td>{data.title}</td>
                            <td>{data.description}</td>
                            <td>{data.image}</td>
                            <td>{data.parent_id}</td>
                            <td><button onClick={(e) => {
                                e.preventDefault();
                                setData(data);
                                openModal()
                            }}>Edit</button></td>
                        </tr>
                    }) : null}
                </tbody>
            </table>
        </div>
    )
}

export default Category