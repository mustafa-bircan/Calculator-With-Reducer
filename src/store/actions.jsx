export const APPLY_NUMBER = 'APPLY_NUMBER';
export const CHANGE_OPERATION = 'CHANGE_OPERATION';
export const CLEAR_DISPLAY = 'CLEAR_DISPLAY';
export const MEMORY_RECALL = 'MEMORY_RECALL';
export const MEMORY_CLEAR = 'MEMORY_CLEAR';
export const MEMORY_ADD = 'MEMORY_ADD';
export const CALCULATE_TOTAL = 'CALCULATE_TOTAL';

export const applyNumber = (number) => ({
  type: APPLY_NUMBER,
  payload: number.toString(),
});

export const calculateTotal = () => ({
  type: CALCULATE_TOTAL,
});

export const changeOperation = (operation) => ({
  type: CHANGE_OPERATION,
  payload: operation,
});

export const clearDisplay = () => ({ type: CLEAR_DISPLAY });

export const memoryRecall = () => ({ type: MEMORY_RECALL });

export const memoryClear = () => ({ type: MEMORY_CLEAR });

export const memoryAdd = () => ({ type: MEMORY_ADD });
