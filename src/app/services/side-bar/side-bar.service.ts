import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SideBarService {

  private _toggleSideBar:BehaviorSubject<boolean> =new BehaviorSubject<boolean>(false)

  constructor() { }

  // ----------------------------------------------------------------------------
  // Public Method
  // ----------------------------------------------------------------------------

  public toggleSideBar$():Observable<boolean>{
    return this._toggleSideBar
  }

  set toggleSideBar(value:boolean){
    this._toggleSideBar.next(value)
  }
}
