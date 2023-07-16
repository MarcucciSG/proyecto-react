const misProductos = [
  { id: "1", nombre: "Headset", precio: 1000, stock: 10, img: "../img/Headset.jfif", idCat:"3"},
  { id: "2", nombre: "Monitor", precio: 2000, stock: 10, img: "../img/Monitor.jpg", idCat:"2"},
  { id: "3", nombre: "Teclado", precio: 1500, stock: 6, img: "../img/teclado.jpg", idCat:"3"},
  { id: "4", nombre: "Mouse", precio: 800, stock: 10, img: "../img/Mouse.jpg", idCat:"3"},
];

export const getProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(misProductos);
    }, 100);
  });
};

export const getUnProducto = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const producto = misProductos.find((prod) => prod.id === id);
      resolve(producto);
    }, 100);
  });
};

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise ( resolve => {
      setTimeout(() =>{
        const productosCategoria = misProductos.filter(prod => prod.idCat === idCategoria);
        resolve(productosCategoria);
      }, 100)
    })
}