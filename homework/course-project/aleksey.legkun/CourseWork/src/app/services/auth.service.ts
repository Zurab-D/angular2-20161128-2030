import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  public isLoggedIn: boolean = false;
  public redirectUrl: string;
  
  constructor() { }

}
