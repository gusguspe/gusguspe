const producto1 = {
    nombre: "celular",
    precio: 100000,
    stock: 2
};

producto1.id = "id123";
producto1['foto'] = "https://i.postimg.cc/Jn2C5W84/galaxy1.webp";

console.log("producto1");
console.log(producto1.nombre);

class Product {
    constructor(id, title, price, stock, images, onsale) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.stock = stock;
        this.images = images;
        this.onsale = onsale;
    }
}

const prod1 = new Product("MegaLaptop", "Laptop", 900, 10, ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNnPMHHXbmt7ilXsBehl1DC4crmfJLKThjeFgdSpG64g&s"], false);







class Product2 {
    constructor(id, title, price, stock, images, onsale) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.stock = stock;
        this.images = images;
        this.onsale = onsale;
    }
}

const prod2 = new Product2("Super Audifonos", "JBL", 300, 10, ["https://oechsle.vteximg.com.br/arquivos/ids/16995335-1000-1000/image-b45b194f7b3443e390616fe0d171b7e0.jpg?v=638378545353900000"], false);







class Product3 {
    constructor(id, title, price, stock, images, onsale) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.stock = stock;
        this.images = images;
        this.onsale = onsale;
    }
}

const prod3 = new Product3("Super Mouse", "Logitec", 150, 10, ["https://resource.logitech.com/w_386,ar_1.0,c_limit,f_auto,q_auto,dpr_2.0/d_transparent.gif/content/dam/logitech/en/products/mice/mx-master-3s/gallery/mx-master-3s-mouse-top-view-black.png?v=1"], true);


console.log(Product, Product2, Product3)
console.log(prod2.id);
console.log(prod2.title);

console.log(prod3.id);
console.log(prod3.onsale);


