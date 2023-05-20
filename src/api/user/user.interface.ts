export interface IUserResponse {
  accessToken: string,
  refreshToken: string,
  email: string;
   
}

export interface IUserRequest {
  email: string;
  password: string;
}
