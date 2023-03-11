import { Component, OnInit } from '@angular/core';
import { BaseHttpService } from 'src/app/shared/services/base-http.service';

interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: object;
  location: object;
  image: string;
  episode: Array<any>;
  url: string;
  created: string;
}

@Component({
  selector: 'app-char-list',
  templateUrl: './char-list.component.html',
  styleUrls: ['./char-list.component.scss'],
})
export class CharListComponent implements OnInit {
  constructor(private baseHttpService: BaseHttpService) {}

  public data: Array<ICharacter> = [];

  ngOnInit(): void {
    this.baseHttpService.getList().subscribe((data: any) => {
      this.data = data.results;
      console.log(this.data);
    });
  }
}
