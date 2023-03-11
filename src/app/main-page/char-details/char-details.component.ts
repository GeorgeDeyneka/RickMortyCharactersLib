import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseHttpService } from 'src/app/shared/services/base-http.service';

@Component({
  selector: 'app-char-details',
  templateUrl: './char-details.component.html',
  styleUrls: ['./char-details.component.scss'],
})
export class CharDetailsComponent implements OnInit {
  public charItem: any;

  constructor(
    private baseHttpService: BaseHttpService,
    private actRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.actRouter.snapshot.paramMap.get('id');

    this.baseHttpService.getById(id!).subscribe((item) => {
      this.charItem = item;
    });
  }
}
