import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment} from './counterSlice'
import {incrementByAmount} from './counterSlice'
import {chosennumber} from './counterSlice'


//import styles from './Counter.module.css'
export default function Counter() {
    const count = useSelector(chosennumber);
    const dispatch = useDispatch()
    const[numnbertoincrement, setnumbertoincrement] = useState(0);
    const incrementingamount = Number(numnbertoincrement);
    
    return (
     <div>
         <span>{count}</span>
      <div>
        <button
         aria-label="Increment value"
         onClick={() => dispatch(increment())}
        >
         Increment
        </button>
        <button
          aria-label="Increment amount value"
          onClick={() => dispatch(incrementByAmount(incrementingamount))}
        >
         Increment by Amount
        </button>
        <input
          type ="text"
          value={numnbertoincrement}
          onChange={(event) => setnumbertoincrement(event.target.value)}
        />
     </div>
    </div>
 )
}