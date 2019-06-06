export default function courseReducer(state = { course: [] }, action) {
  switch (action.type) {
    case "CREATE_COURSE":
      return { ...state, course: action.course };
    default:
      return state;
  }
}
