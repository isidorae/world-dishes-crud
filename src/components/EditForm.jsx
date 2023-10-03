import { useState, useEffect } from 'react'


export default function EditForm({dishData, ID, editDish, setToEditing}) {

    //lograr que el useState se actualice con cada click en diferentes EDIT
    useEffect(() => {
        if(dishData)
        {
            //agregar valor = al e.target.value
            setUpdatedDish(dishData.name)
            setUpdatedCountry(dishData.origen)
        }
    }, [dishData])


    //INPUT VALUES
    const [dish, setUpdatedDish] = useState("")
    const [country, setUpdatedCountry] = useState("")


    //*********** EDIT FUNCTIONS */

    const updateProduct = (e) => {
        e.preventDefault()

        const updatedData = {
            name: dish,
            origen: country
        }

        editDish(ID, updatedData)
    }
    //*********** CANCEL EDIT
    const returnToDefault = (e) => {
        e.preventDefault()
        setToEditing(false)
    }

    return(
        <div>
        <form onSubmit={updateProduct}>
        <input name="name" value={dish}  onChange={(e) => setUpdatedDish(e.target.value)} type="text" placeholder="dish"/> <br />
        <input name="origen" value={country} onChange={(e) => setUpdatedCountry(e.target.value)} type="text" placeholder="country"/><br />
        <button className="form-edit-btn">Update</button>
        <button onClick={returnToDefault} className="form-cancel-btn">Cancel</button>
        </form>
      </div>


    )

}