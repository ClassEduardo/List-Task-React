import './Form.css';
import PropTypes from 'prop-types';
import { FaPlus } from 'react-icons/fa';


export default function Form({ handleSubmit, handleChange, handleValue }) {

  return (
    <form onSubmit={handleSubmit} action="#" className="form">
    <input
      onChange={handleChange}
      type="text"
      value={handleValue}
    />

    <button type="submit">
      <FaPlus />
    </button>
  </form>
  )
}
/*
Passar um valor padrão para a prop

Form.defaultProps = {
  handleValue: 'Valor padrão'
}
*/
Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleValue: PropTypes.string.isRequired,
}