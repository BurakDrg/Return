import { Component, OnInit, ViewChild } from "@angular/core";
import { Market } from "../market";
import { LOCATIONS } from "../locations";
import { Options } from "selenium-webdriver/ie";
import { Product } from "../product";
import { pipeBind1 } from "@angular/core/src/render3";
import { ngTableModule } from "ng-table";
import { NgTableParams } from "ng-table";
import { MatPaginator, MatTableDataSource, MatSort } from "@angular/material";
import { SelectionModel } from "@angular/cdk/collections";
import { calcPossibleSecurityContexts } from "@angular/compiler/src/template_parser/binding_parser";
import { cartProduct } from '../cartProduct';

@Component({
  selector: "app-deneme",
  templateUrl: "./deneme.component.html",
  styleUrls: ["./deneme.component.css"]
})
export class DenemeComponent implements OnInit {
  Marketler = LOCATIONS;
  nearestMarket: Market = new Market();
  selectedQuantity:1;
  selectedMarket: Market;

  userPosition: Position;
  lat: number = 0;
  lng: number = 0;

  possibleCheapestPrice: number = 0;

  myCart: Array<Product> = [];

  cartToShow: Array<cartProduct> = [];

  allMarkets: Array<Market> = [];

  myCartTotal: number = 0;

  cheapestMarket: Market;

  productListToShow: Product[] = [];
  dataSource = new MatTableDataSource<Product>(this.productListToShow);
  displayedColumns: string[] = [
    "image",
    "name",
    "price",
    "market",
    "quantity",
    "select"
  ];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  selection = new SelectionModel<Product>(true, []);

  p1: Product = {
    name: "Torku süt",
    sku: 5,
    price: 123,
    image:
      "http://torku.com.tr/Upload/Contents/d56502a3-e225-4dba-a4e8-ef522c51860eciftci-sutu-list.png",
    market: null
  };

  migrosArray: Array<Product> = [this.p1];
  

  constructor() {}

  ngOnInit() {
    this.findMe();

    this.populateMarkets();
    this.getOverallProducts();

    this.dataSource.sort = this.sort;

    this.dataSource.paginator = this.paginator;

  }

  onSelect(market: Market): void {
    this.selectedMarket = market;
  }

  getOverallProducts() {
    this.allMarkets.forEach(element => {
      element.allProducts.forEach(product => {
        if (this.productListToShow.includes(product)) {
        } else {
          if (this.includeProduct(product)) {
            console.log("Includes");

            let temp: Product = this.productListToShow.splice[
              this.productListToShow.length - 1
            ];

            if (product.price < temp.price) {
              this.productListToShow.push(product);
            } else {
              this.productListToShow.push(temp);
            }
          } else {
            this.productListToShow.push(product);
          }
        }
      });
    });
  }

  includeProduct(search: Product): boolean {
    this.productListToShow.forEach(element => {
      if (search.name == element.name) {
        return true;
      }
    });

    return false;
  }

  updateCartToShow(){
    for(var i = 0 ; i < this.myCart.length ; i++){
      var flag = false;
      var ind = -1;
      for(var j = 0 ; j< this.cartToShow.length ; j++){
        if(this.cartToShow[j].product.name == this.myCart[i].name){
          flag = true;
          ind = j;
          break;
        }
      }
      if(flag && ind != -1){
        if(this.selectedQuantity == null){
          this.selectedQuantity = 1;
        }
        this.cartToShow[ind].quantity = Number(this.cartToShow[ind].quantity) + Number(this.selectedQuantity);
        break;        
      }
      else{
        this.cartToShow[i] =new cartProduct();
        this.cartToShow[i].product = this.myCart[i];
        this.cartToShow[i].quantity = 1;
      }
      flag = false;
      ind = -1;


    }


    console.log("LENGTH:" + this.cartToShow.length);
  }

  getMarketProduct(market: Market) {
    //QUERY Market from database.. THIS IS TEST DATA
  }
  populateMarkets() {
    let ary: Array<Product> = [];
    let ary2: Array<Product> = [];
    let ary3: Array<Product> = [];
    let ary4: Array<Product> = [];

    let test: Product = {
      name: "Sosis",
      sku: 2,
      price: 22,
      image:
        "http://www.torku.com.tr/Upload/Contents/4358359f-389f-4847-9db9-07feb713000c606830_kokteyl-sosis-220g.png",
      market: "Migros"
    };
    let test2: Product = {
      name: "Ucgen Peynir",
      sku: 5,
      price: 123,
      image:
        "https://www.sutas.com.tr/uploads/products/thumb/97867769b801aacbf35ad4189e6c128b_thumb.jpg",
      market: "Cagdas"
    };
    let test3: Product = {
      name: "Patlıcan",
      sku: 6,
      price: 5512,
      image:
        "https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/28303000/patlican-kemer-kg-2ac52c.jpg",
      market: "Kipa"
    };
    let test4: Product = {
      name: "Ucgen Peynir",
      sku: 5,
      price: 50,
      image:
        "https://www.sutas.com.tr/uploads/products/thumb/97867769b801aacbf35ad4189e6c128b_thumb.jpg",
      market: "Ucuz Market"
    };
    let test5: Product = {
      name: "Pastırma",
      sku: 5,
      price: 75,
      image: "https://www.sahin724.com/products/sahin-antrikot-pastirma.jpg",
      market: "Ucuz Market"
    };

    ary.push(test);
    ary2.push(test2);
    ary3.push(test3);
    ary4.push(test4, test5);

    let m1 = { name: "Migros", x: 111, y: 222, z: 333, allProducts: ary };
    let m2 = { name: "Cagdas", x: 444, y: 555, z: 666, allProducts: ary2 };
    let m3 = { name: "Kipa", x: 777, y: 888, z: 999, allProducts: ary3 };
    let m4 = {
      name: "Ucuz Market",
      x: 12355,
      y: 12355,
      z: 123123,
      allProducts: ary4
    };

    this.allMarkets.push(m1, m2, m3, m4);
  }

