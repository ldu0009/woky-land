import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';

const materialModules = [MatIconModule]

@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ...materialModules
  ],
  exports     : [
    LayoutComponent
]
})
export class LayoutModule { }
