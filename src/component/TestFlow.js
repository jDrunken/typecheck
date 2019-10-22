// @flow
import React from 'react';

type Props = {
  array : Array<number>,
  isTrue : boolean,
  isFalse : boolean,
  // func : PropTypes.func,
  number: number,
  object: {
    a:string,
    b:string
  },
  string : string,

  any : any,
  // element: Element<any>,
  Enum: 'hello' | 'world',
  union: boolean | string | number | Array<number>,
  arrayOf: Array<number>,
  objectOf: {
    a: string,
    b: string
  },
  required?: string,
  defaultProps:string,
  dynamic : string | boolean,
  setType:any,
}


const TestFlow = ({string, number, isTrue, array, object, any, Enum, union, arrayOf, objectOf, required, defaultProps, dynamic, setType}:Props) => {
  return (
    <table>
      <thead>
        <tr>
          <th colSpan="2">TestFlow</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Array</th>
          <td>{array}</td>
        </tr>
        <tr>
          <th scope="row">Bool</th>
          <td>{isTrue ? 'true' : null}</td>
        </tr>
        <tr>
          <th scope="row">Func</th>
          <td>
            default로 prop 자체가 함수인지 체크하는 기능 없음
          </td>
        </tr>
        <tr>
          <th scope="row">Number</th>
          <td>{number}</td>
        </tr>
        <tr>
          <th scope="row">Object</th>
          <td>
            {object.a}<br />
            {object.b}
          </td>
        </tr>
        <tr>
          <th scope="row">String</th>
          <td>{string}</td>
        </tr>
        <tr>
          <th>Node<br />
          <span>(typescript : any)</span></th>
          <td>{any}</td>
        </tr>
        <tr>
          <th>element</th>
          <td>
            default로 prop가 element인지 체크하는 기능 없음
          </td>
        </tr>
        <tr>
          <th>oneOf</th>
          <td>{Enum}</td>
        </tr>
        <tr>
          <th>oneOfType</th>
          <td>{union}</td>
        </tr>
        <tr>
          <th>arrayOf</th>
          <td>{arrayOf}</td>
        </tr>
        <tr>
          <th>objectOf</th>
          <td>{objectOf.a}</td>
        </tr>
        <tr>
          <th>isRequired(prop?)</th>
          <td>{required}</td>
        </tr>
        <tr>
          <th>defaultProps</th>
          <td>{defaultProps}</td>
        </tr>
        <tr>
          <th>dynamic</th>
          <td>
            {dynamic}
            <button type="button" onClick={setType}>change dynamic type</button>
          </td>
        </tr>
      </tbody>
    </table>

  )
}


TestFlow.defaultProps = {
  defaultProps: 'hello world'
}


export default TestFlow
