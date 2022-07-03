import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { DotLoader } from 'react-spinners';
import { GET_FACULTY, HEADERS } from '../../utils/apiConstant';
import FacultyModal from '../Modal/FacultyModal';


function Category() {

    const [category, setCategory] = useState();
    const [trigger, setTrigger] = useState()
    const [data, setData] = useState()


    const auth = localStorage.getItem("auth");

    const headers = {
        "Authorization": `Bearer ${auth}`
    }

    const getData = async () => {
        await axios.get(GET_FACULTY, {headers: headers})
            .then(res => {
                localStorage.setItem("faculty", res.data.users);
                setCategory(res.data.users)
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
            <FacultyModal showModal={showModal} setShowModal={setShowModal} data={data} setData={setData} setTrigger={setTrigger} />
            <div className="header">
                <button onClick={openModal}>Add Faculty</button>
            </div>

            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope='col'>Name</th>
                        <th scope='col'>Email</th>
                        <th scope='col'>Password</th>
                    </tr>
                </thead>
                <tbody>
                    {category ? category.map((data, key) => {
                        if(!data.isAdmin)
                        return <tr>
                            <th scope="row">{key}</th>
                            <td>{data.name}</td>
                            <td>{data.email}</td>
                            <td>{data.password}</td>
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