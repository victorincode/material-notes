import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ItemData } from 'src/app/shared/interfaces/item-data';
import { ItemListDataService } from 'src/app/shared/services/item-list-data.service';
import { DeletionConfirmationComponent } from '../deletion-confirmation/deletion-confirmation.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent implements OnInit {

  listData: ItemData[] = [];
  itemDataForm: FormGroup;

  constructor(
    private readonly itemDataService: ItemListDataService,
    private readonly formBuilder: FormBuilder,
    private readonly dialogue: MatDialog,
  ) {
    this.itemDataForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      content: ['', Validators.required]
    });
  }
  get itemTitle() {
    return this.itemDataForm.get("title");
  }
  get itemDescription() {
    return this.itemDataForm.get("content");
  }
  ngOnInit(): void {
    this.itemDataService.listData$.subscribe(data => this.listData = data);
  }
  deleteItem(item: string) {
    this.itemDataService.deleteItem(item);
  }
  displayItemInfo(item: ItemData) {
    this.itemDataForm.setValue(item);
  }
  onSubmit() {
    if (this.itemDataForm.invalid) return;
    this.itemDataService.addItem(this.itemDataForm.value);
  }
  onClearForm(){
    this.itemDataForm.reset();
  }
  onResetAllItems(){
    this.dialogue.open(DeletionConfirmationComponent);
  }
}
