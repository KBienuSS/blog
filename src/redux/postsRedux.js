//selectors
export const getAllPosts = (state => state.posts);  

// actions
//const createActionName = actionName => `app/posts/${actionName}`;
//const ADD_POST = createActionName('ADD_POSTS');
 

// action creators
const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    default:
      return statePart;
  };
};

export default postsReducer;