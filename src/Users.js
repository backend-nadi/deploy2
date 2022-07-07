import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import user from './service/user'

export const Users = () => {
    const [data, setData] = useState([])

    useEffect(async() => {
        const data = await user.Get()
        console.log(data)
    },[])
  return (
    <>
        ini halaman profile saya
        <br/>
        <Link to="/">back</Link>
    </>
  )
}
