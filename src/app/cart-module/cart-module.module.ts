import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CartComponent} from './cart/cart.component';
import {SharedModuleModule} from '../shared-module/shared-module.module';

@NgModule({
  declarations: [CartComponent],
  imports: [CommonModule, SharedModuleModule],
  exports: [CartComponent]
})
export class CartModuleModule { }
