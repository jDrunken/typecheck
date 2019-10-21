import React from 'react';

import TestProps from './component/TestProps'
import TestFlow from './component/TestFlow'

import './App.css';


const App = () => {

  const data = {
    string : 'hello',
    num: 123,
    isTrue : true,
    isFalse : false,
    func : () => {
      console.log('it\'s function')
    },
    array: [1,2,3,4,5],
    object: {
      a:'a',
      b:'b'
    },
    any: [2,2,2],
    element: (()=> {
      return (<strong>I'm element</strong>)
    })(),
    Enum : 'hello',
    union : [1,2,3,4,5]   // wrong case
  }

  return (
    <div className="wrapper">
      <div className="prop">
        <TestProps
          array={data.array}
          isTrue={data.isTrue}
          isFalse={data.isFalse}
          func={data.func}
          number={data.num}
          object={data.object}
          string={data.string}
          any={data.any}
          element={data.element}
          Enum={data.Enum}
          union={data.union}
        />
      </div>
      <div className="flow">
         <TestFlow />
      </div>
    </div>
  )
}

export default App;
