const reducer = (state, payload) => {
  switch (payload.type) {
    case 'SET_CANDIDATES':
      return {
        ...state,
        candidates: payload.candidates,
      };
    case 'SET_COUNTDOWN':
      return {
        ...state,
        countdown: payload.countdown,
      };
    case 'SET_ERROR': return state;
    default: return state;
  }
};

export default reducer;
