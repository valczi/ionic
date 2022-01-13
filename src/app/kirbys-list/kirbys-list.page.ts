import { Component, OnInit } from '@angular/core';
import { KirbyService } from 'src/app/kirby.service';

@Component({
  selector: 'app-kirbys-list',
  templateUrl: './kirbys-list.page.html',
  styleUrls: ['./kirbys-list.page.scss'],
})
export class KirbysListPage implements OnInit {

  kirbys!: any;

  constructor(
    private kirbyService: KirbyService
  ) { }

  ngOnInit() {
    this.kirbyService.getAllKirbys().subscribe((data: any ) => {
      this.kirbys = data;
    });
  }

}
