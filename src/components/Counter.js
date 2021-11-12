import { Button } from 'react-bootstrap'
import React from 'react'
import { CounterCustomHook } from './CounterCustomHook'

const Counter = () => {
    
    const { counter, handleSubstract, handleReset, handleAdd } = CounterCustomHook(20)

    return (
        <div>
            <h1>Contador: {counter}</h1>
            <Button type="button" className="btn btn-primary" onClick={handleSubstract}>-1</Button>
            <Button type="button" className="btn btn-warning" onClick={handleReset}>Reset</Button>
            <Button type="button" className="btn btn-primary" onClick={handleAdd}>+1</Button>
        </div>
    )
}

export default Counter
