import { Component, OnInit } from '@angular/core';
import { DataTableResource } from 'angular5-data-table';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {
  job_no = '';

  listitems = [{
    cnee: 'Test',
    line: 'Test1',
    origin: 'Test1',
    job_no: 'Test1',
    type: 'Test1',
    contact_no: 'Test1',
    pkgs: 'Test1',
    weight: 'Test1',
    vol: '',
    hbl: '',
    etd: '',
    nhs: '',
    shipper: '',
    mb_l: '',
    agent: '',
    igm: '',
    zoho_freight: '',
    zoho_line: '',
    ohbl: '',
    payment: ''
},{
  cnee: 'Test',
  line: 'Test1',
  origin: 'Test1',
  job_no: 'Test1',
  type: 'Test1',
  contact_no: 'Test1',
  pkgs: 'Test1',
  weight: 'Test1',
  vol: '',
  hbl: '',
  etd: '',
  nhs: '',
  shipper: '',
  mb_l: '',
  agent: '',
  igm: '',
  zoho_freight: '',
  zoho_line: '',
  ohbl: '',
  payment: ''
},{
  cnee: 'Test',
  line: 'Test1',
  origin: 'Test1',
  job_no: 'Test1',
  type: 'Test1',
  contact_no: 'Test1',
  pkgs: 'Test1',
  weight: 'Test1',
  vol: '',
  hbl: '',
  etd: '',
  nhs: '',
  shipper: '',
  mb_l: '',
  agent: '',
  igm: '',
  zoho_freight: '',
  zoho_line: '',
  ohbl: '',
  payment: ''
},{
  cnee: 'Test',
  line: 'Test1',
  origin: 'Test1',
  job_no: 'Test1',
  type: 'Test1',
  contact_no: 'Test1',
  pkgs: 'Test1',
  weight: 'Test1',
  vol: '',
  hbl: '',
  etd: '',
  nhs: '',
  shipper: '',
  mb_l: '',
  agent: '',
  igm: '',
  zoho_freight: '',
  zoho_line: '',
  ohbl: '',
  payment: ''
},{
  cnee: 'Test',
  line: 'Test1',
  origin: 'Test1',
  job_no: 'Test1',
  type: 'Test1',
  contact_no: 'Test1',
  pkgs: 'Test1',
  weight: 'Test1',
  vol: '',
  hbl: '',
  etd: '',
  nhs: '',
  shipper: '',
  mb_l: '',
  agent: '',
  igm: '',
  zoho_freight: '',
  zoho_line: '',
  ohbl: '',
  payment: ''
},{
  cnee: 'Test',
  line: 'Test1',
  origin: 'Test1',
  job_no: 'Test1',
  type: 'Test1',
  contact_no: 'Test1',
  pkgs: 'Test1',
  weight: 'Test1',
  vol: '',
  hbl: '',
  etd: '',
  nhs: '',
  shipper: '',
  mb_l: '',
  agent: '',
  igm: '',
  zoho_freight: '',
  zoho_line: '',
  ohbl: '',
  payment: ''
},{
  cnee: 'Test',
  line: 'Test1',
  origin: 'Test1',
  job_no: 'Test1',
  type: 'Test1',
  contact_no: 'Test1',
  pkgs: 'Test1',
  weight: 'Test1',
  vol: '',
  hbl: '',
  etd: '',
  nhs: '',
  shipper: '',
  mb_l: '',
  agent: '',
  igm: '',
  zoho_freight: '',
  zoho_line: '',
  ohbl: '',
  payment: ''
},{
  cnee: 'Test',
  line: 'Test1',
  origin: 'Test1',
  job_no: 'Test1',
  type: 'Test1',
  contact_no: 'Test1',
  pkgs: 'Test1',
  weight: 'Test1',
  vol: '',
  hbl: '',
  etd: '',
  nhs: '',
  shipper: '',
  mb_l: '',
  agent: '',
  igm: '',
  zoho_freight: '',
  zoho_line: '',
  ohbl: '',
  payment: ''
},{
  cnee: 'Test',
  line: 'Test1',
  origin: 'Test1',
  job_no: 'Test1',
  type: 'Test1',
  contact_no: 'Test1',
  pkgs: 'Test1',
  weight: 'Test1',
  vol: '',
  hbl: '',
  etd: '',
  nhs: '',
  shipper: '',
  mb_l: '',
  agent: '',
  igm: '',
  zoho_freight: '',
  zoho_line: '',
  ohbl: '',
  payment: ''
},{
  cnee: 'Test',
  line: 'Test1',
  origin: 'Test1',
  job_no: 'Test1',
  type: 'Test1',
  contact_no: 'Test1',
  pkgs: 'Test1',
  weight: 'Test1',
  vol: '',
  hbl: '',
  etd: '',
  nhs: '',
  shipper: '',
  mb_l: '',
  agent: '',
  igm: '',
  zoho_freight: '',
  zoho_line: '',
  ohbl: '',
  payment: ''
},{
  cnee: 'Test',
  line: 'Test1',
  origin: 'Test1',
  job_no: 'Test1',
  type: 'Test1',
  contact_no: 'Test1',
  pkgs: 'Test1',
  weight: 'Test1',
  vol: '',
  hbl: '',
  etd: '',
  nhs: '',
  shipper: '',
  mb_l: '',
  agent: '',
  igm: '',
  zoho_freight: '',
  zoho_line: '',
  ohbl: '',
  payment: ''
},{
  cnee: 'Test',
  line: 'Test1',
  origin: 'Test1',
  job_no: 'Test1',
  type: 'Test1',
  contact_no: 'Test1',
  pkgs: 'Test1',
  weight: 'Test1',
  vol: '',
  hbl: '',
  etd: '',
  nhs: '',
  shipper: '',
  mb_l: '',
  agent: '',
  igm: '',
  zoho_freight: '',
  zoho_line: '',
  ohbl: '',
  payment: ''
},{
  cnee: 'Test',
  line: 'Test1',
  origin: 'Test1',
  job_no: 'Test1',
  type: 'Test1',
  contact_no: 'Test1',
  pkgs: 'Test1',
  weight: 'Test1',
  vol: '',
  hbl: '',
  etd: '',
  nhs: '',
  shipper: '',
  mb_l: '',
  agent: '',
  igm: '',
  zoho_freight: '',
  zoho_line: '',
  ohbl: '',
  payment: ''
},{
  cnee: 'Test',
  line: 'Test1',
  origin: 'Test1',
  job_no: 'Test1',
  type: 'Test1',
  contact_no: 'Test1',
  pkgs: 'Test1',
  weight: 'Test1',
  vol: '',
  hbl: '',
  etd: '',
  nhs: '',
  shipper: '',
  mb_l: '',
  agent: '',
  igm: '',
  zoho_freight: '',
  zoho_line: '',
  ohbl: '',
  payment: ''
},{
  cnee: 'Test',
  line: 'Test1',
  origin: 'Test1',
  job_no: 'Test1',
  type: 'Test1',
  contact_no: 'Test1',
  pkgs: 'Test1',
  weight: 'Test1',
  vol: '',
  hbl: '',
  etd: '',
  nhs: '',
  shipper: '',
  mb_l: '',
  agent: '',
  igm: '',
  zoho_freight: '',
  zoho_line: '',
  ohbl: '',
  payment: ''
},{
  cnee: 'Test',
  line: 'Test1',
  origin: 'Test1',
  job_no: 'Test1',
  type: 'Test1',
  contact_no: 'Test1',
  pkgs: 'Test1',
  weight: 'Test1',
  vol: '',
  hbl: '',
  etd: '',
  nhs: '',
  shipper: '',
  mb_l: '',
  agent: '',
  igm: '',
  zoho_freight: '',
  zoho_line: '',
  ohbl: '',
  payment: ''
},{
  cnee: 'Test',
  line: 'Test1',
  origin: 'Test1',
  job_no: 'Test1',
  type: 'Test1',
  contact_no: 'Test1',
  pkgs: 'Test1',
  weight: 'Test1',
  vol: '',
  hbl: '',
  etd: '',
  nhs: '',
  shipper: '',
  mb_l: '',
  agent: '',
  igm: '',
  zoho_freight: '',
  zoho_line: '',
  ohbl: '',
  payment: ''
}];

itemResource = new DataTableResource(this.listitems);
    items = [];
    itemCount = 0;
    limits = [10, 20, 40, 80];

    constructor() {
      this.rowColors = this.rowColors.bind(this);
      this.itemResource.count().then(count => this.itemCount = count);
    }

    rowColors(item) {
      console.log(item);
        if (item.job_no == this.job_no) {
          return true;
        }else{
          return false;
        }
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

  ngOnInit() {
  }

}
