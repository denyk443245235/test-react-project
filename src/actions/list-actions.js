import {
  ADD_ENTRY_TO_LIST,
  CHANGE_BUYING_STATE,
  DELETE_ENTRY_FROM_LIST,
  SORT_ALPHABETICALLY,
  SORT_BY_PRIORITY
} from '../contants';
export const addEntryToList = (obj) => {
  return {
    type : ADD_ENTRY_TO_LIST,
    ...obj
  };
};

export const deleteEntryFromList = (index) => {
  return {
    type : DELETE_ENTRY_FROM_LIST,
    index
  };
};

export const changeBuyingState = ({index, buyingState}) => {
  return {
    type : CHANGE_BUYING_STATE,
    index,
    buyingState
  };
};

export const sortByPriority = () => {
  return {
    type : SORT_BY_PRIORITY
  }
};

export const sortAlphabetically = () => {
  return {
    type : SORT_ALPHABETICALLY
  }
};