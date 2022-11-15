export interface CoreResetPasswordOtpDTO {
  newPassword: string,
  phoneNumber: string,
  token: string,
  otpCode: string
}
