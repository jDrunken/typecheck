import React from 'react';
import PropTypes from 'prop-types';

const TestProps = ({string, number, isTrue, func, array, object, any, element, Enum, union, arrayOf, notArrayOf, objectOf, required, defaultProps, dynamic, setType}) => {
  return (
    <table>
      <thead>
        <tr>
          <th colSpan="2">TestProps</th>
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
            <button type="button" onClick={func}>console.log</button>
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
          <td>{element}</td>
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
          <th>isRequired</th>
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

TestProps.propTypes = {
  array : PropTypes.array,
  isTrue : PropTypes.bool,
  func : PropTypes.func,
  number: PropTypes.number,
  object: PropTypes.object,
  string : PropTypes.string,

  any : PropTypes.node,
  element: PropTypes.element,
  Enum: PropTypes.oneOf(['hello', 'world']),
  union: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
    PropTypes.number,
    PropTypes.array
  ]),
  arrayOf: PropTypes.arrayOf(PropTypes.number),
  objectOf: PropTypes.objectOf(PropTypes.string),

  required: PropTypes.string.isRequired,
  dynamic: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
  setType:PropTypes.func
}

TestProps.defaultProps = {
  defaultProps: 'hello world'
}

export default TestProps
