import PropTypes from "prop-types";
import "./css/Panel.css"

const NumPanel = ({ num, setNum }) => {
  const clear = () => {
    setNum("0");
  };

  const addNum = (e) => {
    if (num !== "0") {
        setNum(num + e.target.innerText);
      } else {
        setNum(e.target.innerText);
      }
  };


  return (
    <div className="panel">
      <p>{num}</p>
      <div className="numbers">
        <button onClick={addNum}>1</button>
        <button onClick={addNum}>2</button>
        <button onClick={addNum}>3</button>
        <button onClick={addNum}>4</button>
        <button onClick={addNum}>5</button>
        <button onClick={addNum}>6</button>
        <button onClick={addNum}>7</button>
        <button onClick={addNum}>8</button>
        <button onClick={addNum}>9</button>
        <button onClick={addNum}>0</button>
        <button onClick={clear}>Clear</button>
      </div>
    </div>
  );
};

NumPanel.propTypes = {
    num: PropTypes.string.isRequired,
    setNum: PropTypes.func.isRequired,
};

export default NumPanel;
