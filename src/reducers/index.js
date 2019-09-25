const initialState = {
    onsave: false
  };
  
  const forbiden = (state = initialState, action) => {
    if (action.type === "FORBIDEN") {
      return {
        state,
        ...action
      }
    } else {
      return state;
    }
  };
  
  export default forbiden;
  