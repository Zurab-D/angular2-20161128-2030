import { Injectable } from '@angular/core';
import { IResponse } from '../interfaces/response';
import{ Response }  from '@angular/http';
import { Observable }   from 'rxjs/Observable';

@Injectable()
export class ResponseService implements IResponse {

  constructor() { }


 public extractData(res: Response): any {
    if(res.json()!==undefined)
      return res.json();
    return undefined;
  }

  public handleError (error: Response | any): any {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;

    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } 
    else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
