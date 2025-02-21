const API_URL = 'https://fakestoreapi.com';

export const api = {
  // Products
  getAllProducts: (limit = null, sort = null) => {
    let url = `${API_URL}/products`;
    if (limit) url += `?limit=${limit}`;
    if (sort) url += `${limit ? '&' : '?'}sort=${sort}`;
    return fetch(url).then(res => res.json());
  },

  getProduct: (id) => {
    return fetch(`${API_URL}/products/${id}`).then(res => res.json());
  },

  getCategories: () => {
    return fetch(`${API_URL}/products/categories`).then(res => res.json());
  },

  getProductsByCategory: (category, limit = null, sort = null) => {
    let url = `${API_URL}/products/category/${category}`;
    if (limit) url += `?limit=${limit}`;
    if (sort) url += `${limit ? '&' : '?'}sort=${sort}`;
    return fetch(url).then(res => res.json());
  },

  addProduct: (product) => {
    return fetch(`${API_URL}/products`, {
      method: 'POST',
      body: JSON.stringify(product)
    }).then(res => res.json());
  },

  updateProduct: (id, product) => {
    return fetch(`${API_URL}/products/${id}`, {
      method: 'PUT',
      body: JSON.stringify(product)
    }).then(res => res.json());
  },

  deleteProduct: (id) => {
    return fetch(`${API_URL}/products/${id}`, {
      method: 'DELETE'
    }).then(res => res.json());
  },

  // Cart
  getCarts: (limit = null, sort = null) => {
    let url = `${API_URL}/carts`;
    if (limit) url += `?limit=${limit}`;
    if (sort) url += `${limit ? '&' : '?'}sort=${sort}`;
    return fetch(url).then(res => res.json());
  },

  getCart: (id) => {
    return fetch(`${API_URL}/carts/${id}`).then(res => res.json());
  },

  getUserCarts: (userId) => {
    return fetch(`${API_URL}/carts/user/${userId}`).then(res => res.json());
  },

  addCart: (cart) => {
    return fetch(`${API_URL}/carts`, {
      method: 'POST',
      body: JSON.stringify(cart)
    }).then(res => res.json());
  },

  updateCart: (id, cart) => {
    return fetch(`${API_URL}/carts/${id}`, {
      method: 'PUT',
      body: JSON.stringify(cart)
    }).then(res => res.json());
  },

  deleteCart: (id) => {
    return fetch(`${API_URL}/carts/${id}`, {
      method: 'DELETE'
    }).then(res => res.json());
  },

  // Auth
  login: (credentials) => {
    return fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      body: JSON.stringify(credentials)
    }).then(res => res.json());
  }
};