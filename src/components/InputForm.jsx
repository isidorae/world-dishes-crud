import { useState, useEffect } from 'react'
import '../App.css'


export default function InputForm({addDish}) {

    const [dish, setDish] = useState("")
    const [country, setCountry] = useState("")
  
    //CREATE NEW PRODUCT
  const saveProduct = async (e) => {
          e.preventDefault()

        if(dish === "" || country === ""){
          alert('Please fill out all fields.')
          return;
        }

        addDish(
          {
            name: dish,
            origen: country,
        }
        )
    
  }

    return(
      <div>
        <form onSubmit={saveProduct}>
        <input name="name" value={dish} onChange={(e) => setDish(e.target.value)} type="text" placeholder="dish"/> <br />
        <input name="origen" value={country} onChange={(e) => setCountry(e.target.value)} type="text" placeholder="country"/><br />
        <button className="submit-btn">Submit</button>
        </form>
      </div>



    )
}