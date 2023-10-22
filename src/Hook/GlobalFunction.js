import { useEffect, useState } from "react";

function GlobalFunction() {  // cart manage
  let cart = [];
  const stored = JSON.parse(localStorage.getItem('storedCart'));
  if (stored) {
    cart = stored;
  }
  const [cardStore, setCardStore] = useState(cart);


  const addToCart = (pd) => {
    const updateCart = [...cardStore, pd]
    setCardStore(updateCart);
  }
  useEffect(() => {
    localStorage.setItem("storedCart", JSON.stringify(cardStore))
  }, [cardStore])
  // subtotal 

  const subtotal = cardStore?.reduce((p, c) => {
    return p + (+c.price * +c.quantity)
  }, 0);

  const totalItems = cardStore?.reduce((p, c) => {
    return p + +c.quantity
  }, 0)
  const increaseQuantity = (idx, id) => {
    const value = cardStore.map((pd, index) => {
      if (pd.id === id && idx === index) {
        pd.quantity = parseInt(pd.quantity) + 1;
      } return pd
    })
    setCardStore(value)
  }

  const decreaseQuantity = (idx, id) => {
    const value = cardStore.map((pd, index) => {
      if (pd.id === id && idx === index && pd.quantity !== 1) {
        pd.quantity = parseInt(pd.quantity) - 1;
      } return pd
    })
    setCardStore(value)
  }

  const handleDelete = (idx) => {
    const deleteProduct = cardStore.filter((pd, index) => index !== idx);
    setCardStore([...deleteProduct])
  }

  // this is only for Product details page ?? start here
  const [count, setCount] = useState(1)
  const countMinus = (product) => {
    if (count > 1) {
      product.quantity = count - 1;
      setCount(count - 1)
    } else {
      setCount(1)
    }
    localStorage.setItem("singleProduct", JSON.stringify(product));
  }
  const countPlus = (product) => {
    setCount(count + 1);
    product.quantity = count + 1;
  }
  const addingCart = (product) => {
    const updateCart = [...cardStore, product]
    setCardStore(updateCart);
    setCount(1);
  }
  // this is only for Product details page ?? end here

  // control cartPage show and hide
  const [cartCheck, setCartCheck] = useState(false)
  const handleChange = () => { setCartCheck(false) }
  const handleChange2 = () => { setCartCheck(true) }
  // control cartPage show and hide




  return {
    stored,
    cardStore,
    addToCart,
    subtotal,
    totalItems,
    increaseQuantity,
    decreaseQuantity,
    handleDelete,
    // this is only for Product details page ?? start here
    countPlus,
    count,
    countMinus,
    addingCart,
    // this is only for Product details page ?? end here
    
    // control cartPage show and hide
    cartCheck,
    handleChange,
    handleChange2,
    // control cartPage show and hide

  };
}

export default GlobalFunction