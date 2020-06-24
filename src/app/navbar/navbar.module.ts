import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from './navbar.component';
import {SearchComponent} from './search/search.component';
import {FormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [NavbarComponent, SearchComponent],
  exports: [NavbarComponent, SearchComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
  ]
})
export class NavbarModule {
}
