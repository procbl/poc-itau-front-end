import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './views/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator'
import { DetailComponent } from './views/detail/detail.component';
import { HttpClientModule } from '@angular/common/http'; 
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule, IConfig  } from 'ngx-mask';
import { NgxCurrencyModule } from 'ngx-currency'; 
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

export const currencyMaskConfig = {
  align: 'left',
  allowNegative: false,
  allowZero: true,
  decimal: ',',
  precision: 2,
  prefix: '',
  suffix: '',
  thousands: '.',
  nullable: true,
};

export function getDutchPaginatorIntl() {
  const paginatorIntl = new MatPaginatorIntl();

  paginatorIntl.itemsPerPageLabel = 'Itens por Página:';
  paginatorIntl.nextPageLabel = 'Próxima Página';
  paginatorIntl.lastPageLabel = 'Última Página';
  paginatorIntl.firstPageLabel = 'Primeira Página';
  paginatorIntl.previousPageLabel = 'Página Anterior';
  paginatorIntl.getRangeLabel = (page: number, pageSize: number, length: number) => {
    if (length == 0 || pageSize == 0) { return `0 of ${length}`; }

    length = Math.max(length, 0);

    const startIndex = page * pageSize;
    const endIndex = startIndex < length ?
        Math.min(startIndex + pageSize, length) :
        startIndex + pageSize;

    return `${startIndex + 1} de ${endIndex} de um total de ${length} registros`;
  }


  return paginatorIntl;
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    MatSortModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatTableModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule ,
    NgxMaskModule.forRoot() ,
    NgxCurrencyModule.forRoot(currencyMaskConfig),
    MatSelectModule,
    MatButtonModule
  ],
  providers: [{ provide: MatPaginatorIntl, useValue: getDutchPaginatorIntl()},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
