import React, { createContext, useReducer, useContext } from 'react';
import {
  SET_CURRENT_DATE,
  REMOVE_DATE,
  UPDATE_DATES,
  ADD_DATE,
  // ADD_FAVORITE,
  // UPDATE_FAVORITES,
  // REMOVE_FAVORITE,
  LOADING,
} from './actions';

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch (action.type) {
    case SET_CURRENT_DATE:
      return {
        ...state,
        currentDates: action.dates,
        loading: false,
      };

    case UPDATE_DATES:
      return {
        ...state,
        dates: [...action.dates],
				loading: false,
      };

    case ADD_DATE:
      return {
        ...state,
        dates: [action.dates, ...state.dates],
        loading: false,
      };

    case REMOVE_DATE:
      return {
        ...state,
        posts: state.dates.filter((dates) => {
          return dates._id !== action._id;
        }),
      };

    // case ADD_FAVORITE:
    //   return {
    //     ...state,
    //     favorites: [action.post, ...state.favorites],
    //     loading: false
    //   };

    // case UPDATE_FAVORITES:
    //   return {
    //     ...state,
    //     favorites: [...state.favorites],
    //     loading: false
    //   };

    // case REMOVE_FAVORITE:
    //   return {
    //     ...state,
    //     favorites: state.favorites.filter((post) => {
    //       return post._id !== action._id;
    //     })
    //   };

    case LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    dates: [],
    currentDates: {
      name: '',
      activity: '',
      location: '',
      createdAt: '',
      time: '',
      partnerName: '',
      meta: {
        comments: '',
      },
    },
    // favorites: [],
		loading: false,
		editing: false
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
