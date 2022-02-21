export default class Product {
    constructor(id, category, productName, productPrice, description, isOff, offPersentage, productImage, isAvailable, productImageList) {
        this.id = id;
        this.category = category;
        this.productName = productName;
        this.productPrice = productPrice;
        this.description = description;
        this.isOff = isOff;
        this.offPersentage = offPersentage;
        this.productImage = productImage;
        this.isAvailable = isAvailable;
        this.productImageList = productImageList
    }

}