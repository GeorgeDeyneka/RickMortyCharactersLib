import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICharacter } from 'src/app/models/interfaces/character.interface';
import { BaseHttpService } from 'src/app/shared/services/base-http.service';

@Component({
  selector: 'app-char-details',
  templateUrl: './char-details.component.html',
  styleUrls: ['./char-details.component.scss'],
})
export class CharDetailsComponent implements OnInit {
  protected charItem: ICharacter;

  constructor(
    private baseHttpService: BaseHttpService,
    private actRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.actRouter.snapshot.paramMap.get('id');

    this.baseHttpService.getById<ICharacter>(id!).subscribe((item) => {
      this.charItem = item;
    });
  }
}
