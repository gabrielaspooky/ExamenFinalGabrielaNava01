"use client"; // Asegúrate de usar esto en Next.js

import React, { useEffect, useState } from 'react';

export default function ProductFetcher() {
  const [products, setProducts] = useState([]);  // Estado para productos
  const [loading, setLoading] = useState(true);  // Estado de carga
  const [error, setError] = useState(null);      // Estado de error

  useEffect(() => {
    async function fetchProducts() {
      try {
        // Hacemos el fetch a la URL de la API
        const response = await fetch('https://cafe-de-altura-alpha.vercel.app/api/products');
        if (!response.ok) {
          throw new Error('Error al obtener los productos');
        }
        const data = await response.json();
        
        // Guardamos los productos en el estado
        setProducts(data.products);
      } catch (error) {
        setError(error.message);  // Capturamos errores
      } finally {
        setLoading(false);  // Terminamos la carga
      }
    }

    fetchProducts();  // Ejecutamos el fetch cuando el componente se monta
  }, []);  // El array vacío asegura que solo se ejecute una vez

  // Renderizamos el estado de carga
  if (loading) return <p className="text-lg text-gray-500">Cargando productos...</p>;

  // Renderizamos el estado de error
  if (error) return <p className="text-lg text-red-600">Error: {error}</p>;

  // Renderizamos los productos si los obtenemos correctamente
  return (
    <div>
         <h2 className="text-2xl font-medium text-[#2A5B45] leading-7 w-[120px] p-10 text-center">Novedades</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {products.map((product) => (
        <div key={product.id} className="bg-white shadow-lg border border-gray-300 rounded-lg overflow-hidden">
          <img src={product.img_url} alt={product.name} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">{product.brand}</h3>
            <p className="text-gray-600 mb-2">{product.description}</p>
            <p className="text-lg text-center text-gray-900 mb-4">{product.price},00 €</p>
            <button className="w-full bg-[#2A5B45] text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-500">
              Añadir
            </button>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}
