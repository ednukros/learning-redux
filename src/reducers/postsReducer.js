export const initialState = {
    posts: [],
    errors: false,
    loading: false,
  };
  
  export default function postsReducer(state = initialState, action) {
    switch (action.type) {
      default:
        return state;
    }
  }