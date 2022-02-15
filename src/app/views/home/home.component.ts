import { Component, ViewChild } from '@angular/core';
import { HomeService } from './home.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  displayedColumns: string[] = ['name', 'business', 'valuation', 'active', 'acao'];
  dataSource: MatTableDataSource<IBusiness>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  public showView: boolean = false;

  constructor(private homeService: HomeService,) {  
    let res = this.homeService.mockGetEmpresas();
    this.dataSource = new MatTableDataSource(res);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.showView = true; 
    /* //API ESTÁ FORA DO AR 
      this.homeService.getEmpresas().subscribe((res) => {
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort; 
    })   */
  } 
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}

export interface IBusiness {
  id: number;
  name: string;
  business: string;
  valuation: number;
  active: boolean;
  cep: string;
  cnpj: number;
}
