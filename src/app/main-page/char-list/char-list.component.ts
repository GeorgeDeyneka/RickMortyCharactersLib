import { Component, OnInit } from '@angular/core';
import { BaseHttpService } from 'src/app/shared/services/base-http.service';

@Component({
  selector: 'app-char-list',
  templateUrl: './char-list.component.html',
  styleUrls: ['./char-list.component.scss'],
})
export class CharListComponent implements OnInit {
  constructor(private baseHttpService: BaseHttpService) { }

  public data: any = []

  ngOnInit(): void {
    this.baseHttpService.getList().subscribe((data) => {
      this.data = data;
      console.log(this.data)
    })
  }
}
