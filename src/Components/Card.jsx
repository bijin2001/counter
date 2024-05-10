import React, { useState } from 'react'
import '../App.css'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, reset, incrementByAmount} from '../redux/counterSlice'

function Card() {
  const [amount,setAmount]= useState(0)
  const dispatch = useDispatch()
  const {count} = useSelector(state=>state.counterReducer)

  const handleIncrementAmount = () =>{

    if(amount){

      dispatch (incrementByAmount(parseInt(amount)))
    }else{

      alert('enter a value')
    }
    
  }
  // useSelector argument should be state
  return (
    <>

      <div className='d-flex justify-content-center align-items-center mt-5'>
        <div className='card' style={{ width: '50em', backgroundColor: 'rgb(17, 54, 44)' }}>
          <h1 style={{ fontSize: '5em' }} className='text-center text-light mt-5'>{count}</h1>
          <div className='d-flex justify-content-center align-items-center mt-5' style={{ gap: '10px' }}>
            <button onClick={()=>dispatch(decrement())} className='btn btn-outline-light'>-</button>
            <button onClick={()=>dispatch(reset())} className='btn btn-outline-light'>Reset</button>
            <button onClick={()=>dispatch(increment())} className='btn btn-outline-light'>+</button>
          </div>

          <div className='d-flex justify-content-center align-items-center mt-5'>
            <input onChange={(e)=>setAmount(e.target.value)} type="text" className='mt-5 mb-5 p-3' placeholder='Increment Amount By Number' style={{ border: '0.5px solid white', outline: 'none', borderRadius: '10px', height: '37px', width: '21em', backgroundColor: 'transparent', color: 'white' }} />
            <button onClick={handleIncrementAmount} className='btn btn-outline-light mt-5 mb-5'>Increment</button>
          </div>
        </div>

      </div>    </>
  )
}

export default Card