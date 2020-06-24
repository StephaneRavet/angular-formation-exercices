import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FilterPipe} from './filter.pipe';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {Page404Component} from './page404/page404.component';

@NgModule({
  declarations: [FilterPipe, Page404Component],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
  ],
  exports: [FilterPipe, RouterModule]
})
export class SharedModule {
}
