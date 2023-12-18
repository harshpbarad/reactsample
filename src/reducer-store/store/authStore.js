const initialState = {
  user: null,
};

const authStore = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "LOGIN_SUCCESS":
      return {
        user: payload.data
      };
    case "LOGIN_FAIL":
      return {
        user: {},
      };
    default:
      return null;
  }
};

export default authStore;
