import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsersComponent} from './users.component';
import {UsersService} from './users.service';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [UsersService],
  exports: [UsersComponent],
})
export class UsersModule {
}
