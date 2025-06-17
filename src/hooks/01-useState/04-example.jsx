import { useState } from 'react';

export const Exmaple04 = () => {
   // Estado para la lista de productos
   const [porducs, setPorducs] = useState([
      { id: 1, title: 'Black Snekers', quantity: 1 },
      { id: 2, title: 'Red t-shirt', quantity: 1 },
      { id: 3, title: 'Blue jeans ', quantity: 1 },
   ]);

   // Estado para el ID del producto seleccionado
   const [selectedId, setSelectedId] = useState(null);
   // Encuentra el producto seleccionado usando el ID
   const selectedProduct = porducs.find(p => p.id === selectedId);

   // Función para incrementar la cantidad de un producto
   const increment = id => {
      console.log(id);
      setPorducs(prevState => {
         return prevState.map(product => {
            if (product.id === id) {
               // Incrementa la cantidad si el ID coincide
               return { ...product, quantity: product.quantity + 1 };
            } else return product;
         });
      });
   };

   // Función para manejar la selección de un producto
   const handleChose = id => setSelectedId(id);

   return (
      <>
         <div>
            <h4>All Product</h4>
            {porducs.map(product => (
               <div key={product.id}>
                  <span>
                     {product.title}
                     {/* Botón para seleccionar el producto */}
                     <button onClick={() => handleChose(product.id)}> Chose </button>
                  </span>

                  <div className='quantity'>
                     <button> - </button>
                     <span>{product.quantity}</span>
                     {/* Botón para incrementar la cantidad */}
                     <button onClick={() => increment(product.id)}> + </button>
                  </div>
               </div>
            ))}

            <h4>Selected Prodcut</h4>
            {/* Muestra el título y la cantidad del producto seleccionado */}
            <span>{selectedProduct?.title}</span>
            <span> {selectedProduct?.quantity} </span>
         </div>
      </>
   );
};
