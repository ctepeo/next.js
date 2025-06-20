export interface TAuthCredentials {
  username: {
    label: string;
    type: 'text' | 'email' | 'password';
  };
  password: {
    label: string;
    type: 'password';
  };
}
