"use client";

import { createContext, useEffect, useState } from "react";
import { productos } from "@/data/productos";

const shopContext = createContext();

const ShopProvider = ({ children }) => {
  // ----------- PRODUCTOS ----------------

  const [catalogo, setCatalogo] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");

  useEffect(() => {
    setCatalogo(productos);
  }, []);

  //----------- FILTRAR PRODUCTOS

  const filtrarProductos = (categoria) => {
    if (categoria) {
      setCatalogo(
        productos.filter((producto) => producto.categoria_id === categoria)
      );
    } else {
      setCatalogo(productos);
    }
    setCategoriaSeleccionada(categoria);
  };

  // Ventana Modal

  const [modal, setModal] = useState(false);
  const handleClickmodal = () => {
    setModal(!modal);
  };

  // Obtener la información del producto al dar clic al botón del modal

  const [productSelect, setProductSelect] = useState({});

  const handleClickInforProduct = (infoProduct) => {
    setProductSelect(infoProduct);
  };

  // Abrir carrito de compras

  const [carrito, setCarrito] = useState(false);

  const handleClickCarrito = () => {
    setCarrito(!carrito);
  };

  // --------- AGREGAR PRODUCTO A LA PETICION

  const [itemCarrito, setItemCarrito] = useState([])

  const ClickAgregar = (item) => {
    setItemCarrito((prevItems) => {
      const existingItem = prevItems.find((x) => x.id === item.id);
      if (existingItem) {
        return prevItems.map((x) =>
          x.id === item.id ? { ...x, cantidad: x.cantidad + 1 } : x
        );
      } else {
        return [...prevItems, { ...item, cantidad: 1 }];
      }
    });
  };
  //------- ELIMINAR PRODUCTO DEL CARRITO

  const ClickEliminar = (id) => {
    setItemCarrito((prevItems) => {
      const existingItem = prevItems.find((x) => x.id === id);
      if (existingItem.cantidad > 1) {
        return prevItems.map((x) =>
          x.id === id ? { ...x, cantidad: x.cantidad - 1 } : x
        );
      } else {
        return prevItems.filter((item) => item.id !== id);
      }
    });
  };

  // Total cuenta

  const [total, setTotal] = useState(0)

  //-----------------------------------------------------------------------------------------

  return (
    <shopContext.Provider
      value={{
        handleClickmodal,
        modal,
        handleClickInforProduct,
        productSelect,
        handleClickCarrito,
        carrito,
        catalogo,
        filtrarProductos,
        categoriaSeleccionada,
        itemCarrito,
        ClickAgregar,
        ClickEliminar
      }}
    >
      {children}
    </shopContext.Provider>
  );
};

export { ShopProvider };

export default shopContext;
