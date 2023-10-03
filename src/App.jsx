import { useState, useEffect } from 'react'
import worldfood from './assets/worldfood.png'
import './App.css'
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Table from './components/Table'
import InputForm from './components/InputForm';
import EditForm from './components/EditForm';

function App() {

  const [dishesData, setDishesData] = useState([])
  const [isLoading, setIsLoading] =useState(false)

  //****************FETCH DATA
  const url = 'https://nodejs-api-example-khmr.onrender.com/dishes/'

  const getDishes = async () => {

      setIsLoading(true);
      const response = await axios.get(url)
      setDishesData(response.data)
      setIsLoading(false)
      console.log(response.data)
  }

  // const showLoadingToast = () => {
  //   if (isLoading) {
  //     toast.info("Loading Data...", {
  //       position: toast.POSITION.BOTTOM_CENTER
  //     });
  //   } else {
  //     return;
  //   }
  // }

  // useEffect(() => {
  //   showLoadingToast()
  // }, [dishesData])

  useEffect(() => {
    getDishes()
  }, [])

  //*****************ADD DATA
  const addDish = async (dishBody) => {

    try {
     console.log(dishBody)
     const response = await axios.post(url, dishBody)
     toast.success(`${dishBody.name} saved succesfully`, {
      position: toast.POSITION.TOP_RIGHT
    });
     window.location.reload()
     return response;

    } catch(err){
      toast.error(err.message);
      console.log(err)
    }
  }

  //****************EDIT DATA

  //PART ONE: ACCESS DATA IN INPUTS
  const [dishToUpdate, setDishToUpdate] = useState({})
  const [editing, setToEditing] = useState(false)
  const [idToEdit, setIdToEdit] = useState(null)
  // const [updatedData, setUpdatedData] = useState({})

 
  const getDishToEditID = async (id, name, country) => {

    setToEditing(true)
   const url= `https://nodejs-api-example-khmr.onrender.com/dishes/${id}`
   
    const response = await axios.get(url)
    const idToEdit = response.data.id;
    setIdToEdit(idToEdit)
    console.log(idToEdit)

    setDishToUpdate({
      name: name,
      origen: country
    })
    
    console.log(dishToUpdate)

  }


    //PART TWO: UPDATE API DATA

  const editDish = async (id, updatedData) => {
    const url = `https://nodejs-api-example-khmr.onrender.com/dishes/${id}`
    const response = await axios.put(url, updatedData)
    toast.success("Dish updated successfully.")
    window.location.reload()
    setToEditing(false)
    return response;

  }

    //****************DELETE DATA

  const deleteDish = async (id) => {
    const url = `https://nodejs-api-example-khmr.onrender.com/dishes/${id}`;
    const response = await axios.delete(url)
    toast.success("Dish deleted successfully.", {
      position: toast.POSITION.TOP_CENTER
    });
    window.location.reload()
    return response;
  }

  return (
    <>
      <div>
          <img src={worldfood} className="logo world" alt="React logo" />
      </div>
      <h1>Worldwide dishes data</h1>
      {!editing
      ? <InputForm 
      addDish={addDish}
      />
      : <EditForm
      dishData={dishToUpdate}
      ID={idToEdit}
      editDish={editDish}
      setToEditing={setToEditing}
      />}
      <Table
      dishesData={dishesData}
      isLoading={isLoading}
      getDishToEditID={getDishToEditID}
      deleteDish={deleteDish}
      />
      <p className="read-the-docs">
        World dishes © 2023
      </p>
      <ToastContainer/>
    </>
  )
}

export default App
