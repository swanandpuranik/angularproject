"use strict";
var Menu = /** @class */ (function () {
    function Menu(_menuId, _itemName, _price, _desc, _type) {
        //Atrributes
        this.menuId = 0;
        this.itemName = '';
        this.price = 0;
        this.description = '';
        this.menuType = '';
        this.menuId = _menuId;
        this.itemName = _itemName;
        this.price = _price;
        this.description = _desc;
        this.menuType = _type;
    }
    //Getter and Setter
    Menu.prototype.setMenuId = function (_menuId) {
        this.menuId = _menuId;
    };
    Menu.prototype.getMenuId = function () {
        return this.menuId;
    };
    Menu.prototype.setItemName = function (_itemName) {
        this.itemName = _itemName;
    };
    Menu.prototype.getItemName = function () {
        return this.itemName;
    };
    Menu.prototype.setPrice = function (_price) {
        this.price = _price;
    };
    Menu.prototype.getPrice = function () {
        return this.price;
    };
    Menu.prototype.setDescription = function (_description) {
        this.description = _description;
    };
    Menu.prototype.getDescription = function () {
        return this.description;
    };
    Menu.prototype.setMenuType = function (_menuType) {
        this.menuType = _menuType;
    };
    Menu.prototype.getMenuType = function () {
        return this.menuType;
    };
    return Menu;
}());
var AddMenuItem = /** @class */ (function () {
    function AddMenuItem() {
        this.menuId = 0;
        this.itemName = '';
        this.price = 0;
        this.description = '';
        this.menuType = '';
    }
    AddMenuItem.prototype.checkTypeAndAddFunction = function () {
        var iName = prompt('Enter Item Name');
        var iPrice = prompt('Enter Item Price');
        var iDesc = prompt('Enter Item Description');
        var iMenuType = prompt('Enter Menu Type');
        console.log("-------Initialising Using Constructor-----------------");
        var obj = new Menu(this.menuId, String(iName), Number(iPrice), String(iDesc), String(iMenuType));
        console.log;
        var iMenuId = this.menuId++;
        obj.setMenuId(Number(iMenuId));
        obj.setItemName(String(iName));
        obj.setPrice(Number(iPrice));
        obj.setDescription(String(iDesc));
        obj.setMenuType(String(iMenuType));
        var mainCourse = [];
        var deserts = [];
        if (String(iMenuType) == 'MainCourse') {
            mainCourse.push(String(iName));
        }
        else if (String(iMenuType) == 'Deserts') {
            deserts.push(String(iName));
        }
        console.log(mainCourse);
        console.log(deserts);
    };
    return AddMenuItem;
}());
var obj2 = new AddMenuItem();
obj2.checkTypeAndAddFunction();
//# sourceMappingURL=Menu.js.map