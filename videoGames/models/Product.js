export default class Product {
    constructor(id, category, productName, productPrice, description, isOff, offPersentage,year, productImage, isAvailable, productImageList, key) {
        this.id = id;
        this.category = category;
        this.productName = productName;
        this.productPrice = productPrice;
        this.description = description;
        this.isOff = isOff;
        this.offPersentage = offPersentage;
        this.year = year;
        this.productImage = productImage;
        this.isAvailable = isAvailable;
        this.productImageList = productImageList;
        
        this.key = key;
    }

}