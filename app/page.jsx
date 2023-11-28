'use client'
import { useEffect } from 'react'
import axios from 'axios'

export default function Home() {
  async function getDataFromServer() {
    console.log("Get from server")
    const data = await axios.get("http://localhost/backend/server.php")
    console.log(data.data)
  }
  return (
    <main className='flex flex-col items-center'>
      <h1 className="text-2xl font-semibold">Demo for connection with server.php</h1>
      <button onClick={getDataFromServer} className="bg-blue-300 px-2 py-1 ">Click this to get data from server</button>
    </main>
  )
}
