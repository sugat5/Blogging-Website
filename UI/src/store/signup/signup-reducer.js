import { APILoadingStatus } from "../constants";

const initialSignupState = {
  loadingState: APILoadingStatus.NOT_STARTED,
};
export const SignupReducer = (state = initialSignupState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
