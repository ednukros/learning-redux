export const initialState = {
    comments: [],
    loading: false,
    errors: false,
  };
  
  export default function commentsReducer(state = initialState, action) {
    switch (action.type) {
      default:
        return state;
    }
  }