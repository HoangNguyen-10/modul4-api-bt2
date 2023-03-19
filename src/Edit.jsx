import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
export default function Edit() {
    const { id } = useParams()
    const [data, setData] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        axios.get('http://localhost:3000/users/' + id)
            .then(res => {
                setData(res.data)
            })
            .catch(err => { console.log(err) })
    }, [])

    const handleSubmit = e => {
        e.preventDefault()
        axios.put('http://localhost:3000/users/' + id, data)
            .then(res => {
                alert('update successfully!')
                navigate('/')
            })
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="">Title</label><br />
                <input type="text" name="title" id="" value={data.title} onChange={e => setData({ ...data, title: e.target.value })} /><br />
                <label htmlFor="">Quantity</label><br />
                <input type="text" name="quantity" id="" value={data.quantity} onChange={e => setData({ ...data, quantity: e.target.value })} />
                <button>Update</button>
            </form>
        </div>
    )
}
