import {
  APPLY_NUMBER,
  CHANGE_OPERATION,
  CLEAR_DISPLAY,
  MEMORY_RECALL,
  MEMORY_CLEAR,
  MEMORY_ADD,
  CALCULATE_TOTAL,
} from './actions.jsx';

export const initialState = {
  total: 0,
  currentNumber: '',
  operation: '+',
  memory: 0,
};

const calculateResult = (num1, num2, operation) => {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num2 !== 0 ? num1 / num2 : 0;
    default:
      return num1;
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case APPLY_NUMBER:
      return {
        ...state,
        currentNumber: state.currentNumber + action.payload,
      };

    case CALCULATE_TOTAL:
      return {
        ...state,
        total: calculateResult(
          state.total,
          Number(state.currentNumber),
          state.operation
        ),
        currentNumber: '',
      };

    case CHANGE_OPERATION:
      return {
        ...state,
        total: state.currentNumber
          ? calculateResult(
              state.total,
              Number(state.currentNumber),
              state.operation
            )
          : state.total,
        operation: action.payload,
        currentNumber: '0',
      };

    case CLEAR_DISPLAY:
      return {
        ...state,
        total: 0,
        currentNumber: '',
      };

    case MEMORY_RECALL:
      return {
        ...state,
        currentNumber: state.memory.toString(),
      };

    case MEMORY_CLEAR:
      return {
        ...state,
        memory: 0,
      };

    case MEMORY_ADD:
      return {
        ...state,
        memory: state.currentNumber
          ? calculateResult(
              state.total,
              Number(state.currentNumber),
              state.operation
            )
          : state.total,
      };

    default:
      return state;
  }
};

export default reducer;
