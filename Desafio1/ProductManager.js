import crypto from 'crypto'

console.log(crypto.randomBytes(10).toString('hex'));
class ProductManager {
    constructor() {
        this.products = []
    }
    getProducts() {
      return this.products;
    }
    addProduct(producto) {
        //VALIDAR QUE TODOS LOS DATOS SE HAYAN INGRESADO
        if(!producto.title || !producto.description || !producto.price || !producto.thumbnail || !producto.code || !producto.stock) {
        console.error('Cargar información de todos los campos');
        
        }
        //const indice = this.products.findIndex(prod = prod.code === producto.code)
        const existe = this.products.some(prod => prod.code === producto.code)

        //EXISTE este producto en el array
        if (existe) {
            return 'Producto ya existente';
        } else {
            producto.id = crypto.randomBytes(10).toString('hex');
            this.products.push(producto);
        }
      }
      
      
      getProductById(id) {
      const producto = this.products.find(prod => prod.id === id);

      if (!producto) {
        console.error('Not found ID:' , id);
        return;
      }

    return producto;
  }
}

const prodManager = new ProductManager();

prodManager.addProduct({
  title: 'Producto prueba 1',
  description: 'Este es el producto 1 de prueba',
  price: 200,
  thumbnail: 'Sin Imagen',
  code: 'abc123',
  stock: 25
});

prodManager.addProduct({
  title: 'Producto prueba 2',
  description: 'Este es el producto 2 de prueba',
  price: 100,
  thumbnail: 'Sin Imagen',
  code: 'def456',
  stock: 50
});

console.log(prodManager.getProducts());

console.log(prodManager.getProductById('abc123'));
console.log(prodManager.getProductById('xyz789')); 




