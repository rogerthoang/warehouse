import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StuckOrdersComponent } from './stuck-orders.component';
import {StuckOrdersResolverService} from "./services/stuck-orders-resolver.service";
import {LoadingModule} from 'ngx-loading';
import {NgxPaginationModule} from 'ngx-pagination';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    LoadingModule,
    NgxPaginationModule,
    FormsModule
  ],
  declarations: [StuckOrdersComponent],
  providers: [StuckOrdersResolverService]
})
export class StuckOrdersModule { }
