import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Add() {
    const [inputData, setInputData] = useState({
        title: '',
        quantity: ''
    })
    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()

        axios.post('http://localhost:3000/users', inputData)
            .then(res => {
                alert('added successfully!!')
                navigate('/')
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="">Title</label><br />
                <input type="text" name="title" id="" onChange={e => setInputData({ ...inputData, title: e.target.value })} /><br />
                <label htmlFor="">Quantity</label><br />
                <input type="text" name="quantity" id="" onChange={e => setInputData({ ...inputData, quantity: e.target.value })} /><br />
                <button >Add</button>
            </form>
        </div>
    )
}
