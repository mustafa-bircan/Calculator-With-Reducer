import React, { useReducer } from 'react';
import TotalDisplay from './components/TotalDisplay.jsx';
import CalcButton from './components/CalcButton.jsx';
import {
  applyNumber,
  changeOperation,
  clearDisplay,
  memoryRecall,
  memoryClear,
  memoryAdd,
  calculateTotal,
} from './store/actions.jsx';
import reducer, { initialState } from './store/reducers.jsx';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleNumberClick = (number) => {
    dispatch(applyNumber(number));
  };

  const handleOperationClick = (operation) => {
    dispatch(changeOperation(operation));
  };

  const handleEqualClick = () => {
    dispatch(calculateTotal());
  };

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand"> Reducer Challenge</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.currentNumber || state.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b> {state.operation}
              </span>
              <span id="memory">
                <b>Memory:</b> {state.memory}
              </span>
            </div>
            <div className="row">
              <CalcButton value={'M+'} onClick={() => dispatch(memoryAdd())} />
              <CalcButton
                value={'MR'}
                onClick={() => dispatch(memoryRecall())}
              />
              <CalcButton
                value={'MC'}
                onClick={() => dispatch(memoryClear())}
              />
            </div>
            <div className="row">
              {[1, 2, 3].map((num) => (
                <CalcButton
                  key={num}
                  value={num}
                  onClick={() => handleNumberClick(num)}
                />
              ))}
            </div>
            <div className="row">
              {[4, 5, 6].map((num) => (
                <CalcButton
                  key={num}
                  value={num}
                  onClick={() => handleNumberClick(num)}
                />
              ))}
            </div>
            <div className="row">
              {[7, 8, 9].map((num) => (
                <CalcButton
                  key={num}
                  value={num}
                  onClick={() => handleNumberClick(num)}
                />
              ))}
            </div>
            <div className="row">
              <CalcButton
                value={'+'}
                onClick={() => handleOperationClick('+')}
              />
              <CalcButton value={0} onClick={() => handleNumberClick(0)} />
              <CalcButton
                value={'-'}
                onClick={() => handleOperationClick('-')}
              />
            </div>
            <div className="row">
              <CalcButton
                value={'*'}
                onClick={() => handleOperationClick('*')}
              />
              <CalcButton
                value={'/'}
                onClick={() => handleOperationClick('/')}
              />
              <CalcButton
                value={'CE'}
                onClick={() => dispatch(clearDisplay())}
              />
            </div>
            <div className="row eq_button">
              <CalcButton value={'='} onClick={handleEqualClick} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
