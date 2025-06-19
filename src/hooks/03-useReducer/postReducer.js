export const INITIAL_STATE = { loading: false, post: {}, error: false };

export const postReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_START':
      return structuredClone({ loading: true, error: false, post: {} });
    case 'FETCH_SUCSSES':
      return structuredClone({
        ...state,
        loading: false,
        post: action.payload,
      });
    case 'FETCH_ERROR':
      return structuredClone({ ...state, loading: false, error: true });

    default:
      return state;
  }
};
