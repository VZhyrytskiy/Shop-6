import { Injectable } from '@angular/core';
import {Category} from '../models/enums.model';
import {ProductModel} from '../models/product.model';

@Injectable()
export class ProductsServiceService {

  constructor() { }

  getProducts(): ProductModel[] {
    return [{
      name: 'Cola',
      description: 'Best beverage',
      price: 10,
      category: Category.drink,
      isAvailable: true,
    },
      {
        name: 'Sandwich',
        description: 'Best food',
        price: 15,
        category: Category.food,
        isAvailable: true,
      }];
  }
}