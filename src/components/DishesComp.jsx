
export default function DishesComp({dishesData, getDishToEditID, deleteDish}) {

  const accessDishFields = (dishID, name, country) => {
    //pass ID to parent APP.jsx 
   getDishToEditID(dishID, name, country)

  }

  const accessIDtoDelete = (id, name) => {

    const confirmBox = confirm(`Are you sure you want to delete dish "${name}"?`)

    if (confirmBox){
    deleteDish(id)
    } else {
      return;
    }

  }


    return (
        <>
       { dishesData.map((el) => {
            return(
                    <tr key={el.id}>
                      <td>{el.name}</td>
                      <td>{el.origen}</td>
                      <td>
                        <button onClick={(e) => accessDishFields(el.id, el.name, el.origen)} className="edit-btn">Edit</button>
                        <button onClick={(e) => accessIDtoDelete(el.id, el.name)} className="del-btn">X</button>
                      </td>
                    </tr>
            )
         })
       }
        </>
    )
}