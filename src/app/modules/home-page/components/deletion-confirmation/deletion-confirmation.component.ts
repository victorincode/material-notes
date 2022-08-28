import { Component, OnInit } from '@angular/core';
import { ItemListDataService } from 'src/app/shared/services/item-list-data.service';

@Component({
  selector: 'app-deletion-confirmation',
  templateUrl: './deletion-confirmation.component.html',
  styleUrls: ['./deletion-confirmation.component.sass']
})
export class DeletionConfirmationComponent implements OnInit {

  constructor(private readonly listDataService: ItemListDataService) { }

  ngOnInit(): void {
  }

  deleteAllData(){
    this.listDataService.resetListData();
  }

}
