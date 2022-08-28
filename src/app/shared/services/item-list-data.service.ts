import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ItemData } from '../interfaces/item-data';

@Injectable({
  providedIn: 'root'
})
export class ItemListDataService {
  private _listData: ItemData[] = [
    {
      title: "Test Data",
      content: "Populate some content."
    },
    {
      title: "Other Data",
      content: "How does this look?"
    },
  ];
  private listDataBehavior = new BehaviorSubject(this.listData);
  listData$ = this.listDataBehavior.asObservable();
  private previousItemList: ItemData[] = [];

  constructor() {
    const previousNotes = localStorage.getItem("material-notes");
    if(previousNotes){
      const getNotes: ItemData[] = JSON.parse(previousNotes);
      this.listData = getNotes;
    }
   }

  set listData(newData: ItemData[]){
    this._listData = newData;
    this.listDataBehavior.next(this._listData);
    localStorage.setItem("material-notes", JSON.stringify(this._listData));
  }
  get listData(){
    return this._listData;
  }
  addItem(item: ItemData){
    this.listData = [...this._listData, item];
    this.previousItemList.push(item);
  }
  deleteItem(itemTitle: string){
    this.listData = this.listData.filter(item => item.title !== itemTitle); 
  }

}
