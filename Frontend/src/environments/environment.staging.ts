export const environment = {
    production: true,
    showLogSystem:true,
    showLogComponent:true,
    apiTDesk:"http://172.29.4.193:2609/api/v1/",
    apiTHRM:"/hrm",
    urlLogin:"/account/login",
    accountServer: "https://account.live.rke.dev.tmtco.org/api/v1/",
    notifyServer: "https://test.notification.tmtco.dev/api/v1/",
    socketConnection :'wss://tmt-dev.tpos.dev/notify-socket/ws/notify?accessToken=',
    signalRConnection :'https://test.notification-signalr.tmtco.dev/hubs/notify',
    apiServer:{
      changePassword:"/api/v1/user-profile/change-password",
      sendOTPResetPassword:"/api/v1/user-profile/reset-password/send-otpsms",
      verifyOTPResetPassword:"/api/v1/user-profile/reset-password/verify-otpsms",
      resetPassword:"/api/v1/user-profile/reset-password",
      signInPassword:"/api/v1/sign-in/password",
      signInFacebook:"/api/v1/sign-in/facebook",
      signInGoogle:"/api/v1/sign-in/google",
      signInVerifyOtpsms:"app-user/reset-password/verify-otpsms",
      // refreshToken:"/api/v1/sign-in/refresh-token",
      userInit:"/api/v1/user/detail",
      userProfile: "/api/v1/user/profile",
      apiUserRoles:"/api/v1/user/roles",
      apiRole:"/api/v1/identity-role"
    }
  };
  