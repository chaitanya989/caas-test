import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export interface License {
  type: string;
  name: string;
  description: string;
  logo: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public siteUrl: string = environment.url;
  public licenseList!: License[];
  public selectedLicense!: License;

  constructor(
    private fb: FormBuilder, private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.getListData();
  }

  public getListData(): void {
    const apiUrl: string = this.siteUrl + '/assets/mock-data/license-list.json';
    this.http.get(apiUrl).subscribe((resp: any) => {
      this.licenseList = resp.data;
    });
  }

  public moreInfo(item: License) {
    this.selectedLicense = item;
  }
}
