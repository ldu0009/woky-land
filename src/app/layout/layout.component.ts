import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { SideBarService } from '../services/side-bar/side-bar.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  public onSideBar:boolean = false

  private _unsubscribeAll:Subject<any>=new Subject<any>()

  constructor(private _sideBarService:SideBarService) { }

  ngOnInit(): void {
    this.getSideBar()
  }

  // --------------------------------------------------------------------------------
  // Public Method
  // --------------------------------------------------------------------------------

  public getSideBar():void{
    this._sideBarService.toggleSideBar$().pipe(takeUntil(this._unsubscribeAll)).subscribe((toggleSideBar:boolean)=>{
      this.onSideBar = toggleSideBar
    })
  }

  public toggleSideBar(value:boolean):void{
    this._sideBarService.toggleSideBar=value
  }

}
