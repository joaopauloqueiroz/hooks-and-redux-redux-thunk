const initialState = {
    onsave: false
  };
  
  const forbiden = (state = initialState, data) => {
    if (data.action === "FORBIDEN") {
      return (window.location.href = "/main");
    } else {
      return state;
    }
  };
  
  export default forbiden;
  