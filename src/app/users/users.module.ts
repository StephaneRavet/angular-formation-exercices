import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsersComponent} from './users.component';
import {SharedModule} from '../shared/shared.module';
import {UserService} from './user.service';
import {NavbarModule} from '../navbar/navbar.module';


@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    SharedModule,
    NavbarModule,
  ],
  exports: [UsersComponent],
})
export class UsersModule {
}
