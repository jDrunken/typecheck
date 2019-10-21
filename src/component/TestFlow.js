// @flow
import React from 'react';

type Props = {
  // array : number,
  // isTrue : PropTypes.bool,
  // isFalse : PropTypes.bool,
  // func : PropTypes.func,
  number: number,
  // object: PropTypes.object,
  string : boolean,

  // any : PropTypes.node,
  // element: PropTypes.element,
  // Enum: PropTypes.oneOf(['hello', 'world']),
  // union: PropTypes.oneOfType([
  //   PropTypes.bool,
  //   PropTypes.string,
  //   PropTypes.number
  // ]),
  // arrayOf: PropTypes.arrayOf(PropTypes.number),
  // notArrayOf: PropTypes.arrayOf(PropTypes.string),
  // objectOf: PropTypes.objectOf(PropTypes.number),
  // notObjectOf: PropTypes.objectOf(PropTypes.string),

  // required: PropTypes.string.isRequired,
}


const TestFlow = ({number, string}:Props) => {
  return (
    <table>
      <thead>
        <tr>
          <th colSpan="2">TestFlow</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Number</th>
          <td>{number}</td>
        </tr>
        <tr>
          <th scope="row">string</th>
          <td>{string}</td>
        </tr>
      </tbody>
    </table>
  )
}


TestFlow.defaultProps = {
  string: 'hello world'
}


export default TestFlow
