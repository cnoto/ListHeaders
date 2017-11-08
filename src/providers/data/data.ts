import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class DataProvider {

  lists: any = [
    {
      headerTitle: "Grocery List",
      items: [
        {
          itemName: 'Bananas',
          price: '0.39',
          quantity: '5'
        },
        {
          itemName: 'Mangos',
          price: '2.50',
          quantity: '2'
        },
        {
          itemName: 'Spinach',
          price: '4.79',
          quantity: '1'
        }
      ]
    },
    {
      headerTitle: "Candy",
      items: [
        {
          itemName: 'Chocolate',
          price: '1.99',
          quantity: '1 Bar'
        },
        {
          itemName: 'Starbursts',
          price: '2.50',
          quantity: '1 Bag'
        },
        {
          itemName: 'Sweet Tarts',
          price: '3.99',
          quantity: '1 Bag'
        }
      ]
    }
  ];

  constructor() {
    console.log('Hello DataProvider Provider');
  }

}
