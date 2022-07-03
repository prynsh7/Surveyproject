import React, { useState, useEffect } from 'react'
import CampModal from '../Modal/CampModal';
import axios from "axios"
import { GET_CAMP, GET_FACULTY, GET_LOCATIONS } from '../../utils/apiConstant';

function Camp() {

    const [product, setProduct] = useState();
    const [showModal, setShowModal] = useState(false);
    const [trigger, setTrigger] = useState()
    const [data, setData] = useState()

    const [location, setLocation] = useState();
    const [faculty, setFaculty] = useState(null);


    const auth = localStorage.getItem("auth");

    const headers = {
        "Authorization": `Bearer ${auth}`
    }



    const getData = async () => {


        const auth = localStorage.getItem("auth");

        const headers = {
            "Authorization": `Bearer ${auth}`
        }



        await axios.get(GET_FACULTY, { headers: headers })
            .then(async res => {

                var obj = [];

                for (var i of res.data.users) {
                    const a = {
                        value: i._id,
                        label: i.name
                    }

                    obj.push(a);
                }

                console.log(obj);
                await setFaculty(obj)
            })
            .catch(err => {
                console.log(err)
            })



        await axios.get(GET_LOCATIONS, { headers: headers })
            .then(res => {
                console.log(res)
                setLocation(res.data.data)
            })
            .catch(err => {
                console.log(err)
            })


        await axios.get(GET_CAMP, { headers: headers })
            .then(res => {
                console.log(res)
                setProduct(res.data.data)
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
            <CampModal showModal={showModal} setShowModal={setShowModal} data={data} setData={setData} setTrigger={setTrigger} location={location} faculty={faculty} />
            <div className="header">
                <button onClick={openModal}>Add Camp</button>
            </div>

            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>

                        <th scope="col">Name</th>
                        <th scope="col">Location</th>
                        <th scope="col">Faculty</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        product && product.map((data, key) => {
                            return <tr>
                                <th scope="row">{key + 1}</th>
                                <td>{data.name}</td>
                                <td>
                                    {location.map((d, k) => {
                                        console.log(d);
                                        if (d._id == data.locationId)
                                            return <p>{d.name}</p>
                                    })
                                    }
                                </td>
                                <td> {data.faculty.map((data, k) => {

                                    for (var i of faculty) {
                                        // console.log(i);
                                        if (data == i.value)
                                            return <p>{i.label}</p>
                                    }
                                })} </td>
                                <td><button onClick={(e) => {
                                    e.preventDefault();
                                    setData(data);
                                    openModal()
                                }}>Edit</button></td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Camp