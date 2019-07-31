import { Component, OnInit } from '@angular/core';
import {ParticipareService} from "./participare-service.service";
import {ParticipareSemModel} from "./participaresem.model";


@Component({
  selector: 'app-participare-sem',
  templateUrl: './participare-sem.component.html',
  styleUrls: ['./participare-sem.component.css']
})
export class ParticipareSemComponent implements OnInit {

  participareSem: Array<ParticipareSemModel>;
  selectedParticipareSem: ParticipareSemModel;

  constructor(private participareService: ParticipareService) { }

  ngOnInit():void {
    this.participareService.getParticipareSem()
      .subscribe(participaresem => this.participareSem = participaresem);
  }

  onSelect( participareSem: ParticipareSemModel): void {
    this.selectedParticipareSem = participareSem;
  }

  UpdatePaticipareSem() {

  }

  SavePaticipareSem() {

  }
}
