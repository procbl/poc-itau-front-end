import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDatepickerModule } from '@angular/material/datepicker';
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
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { NgxCurrencyModule } from 'ngx-currency';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { DateAdapter, MatNativeDateModule, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';


// Depending on whether rollup is used, moment needs to be imported differently.
// Since Moment.js doesn't have a default export, we normally need to import using the `* as`
// syntax. However, rollup creates a synthetic default module and we thus need to import it using
// the `default as` syntax.
import * as _moment from 'moment';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
// tslint:disable-next-line:no-duplicate-imports

registerLocaleData(ptBr);

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

const moment = _moment;

// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/
export const MY_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
  },
};

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
    FormsModule,
    NgxMaskModule.forRoot(),
    NgxCurrencyModule.forRoot(currencyMaskConfig),
    MatSelectModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule

  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt' }, { provide: MatPaginatorIntl, useValue: getDutchPaginatorIntl() },
    MatDatepickerModule,
    MatNativeDateModule,
  {
    provide: DateAdapter,
    useClass: MomentDateAdapter,
    deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
  },

  { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
