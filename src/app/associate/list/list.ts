import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { Associate } from '../../_shared/associate';
import { associtatModel } from '../../../model/associate'; // نام درست
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list',
  imports: [MatCardModule, MatButtonModule, MatTableModule, MatDialogModule],
  templateUrl: './list.html',
  styleUrls: ['./list.css']
})
export class List implements OnInit, OnDestroy {
  _list: associtatModel[] = [];
  subs: Subscription = new Subscription();
  displayHeaders=['id', 'name' , 'address']
  datasource!: MatTableDataSource<associtatModel>    
  constructor(private service: Associate) {}

  GetAllList() {
    this.subs = this.service.Getall().subscribe(item => {
      if (item) {
        this._list = item;
        this.datasource=new MatTableDataSource(this._list);
      }
    });
  }

  ngOnInit(): void {
    this.GetAllList();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