  setToCheapestMarket() {
    var priceOfMarkets: number[] = [];
    var subTotalPrice = 0;
    var myCartItemCount = this.myCart.length;
    var matchedItemCount = 0;
    var minumumPriceForCart = 0;
    var indexNumberOfCheapestMarket = 0;
    for (var i = 0; i < this.allMarkets.length; i++) {
      // Kartımdaki ürünler için bütün marketlerden fiyat al. 1 tane bile ürün yoksa -1 olsun.

      for (var j = 0; j < this.myCart.length; j++) {
        // Bu markette, sepetimdeki ürünleri ara, varsa  toplam fiyatını cıkar.

        for (var k = 0; k < this.allMarkets[i].allProducts.length; k++) {
          if (this.allMarkets[i].allProducts[k].name == this.myCart[j].name) {
            subTotalPrice += this.allMarkets[i].allProducts[k].price;
            matchedItemCount++;
          }
        }
      }
      if (matchedItemCount == myCartItemCount) {
        // Bu markette, kartımdaki bütün ürünler var ise
        priceOfMarkets.push(subTotalPrice);
      } else {
        priceOfMarkets.push(-1); // Bu markette bütün kartımdaki ürünler yoksa, marketin toplam fiyatına -1 ata.
      }

      matchedItemCount = 0; // Reset Matched Item for next market
      subTotalPrice = 0;
    }

    var tempPriceOfMarkets: number[] = [...priceOfMarkets];
    var sortedPriceOfMarkets: number[] = tempPriceOfMarkets.sort(
      (n1, n2) => n1 - n2
    );

    for (var m = 0; m < sortedPriceOfMarkets.length; m++) {
      // Find Minumum possible price for cart
      if (sortedPriceOfMarkets[m] == -1) {
        continue;
      }
      if (sortedPriceOfMarkets[m] > 0) {
        minumumPriceForCart = sortedPriceOfMarkets[m];
        break;
      }
    }
    if (Math.max.apply(Math, sortedPriceOfMarkets) <= 0) {
      console.error("NO SUCH MARKET EXIST, REMOVING LAST PRODUCT"); // Remove Last Added Product
      this.removeFromCart(this.myCart[this.myCart.length - 1]);
      return;
    }

    indexNumberOfCheapestMarket = priceOfMarkets.indexOf(minumumPriceForCart);
    this.cheapestMarket = this.allMarkets[indexNumberOfCheapestMarket];
    this.possibleCheapestPrice = minumumPriceForCart;
    console.log("Prices: " + priceOfMarkets.toString());
    console.log(
      "Cheapest Market:" +
        this.cheapestMarket.name +
        " Price: " +
        minumumPriceForCart
    );
  }

  addMarketToList(market: Market) {
    this.allMarkets.push(market);
  }

  addToCart(newProductToAdd: Product) {
    this.myCart.push(newProductToAdd);
    this.myCartTotal += newProductToAdd.price;
    this.setToCheapestMarket();
    this.updateCartToShow();
    
  }
  removeFromCart(productToRemove: Product) {
    var index = this.myCart.indexOf(productToRemove);
    console.log("Index: " + index);
    this.myCart.splice(index, 1);
    if (this.myCart.length == 0) {
      this.myCartTotal = 0;
      this.possibleCheapestPrice = 0;
      return;
    }
    this.myCartTotal -= productToRemove.price;
    this.setToCheapestMarket();
  }

  findMe() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          this.userPosition = position;
          this.lng = position.coords.longitude;
          this.lat = position.coords.latitude;
          this.nearestMarket = this.findNearestMarket(
            position.coords.latitude,
            position.coords.longitude
          );
        },
        error => {},
        { enableHighAccuracy: true }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  findNearestMarket(lat: number, longi: number): Market {
    let minMarket: Market;
    let minDistance: number = 9999999999; 

    for (let market of LOCATIONS) {
      let distance: number = Math.sqrt(
        (market.x - lat) ** 2 + (market.y - longi) ** 2
      );
      console.log(distance);
      if (distance < minDistance) {
        minDistance = distance;
        minMarket = market;
      }
    }

    return minMarket;
  }
}
