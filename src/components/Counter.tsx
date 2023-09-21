"use client"
import React, { useState } from 'react'
import { decrement, increment, incrementByAmount } from '../app/counterSlice'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { UserData } from './UserData'

export const Counter = () => {

    const counter = useAppSelector((state) => state.counterReducer.value)
    const dispatch = useAppDispatch()
    const [incrementAmount, setIncrementAmount] = useState('2');

    return (
        <div className='counter-main'>
            <div>Counter : {counter}</div>
            <button className='pluceButton' onClick={() => dispatch(increment())}>Increment</button>
            <button className='minusButton' onClick={() => dispatch(decrement())}>Decrement</button>

            <div className='input-amount'>
                <input
                    aria-label="Set increment amount"
                    value={incrementAmount}
                    onChange={e => setIncrementAmount(e.target.value)}
                />
                <button
                    className='incrementbutton'
                    onClick={() =>
                        dispatch(incrementByAmount(Number(incrementAmount) || 0))
                    }
                >
                    Add Amount
                </button>
            </div>


            
        </div>
    )
}