import React from 'react';
import PropTypes from 'prop-types';

const TestProps = ({string, number, isFalse, isTrue, func, array, object, any, element, Enum, union, arrayOf, notArrayOf, objectOf, notObjectOf, required, defaultProps}) => {
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
          <td>bool/숫자/문자 아니라서 에러</td>
        </tr>
        <tr>
          <th>arrayOf</th>
          <td>{arrayOf}</td>
        </tr>
        <tr>
          <th>notArrayOf</th>
          <td>{notArrayOf}</td>
        </tr>
        <tr>
          <th>objectOf</th>
          <td>{objectOf.a}</td>
        </tr>
        <tr>
          <th>notObjectOf</th>
          <td>{notObjectOf.a}</td>
          <td></td>
        </tr>
        <tr>
          <th>required</th>
          <td>{required}</td>
          <td>반드시 문자열이어야 하나 없어서 에러</td>
        </tr>
        <tr>
          <th>defaultProps</th>
          <td>{defaultProps}</td>
          <td>null로 주어져도 빈 값이기 때문에<br />
          defaultProps이 적용되지 않음</td>
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
  ]),
  arrayOf: PropTypes.arrayOf(PropTypes.number),
  notArrayOf: PropTypes.arrayOf(PropTypes.string),
  objectOf: PropTypes.objectOf(PropTypes.number),
  notObjectOf: PropTypes.objectOf(PropTypes.string),

  required: PropTypes.string.isRequired,
}

TestProps.defaultProps = {
  defaultProps: 'hello world'
}

export default TestProps
