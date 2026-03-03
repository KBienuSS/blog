export const getAllCategories = (state => state.category);  

const categoryReducer = (statePart = [], action) => {
  switch (action.type) {
    default:
      return statePart;
  };
};

export default categoryReducer;