import PropTypes from "prop-types";
import "./css/Panel.css"

const ArithmeticPanel = ({ sign, setSign }) => {
  const changeSign = (e) => {
    setSign(e.target.innerText);
  };

  return (
    <div className="panel">
      <p>{sign}</p>
      <div className="numbers">
        <button onClick={changeSign}>+</button>
        <button onClick={changeSign}>-</button>
        <button onClick={changeSign}>*</button>
        <button onClick={changeSign}>÷</button>
      </div>
    </div>
  );
};

ArithmeticPanel.propTypes = {
    sign: PropTypes.string.isRequired,
    setSign: PropTypes.func.isRequired,
};

export default ArithmeticPanel;
