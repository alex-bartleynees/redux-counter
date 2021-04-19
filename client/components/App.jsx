import React from 'react'

import Counter from './Counter'

function App (props) {
  return (
    <div>
      <Counter store={props.store} />
    </div>
  )
}

export default App
