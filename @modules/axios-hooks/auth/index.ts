import {
  auth,
  AuthData,
  authStaff,
  CustomerAuthData,
  LoginData,
  RestoreDataForSendEmail,
  AcceptData,
  SignupData,
  SignupResultData,
  StaffAuthData,
  ValidationErrors,
  NewPasswordData,
} from "@modules/api";

import { useAxiosRequest } from "@modules/axios-request";

export function useLogin() {
  const {
    request: login,
    error: errorOflogin,
    data: loginData,
    setData: setLoginData,
    loading,
  } = useAxiosRequest<LoginData, CustomerAuthData, ValidationErrors<LoginData>>(
    {
      initial: auth.initialLoginData(),
      config: auth.login,
      key: 'fitness_server',
    }
  );
  return { loginData, errorOflogin, login, setLoginData, loading };
}

export function useSignup() {
  const {
    error: signupError,
    loading: isLoadingSignup,
    request: signup,
    setData: setSignupData,
    data: signupData,
    response: signupResponse,
  } = useAxiosRequest<
    SignupData,
    SignupResultData,
    ValidationErrors<SignupData>
  >({
    initial: auth.initialSignupData(),
    config: auth.signup,
    key: 'fitness_server',
  });
  return {
    isLoadingSignup,
    signupError,
    signup,
    setSignupData,
    signupData,
    signupResponse,
  };
}

export function useSignupAccept() {
  const {
    data: signupAcceptData,
    loading: isLoadingSignupAcceptData,
    request: singupAccept,
    setData: setSingupAcceptData,
    error: errorSignupAcceptData,
    response: reponseSignupAcceptData,
  } = useAxiosRequest<AcceptData, AuthData, ValidationErrors<AcceptData>>({
    initial: auth.initialSignupAcceptData(),
    config: auth.signupAccept,
    key: 'fitness_server',
  });
  return {
    signupAcceptData,
    isLoadingSignupAcceptData,
    singupAccept,
    setSingupAcceptData,
    errorSignupAcceptData,
    reponseSignupAcceptData,
  };
}

export function useSendEmailForRestore() {
  const {
    error: restoreEmailError,
    loading: isLoadingRestoreEmail,
    request: sendEmailForRestore,
    setData: setRestoreEmailData,
    data: restoreEmailData,
    response: restoreEmailResponse,
  } = useAxiosRequest<
    RestoreDataForSendEmail,
    null,
    ValidationErrors<RestoreDataForSendEmail>
  >({
    initial: auth.initialRestoreDataForSendEmail(),
    config: auth.sendEmailForRestore,
    key: 'fitness_server',
  });
  return {
    isLoadingRestoreEmail,
    restoreEmailError,
    sendEmailForRestore,
    setRestoreEmailData,
    restoreEmailData,
    restoreEmailResponse,
  };
}

export function useSetNewPassword() {
  const {
    error: newPasswordError,
    loading: isLoadingSetNewPassword,
    request: sendNewPassword,
    setData: setNewPasswordData,
    data: newPasswordData,
    response: newPassowrdResponse,
  } = useAxiosRequest<NewPasswordData, null, ValidationErrors<NewPasswordData>>(
    {
      initial: auth.initialNewPasswordData(),
      config: auth.setNewPassword,
      key: 'fitness_server',
    }
  );
  return {
    setNewPasswordData,
    isLoadingSetNewPassword,
    sendNewPassword,
    newPasswordError,
    newPassowrdResponse,
    newPasswordData,
  };
}

export function useStaffLogin() {
  const {
    request: login,
    error: errorOflogin,
    data: loginData,
    setData: setLoginData,
  } = useAxiosRequest<LoginData, StaffAuthData, ValidationErrors<LoginData>>({
    initial: auth.initialLoginData(),
    config: authStaff.login,
    key: 'fitness_server',
  });
  return { loginData, errorOflogin, login, setLoginData };
}

export function useStaffLogout() {
  const { request: logout } = useAxiosRequest<
    LoginData,
    StaffAuthData,
    ValidationErrors<LoginData>
  >({
    initial: auth.initialLoginData(),
    config: authStaff.logout,
    key: 'fitness_server',
  });
  return { logout };
}
