import { Component, OnInit } from '@angular/core';
import { DataTableResource } from 'angular5-data-table';
import { DataService } from '../data.service';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {
  job_no = '';
  listitems = [];
  itemResource = new DataTableResource(this.listitems);
  items = [];
  itemCount = 0;
  limit  = 5;
  limits = [10, 20, 40, 80];

    constructor(private dataService: DataService) {
      this.itemResource.count().then(count => this.itemCount = count);
    }

    reloadItems(params) {
        this.itemResource.query(params).then(items => this.items = items);
    }

    // special properties:
    rowClick(rowEvent) {
        console.log('Clicked: ' + rowEvent.row.item.name);
    }

    rowDoubleClick(rowEvent) {
        alert('Double clicked: ' + rowEvent.row.item.name);
    }

    rowTooltip(item) {
      return item.job_no;
    }

    applyFilter(filterValue: string) {
      filterValue = filterValue.trim();
      filterValue = filterValue.toLowerCase();
      const newItem = [];
      this.listitems.forEach(function(item, index) {
        if (item.job_no.toLowerCase() === filterValue) {
          newItem.push(item);
        }
      });
      this.itemResource = new DataTableResource(newItem);
      this.items = newItem;
      this.itemCount = 0;
      this.limit  = newItem.length;
      this.limits = [newItem.length];
      this.itemResource.count().then(count => this.itemCount = count);
    }

  ngOnInit() {
    this.dataService.getShippings().subscribe(
      data => {
        this.listitems = data;
      },
      err => {
        console.log(err);
      }
    );
  }
}
