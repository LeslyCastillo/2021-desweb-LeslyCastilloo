import { Component, OnInit } from '@angular/core'

import { Item } from './item'
import { ItemService } from './item.service'

@Component({
  selector: 'ns-items',
  templateUrl: './items.component.html',
})
export class ItemsComponent implements OnInit {
  items: any = [];

  constructor(private itemService: ItemService) {}

  secureLink(link: any){
   return link.replace('http://','https://')
  }


alertMessage(title: string, message: string, okButtonText: string){
  let options = {
    title: title,
    message: message,
    okButtonText: okButtonText
  };
  
  alert(options);
}

  ngOnInit(): void {

    this.itemService.getItems().subscribe(response => {
      this.items = response['photos'];
    }, err => console.log(err));
  }
}
