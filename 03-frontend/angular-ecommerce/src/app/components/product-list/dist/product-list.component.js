"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductListComponent = void 0;
var core_1 = require("@angular/core");
var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(productService, route) {
        this.productService = productService;
        this.route = route;
    }
    //similar to PostConstruct
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function () {
            _this.listProducts();
        });
    };
    ProductListComponent.prototype.listProducts = function () {
        var _this = this;
        //check if "id" parameter is available 
        var hasCategoryId = this.route.snapshot.paramMap.has('id');
        if (hasCategoryId) {
            //get the id param string. convert string to a number using the + symbol
            this.currentCategoryId = +this.route.snapshot.paramMap.get('id');
        }
        else {
            //default category id is 1 if not available
            this.currentCategoryId = 1;
        }
        //now get the products for the given category id
        this.productService.getProductList(this.currentCategoryId).subscribe(function (data) {
            _this.products = data;
        });
    };
    ProductListComponent = __decorate([
        core_1.Component({
            selector: 'app-product-list',
            templateUrl: './product-list-grid.component.html',
            styleUrls: ['./product-list.component.css']
        })
    ], ProductListComponent);
    return ProductListComponent;
}());
exports.ProductListComponent = ProductListComponent;
