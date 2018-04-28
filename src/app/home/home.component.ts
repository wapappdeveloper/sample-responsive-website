import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import { InteractService } from '../services/interact.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  urlToFetch: string = 'https://api.myjson.com/bins/d0g6v';
  loading: boolean = true;
  data: dataModal = {
    speed: '',
    integrity: '',
    work: ''
  }
  constructor(private commonService: CommonService, private interactService: InteractService) { }

  ngOnInit() {
    if (this.interactService.data) {
      this.data = this.interactService.data;
      this.loading = false;
    } else {
      this.commonService.loadJSON(this.urlToFetch, (res) => {
        this.data = res;
        this.interactService.data = this.data;
        this.loading = false;
      }, (err) => {
        console.log(err);
        this.commonService.loadJSON('assets/data/data.json', (res) => {
          this.data = res;
          this.interactService.data = this.data;
          this.loading = false;
        });
      });
    }
  }
}

interface dataModal {
  speed: string,
  integrity: string,
  work: string
}
