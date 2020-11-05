const initialState = {
  loading: true,
  post: null,
  comments: [],
};

export default function postPageSliceReducer(state = initialState, action) {
  console.log("Payload", action);
  switch (action.type) {
    case "feed/startLoading/PostPage": {
      return {
        ...state,
        loading: true,
      };
    }
    case "feed/PostPage": {
      return {
        loading: false,
        post: action.payload.post,
        comments: [...action.payload.comments.rows],
      };
    }
    default:
      return state;
  }
}
