import React from 'react';
import PropTypes from 'prop-types';

const TestProps = ({string, number, isFalse, isTrue, func, array, object, any, element, Enum, union}) => {
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
          <th scope="row">Bool</th>
          <td>{isFalse ? null : 'false'}</td>
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
          <th scope="row">Symbol</th>
          <td>
            <a
              href="http://hacks.mozilla.or.kr/2015/09/es6-in-depth-symbols/"
              target="_blank"
              rel="noopener noreferrer"
            >
              잘 모르겠습니다.
            </a>
          </td>
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
      </tbody>
    </table>
  )
}

TestProps.propTypes = {
  array : PropTypes.array,
  isTrue : PropTypes.bool,
  isFalse : PropTypes.bool,
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
    PropTypes.number
  ])
}

export default TestProps
