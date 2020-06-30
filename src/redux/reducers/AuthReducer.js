import {
  USER_REGISTER_FAILED,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_START,
  USER_LOGIN_START,
  USER_LOGIN_FAILED,
  USER_LOGIN_SUCCESS,
  USER_EDITPASS_START,
  USER_EDITPASS_FAILED,
  USER_EDITPASS_SUCCESS,  
  USER_EDITCONTACT_START,
  USER_EDITCONTACT_FAILED,
  USER_EDITCONTACT_SUCCESS,  
  USER_LOGOUT,
  SEND_EMAIL_START,
  SEND_EMAIL_SUCCESS,
  VERIFY_START,
  VERIFY_SUCCESS,
  VERIFY_FAILED,
  SEND_EMAIL_PASSWORD_START,
  SEND_EMAIL_PASSWORD_FAILED,
  SEND_EMAIL_PASSWORD_SUCCESS,
  RESET_PASSWORD_START,
  RESET_PASSWORD_FAILED,
  RESET_PASSWORD_SUCCESS,
  TOKEN_EXIST,
  TOKEN_NOT_EXIST,
  USER_SEARCH,
} from "../actions/type";

const INITIAL_STATE = {
  username: "",
  password: "",
  email: "",
  id: 0,
  role: "",
  loading: false,
  isLogin: false,
  errormes: "",
  successmes: "",
  token: "",
  isVerified: 0,
  isRegister: false,
  points: 0,
  // Register Validation
  isConfirmTrue: true,
  isUsername: true,
  submitClicked: false,
  isEmail: true,
  // Send Email Verification
  isEmailSent: false,
  // Verify
  isVerifySuccess: false,
  // Send Email Password
  isEmailPasswordSent: false,
  // Reset Password
  isResetSuccess: false,
  isResetLinkExpired: false,
  // Check Existing Token
  isTokenExist: false,
  // User Search
  search:'',
  isPassSame:false,
  errormes2:''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_REGISTER_START:
      return {
        ...state,
        loading: true,
        errormes: "",
        submitClicked: false,
        isConfirmTrue: true,
      };
    case USER_REGISTER_SUCCESS:
      return { ...state, loading: false, isRegister: true, ...action.payload };
    case USER_REGISTER_FAILED:
      return {
        ...state,
        loading: false,
        ...action.payload,
        submitClicked: true,
      };
    case USER_LOGIN_START:
      return { ...state, loading: true };
    case USER_LOGIN_SUCCESS:
      return { ...state, loading: false, ...action.payload, isLogin: true };
    case USER_LOGIN_FAILED:
      return { ...state, loading: false, errormes: action.payload };
      case USER_EDITPASS_START:
      return {
        ...state,
        loading: true,
        errormes: "",
      };
    case USER_EDITPASS_SUCCESS:
      return { ...state, loading: false, ...action.payload };
    case USER_EDITPASS_FAILED:
      return {
        ...state,
        loading: false,
        ...action.payload,
      };
      case USER_EDITCONTACT_START:
      return {
        ...state,
        loading: true,
        errormes2: "",
      };
    case USER_EDITCONTACT_SUCCESS:
      return { ...state, loading: false, ...action.payload };
    case USER_EDITCONTACT_FAILED:
      return {
        ...state,
        loading: false,
        ...action.payload,
      };
    case USER_LOGOUT:
      return { INITIAL_STATE };
    case USER_SEARCH:
      return {...state, search: action.payload}
    case SEND_EMAIL_START:
      return { ...state, loading: true };
    case SEND_EMAIL_SUCCESS:
      return { ...state, loading: false, isEmailSent: true };
    case VERIFY_START:
      return { ...state, loading: true };
    case VERIFY_SUCCESS:
      return {
        ...state,
        loading: false,
        ...action.payload,
        isVerifySuccess: true,
        isLogin: true,
      };
    case VERIFY_FAILED:
      return { ...state, loading: false, isVerifySuccess: false };
    case SEND_EMAIL_PASSWORD_START:
      return { ...state, loading: true, errormes: "" };
    case SEND_EMAIL_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        isEmailPasswordSent: true,
        errormes: "",
      };
    case SEND_EMAIL_PASSWORD_FAILED:
      return { ...state, loading: false, errormes: action.payload };
    case RESET_PASSWORD_START:
      return {
        ...state,
        loading: true,
        submitClicked: false,
        isConfirmTrue: true,
      };
    case RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        ...action.payload,
        isResetSuccess: true,
      };
    case RESET_PASSWORD_FAILED:
      return {
        ...state,
        loading: false,
        ...action.payload,
        submitClicked: true,
      };
    // case TOKEN_EXIST:
    //     return{...state,isTokenExist:true}
    // case TOKEN_NOT_EXIST:
    //     return{...state,isTokenExist:false}
    default:
      return state;
  }
};
