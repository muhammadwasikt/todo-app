import axios from "axios";
import { useEffect, useState } from "react";


const MyTodos = () => {

  const [data, setData] = useState([])
  // create a function for fatching data from api
  const addPostData = async () => {
    try {
      const response = await axios.get('https://todoappapi.vercel.app/todos')
      // add data to state
      setData(response?.data.data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    addPostData()
  }, [addPostData])

  const handleDeleteData = async (item) => {
    const response = await axios.delete(`https://todoappapi.vercel.app/todos/delete/${item._id}`)
    console.log(response)
  }


  return (
    <div className="w-full flex flex-col items-center gap-3 p-4">
      { data?.length > 0 ?
        data?.map((item) => {
          return (
            <div key={item._id} className="border-2 border-gray-400 p-4 w-full rounded-lg flex max-sm:flex-col">
              <div className="flex flex-col gap-3 w-full">
                <h3 className="text-2xl font-bold">Title: {item.title}</h3>
                <p className="text-xl font-bold">Description: <span className="font-medium">{item.description}</span></p>
                <p>Date: {item.updatedAt}</p>
              </div>
              <div className="flex gap-3 sm:flex-col justify-end p-2">
                <button className="btn">Edit</button>
                <button className="btn" onClick={() => handleDeleteData(item)}>Delete</button>
              </div>
            </div>
          )
        }) : <p className="text-2xl font-bold text-red-500">No Data Found</p>
      }
    </div>
  )
}

export default MyTodos