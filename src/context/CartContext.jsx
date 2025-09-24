
import { createContext, useEffect, useState } from "react";
import { supabase } from "../utils/supabase";

export const CartContext = createContext({
  //Context to manage the product state
  products: [],
  loading: false,
  error: null,

  //Context to manage the cart state
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},

session: null,
sessionLoading: false,
sessionMessage: null,
sessionError: null,
handleSignUp: () => {},
handleSignIn: () => {},
handleSignOut: () => {},
});

export function CartProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProductsSupabase() {
      const { data, error } = await supabase
        .from("products")
        .select("id,thumbnail,title,price,description");

      if (error) {
        setError(`Fetching products failed: ${error.message}`);
      } else {
        setProducts(data);
      }
      setLoading(false);
    }

    fetchProductsSupabase();
    // var category = "smartphones";
    // var limit = 10;
    // var apiUrl = `https://dummyjson.com/products/category/${category}?limit=${limit}&select=id,thumbnail,title,price,description`;

    // async function fetchProducts() {
    //   try {
    //     const response = await fetch(apiUrl);
    //     const data = await response.json();
    //     setProducts(data.products);
    //   } catch (error) {
    //     setError(error);
    //   } finally {
    //     setLoading(false);
    //   }
    // }

    // fetchProducts();
  }, []);

  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart((prevCart) => {
      if (prevCart.find((prod) => prod.id === product.id)) {
        return prevCart.map((prod) =>
          prod.id === product.id ? { ...prod, qty: prod.qty + 1 } : prod
        );
      } else {
        return [...prevCart, { ...product, qty: 1 }];
      }
    });
  }

  function removeFromCart(productId) {
    setCart((prevCart) => {
      const prod = prevCart.find((p) => p.id === productId);

      if (!prod) return prevCart;

      if (prod.qty === 1) {
        return prevCart.filter((p) => p.id !== productId);
      } else {
        return prevCart.map((p) =>
          p.id === productId ? { ...p, qty: p.qty - 1 } : p
        );
      }
    });
  }

  function clearCart() {
    setCart([]);
  }

const [session, setSession] = useState(null);
const [sessionLoading, setSessionLoading] = useState(false);
const [sessionMessage, setSessionMessae] = useState(null);
const [sessionError, setSessionError] = useState(null);

async function handleSignUp(email, password, username) {
  setSessionLoading(true);
  setSessionMessae(null);
  setSessionError(null);

  try {
    const {data, error} = await supabase.auth.signUp({
      email,
      password,
      options: {data : {
        username: username,
        admin: false, 
      },
      emailRedirectTo: `${window.location.origin}/signin`,
    });

    if (error) throw error;

    if (data.user){

      setSessionMessae(
        "registration lalala"
      );
      window.location.href = "/signin";
    }

  } catch (error) {
    setSessionError(error.message);
  } finally{
    setSessionLoading(false)
  }

} 

async function handleSignIn(email, password) {

  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

  if (error) throw error;

  if (data.session){
    setSession(data.session);
    setSessionMessae("sign lalala");
  }
    
  } catch (error) {
    setSessionError(error.message);
  } finally {
    setSessionLoading(false);
  }
  };

} 

async function handleSignOut() {} 
  setSessionLoading(true);
  setSessionMessae(null);
  setSessionError(null);

  try{
    const { error } = await 
  }

  const context = {
  session: session,
  sessionLoading: sessionLoading,
  sessionMessage: null,
  sessionError: null,
  handleSignUp: () => {},
  handleSignIn: () => {},
  handleSignOut: () => {},
  };

  return (
    <CartContext.Provider value={context}>{children}</CartContext.Provider>
  );
}

