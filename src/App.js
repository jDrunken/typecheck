//@flow
import React, { useState } from 'react';

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
      return (<strong>Im element</strong>)
    })(),
    Enum : 'hello',
  }

  const [dynamic, setDynamic] = useState(1)

  function setType ($event) {
    return typeof dynamic === 'number' ? setDynamic('str') : setDynamic(1)
  }


  return (
    <div className="wrapper">
      <div className="prop">
        <TestProps
          array={data.array}
          isTrue={data.isTrue}
          func={data.func}
          number={data.num}
          object={data.object}
          string={data.string}
          any={data.any}
          element={data.element}
          Enum={data.Enum}
          union={data.array}
          arrayOf={data.array}
          notArrayOf={data.array}
          objectOf={data.object}
          dynamic={dynamic}
          setType={setType}
        />
      </div>
      <div className="flow">
        <TestFlow
          array={data.array}
          isTrue={data.isTrue}
          func={data.func}
          number={data.num}
          object={data.object}
          string={data.string}
          any={data.any}
          element={data.element}
          Enum={data.Enum}
          union={data.array}
          arrayOf={data.array}
          notArrayOf={data.array}
          objectOf={data.object}
          dynamic={dynamic}
          setType={setType}
        />
      </div>
    </div>
  )
}

export default App;
