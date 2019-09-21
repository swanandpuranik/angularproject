class Menu{

    //Atrributes
  menuId:number=0;
  itemName:string = '';
  price:number = 0;
  description:String = '';
  menuType:string = '';

     constructor(_menuId:number,_itemName:string,_price:number,_desc:string,_type:string){
        this.menuId = _menuId
        this.itemName = _itemName
        this.price = _price
        this.description = _desc
        this.menuType = _type
     }


     //Getter and Setter
     setMenuId(_menuId:number){
         this.menuId=_menuId
     }

     getMenuId(){
        return this.menuId;
     }

     setItemName(_itemName:string){
         this.itemName = _itemName
     }

     getItemName(){
        return this.itemName;
     }

     setPrice(_price:number){
         this.price = _price
     }

     getPrice(){
        return this.price;
     }

     setDescription(_description:string){
         this.description = _description
     }

     getDescription(){
         return this.description;
     }

     setMenuType(_menuType:string){
         this.menuType = _menuType
     }

     getMenuType(){
         return this.menuType;
     }

}


class AddMenuItem{
    menuId:number=0;
    itemName:string = '';
    price:number = 0;
    description:String = '';
    menuType:string = '';

    constructor(){

    }

    checkTypeAndAddFunction(){
        let iName = prompt('Enter Item Name');
        let iPrice = prompt('Enter Item Price');
        let iDesc = prompt('Enter Item Description');
        let iMenuType = prompt('Enter Menu Type');

        console.log("-------Initialising Using Constructor-----------------");
        let obj = new Menu(this.menuId,String(iName),Number(iPrice),String(iDesc),String(iMenuType));
        console.log

        let iMenuId = this.menuId++;

        obj.setMenuId(Number(iMenuId));
        obj.setItemName(String(iName));
        obj.setPrice(Number(iPrice));
        obj.setDescription(String(iDesc));
        obj.setMenuType(String(iMenuType));

        var mainCourse: Array<string> = [];
        var deserts: Array<string> = []; 

        if(String(iMenuType) == 'MainCourse'){
            mainCourse.push(String(iName));
        }else if(String(iMenuType) == 'Deserts'){
            deserts.push(String(iName));
        }

        console.log(mainCourse);
        console.log(deserts);

     }
}

var obj2 = new AddMenuItem();
obj2.checkTypeAndAddFunction();