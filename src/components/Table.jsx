import { useEffect } from 'react'
import '../App.css'

import DishesComp from './DishesComp'

export default function Table({dishesData, isLoading, getDishToEditID, deleteDish}) {

// const getDishesData = async () => {
//   await dishesData
// }

// useEffect(() => {
//   getDishesData()
// }, [dishesData])

    return(
        <div className="table-div">
                <table>
                  <tr>
                    <th>Dish</th>
                    <th>Country</th>
                    <th>Actions</th>
                  </tr>
                  <tbody>
        {isLoading
        ? <div>Loading Data..</div>
        : <DishesComp
          dishesData={dishesData}
          getDishToEditID={getDishToEditID}
          deleteDish={deleteDish}
          />
        }
          </tbody>
          </table>
        </div>
    )

}