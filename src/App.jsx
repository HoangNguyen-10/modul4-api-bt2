import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
export default function App() {
  const [columns, setColumns] = useState([])
  const [records, setRecords] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    axios.get('http://localhost:3000/users')
      .then(res => {
        setColumns(Object.keys(res.data[0]))
        setRecords(res.data)
      })
  }, [])
  return (
    <div>
      <Link to='/create'>Add</Link>
      <table>
        <thead>
          <tr>
            {columns.map((c, i) => (
              <th key={i}>{c}</th>
            ))}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            records.map((d, i) => (
              <tr key={i}>
                <td>{d.id}</td>
                <td>{d.title}</td>
                <td>{d.quantity}</td>
                <td>
                  <Link to={`/update/${d.id}`}>Edit</Link>{' '}
                  <button onClick={() => handleDelete(d.id)}>Delete</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )

  function handleDelete(id) {
    const confirm = window.confirm('Do you want to delete?')
    if (confirm) {
      axios.delete('http://localhost:3000/users/' + id)
        .then(res => {
          alert('Item has been deleted')
          navigate('/')
        })
        .catch(err => { console.log(err) })
    }
  }
}

