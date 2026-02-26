import shortid from "shortid";

//selectors
export const getAllPosts = (state => state.posts);  
export const getPostById = ({ posts }, postId) => posts.find(post => post.id === postId);

// actions
const createActionName = actionName => `app/posts/${actionName}`;
const DELETE_POST = createActionName('DELETE_POST');
const ADD_POST = createActionName('ADD_POST');
const EDIT_POST = createActionName('EDIT_POST');
 

// action creators
export const deletePost = payload => ({type:'app/posts/DELETE_POST', payload});
export const addPost = payload => ({ type: 'app/posts/ADD_POST', payload });
export const editPost = payload => ({ type: 'app/posts/EDIT_POST', payload });
const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    case EDIT_POST:
      return statePart.map(post => (post.id === action.payload.id ? { ...post, ...action.payload } : post));
    case DELETE_POST:
      return statePart.filter(post => post.id !== action.payload);
    case ADD_POST:
      return [...statePart, { id: shortid(), ...action.payload}];
    default:
      return statePart;
  };
};

export default postsReducer;