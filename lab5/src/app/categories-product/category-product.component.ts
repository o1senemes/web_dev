import {Component, OnInit} from '@angular/core';
import {Product, productList} from "../products";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-category-product',
  templateUrl: './category-product.component.html',
  styleUrls: ['./category-product.component.css']
})
export class CategoryProductComponent implements OnInit{
  products: Product[] | undefined;
  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("categoryId"));
    this.products = productList.filter(p => p.categoryId === id);
  }


}