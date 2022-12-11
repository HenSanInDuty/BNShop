// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  showLogSystem:true,
  showLogComponent:true,
  apiTDesk:"http://172.29.4.193:2609/api/v1/",
  apiTHRM:"https://bn-shop.herokuapp",
  apiBNShop:"http://103.178.233.178:8000/api/",
  socketUrl: "wss://demo.piesocket.com/v3/channel_123?api_key=VCXCEuvhGcBDP7XhiJJUDvR1e1D3eiVjgZ9VRiaV&notify_self",
  urlLogin:"/account/login",
  accountServer: "https://account-dev.tpos.dev/api/v1/",
  notifyServer: "https://test.notification.tmtco.dev/api/v1/",
  socketConnection :'wss://tmt-dev.tpos.dev/notify-socket/ws/notify?accessToken=',
  signalRConnection :'https://test.notification-signalr.tmtco.dev/hubs/notify',
  apiServer:{
    changePassword:"/api/v1/user-profile/change-password",
    sendOTPResetPassword:"/api/v1/user-profile/reset-password/send-otpsms",
    verifyOTPResetPassword:"/api/v1/user-profile/reset-password/verify-otpsms",
    resetPassword:"/api/v1/user-profile/reset-password",
    signInPassword:"account/sign-in/",
    signInFacebook:"/api/v1/sign-in/facebook",
    signInGoogle:"/api/v1/sign-in/google",
    signInVerifyOtpsms:"app-user/reset-password/verify-otpsms",
    refreshToken:"account/sign-in/refresh/",
    userInit:"/api/v1/user/detail",
    userProfile: "account/profile/",
    apiUserRoles:"account/profile/",
    apiRole:"/api/v1/identity-role"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
