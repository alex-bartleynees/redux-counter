import React from 'react'

function Counter(props) {
  const {store} = props
  const state = store.getState()

  const onIncrement = () => {
    store.dispatch({type:'INCREMENT'})
  }

  const onDecrement = () => {
    store.dispatch({type:'DECREMENT'})
  }

  return (
    <div>
      <h1>{state}</h1>

      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
     
    </div>
  )
}

export default Counter
