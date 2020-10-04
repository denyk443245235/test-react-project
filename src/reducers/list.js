import {
  ADD_ENTRY_TO_LIST,
  CHANGE_BUYING_STATE,
  DELETE_ENTRY_FROM_LIST,
  SORT_ALPHABETICALLY,
  SORT_BY_PRIORITY
} from "../contants";

let list = JSON.parse(localStorage.getItem('list'));

const saveNewList = (list) => {
  localStorage.setItem('list', JSON.stringify(list));
};

const sortAlphabetically = (list) => {
  return list.sort((a, b) => (a.name > b.name) ? 1 : -1);
};

const sortByPriority = (list) => {
  return list.sort((a, b) => (a.priority < b.priority) ? 1 : -1);
};

export default (state = (list ? list : []), { type, name, index, sorting,  buyingState, priority }) => {
  var newList = [...state];
  switch (type) {
    case ADD_ENTRY_TO_LIST:
      var id = Math.random().toString(36).substr(2, 9);
      newList  = [
        ...state,
        { name, priority, buyingState: false, id }
      ];
      if (sorting === 'byPriority') {
        newList = sortByPriority(newList);
      } else if (sorting === 'alphabetically') {
        newList = sortAlphabetically(newList);
      }
      saveNewList(newList);
      return newList;

    case DELETE_ENTRY_FROM_LIST:
      newList.splice(index,1);
      saveNewList(state);
      return newList;

    case CHANGE_BUYING_STATE:
      newList.forEach((item, i) => {
        if (i === index) {
          item.changeBuyingStateTime = new Date();
          item.buyingState = buyingState;
        }
      });
      saveNewList(newList);
      return newList;

    case SORT_BY_PRIORITY:
      newList = sortByPriority(newList);
      return newList;

    case SORT_ALPHABETICALLY:
      newList = sortAlphabetically(newList);
      return newList;

    default:
      return state;
  }
};
