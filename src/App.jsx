import  { useState, useEffect } from 'react';
import { Provider } from 'react-redux';

import Header from './components/Header';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';
import ProductModal from './components/ProductModal';
import { store } from './store';
import { api } from './api';

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const [productsData, categoriesData] = await Promise.all([
          api.getAllProducts(),
          api.getCategories()
        ]);
        setProducts(productsData);
        setFilteredProducts(productsData);
        setCategories(categoriesData);
        setLoading(false);
         // eslint-disable-next-line no-unused-vars
      } catch (err) {
        setError('Failed to fetch data. Please try again later.');
        setLoading(false);
      }
    };

    fetchInitialData();
  }, []);

  const handleCategorySelect = async (category) => {
    try {
      setLoading(true);
      const categoryProducts = await api.getProductsByCategory(category);
      setProducts(categoryProducts);
      setFilteredProducts(categoryProducts);
       // eslint-disable-next-line no-unused-vars
    } catch (err) {
      setError('Failed to fetch category products. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (searchTerm) => {
    if (!searchTerm.trim()) {
      setFilteredProducts(products);
      return;
    }

    const filtered = products.filter(product => 
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <Provider store={store}>
      <div className="min-h-screen flex flex-col">
        <Header 
          onCategorySelect={handleCategorySelect} 
          categories={categories}
          onSearch={handleSearch}
        />
        
        <main className="flex-grow  ">
          {/* Hero Section */}
         
  

          <div className="relative text-center ">
            <div className='text-center' >
              <div className="bg-gradient-to-r from-gray-900 to-yellow-400 text-white rounded-lg p-60 ">  <div >
                  <h1 className="text-7xl font-bold mb-4 text-center">
                    Welcome to <span className="underline  ">My Store </span>
                  </h1>
                  <h2 className="text-4xl font-bold mb-2 text-center">Your Shopping Destination</h2>
                  
                  <p className="text-black-600 mb-9 text-center">
                    Discover a wide range of products selected just for you. Shop with ease and find exactly what you need.
                  </p>
                </div>
              </div>
              <div ></div>
            </div>
          </div>

          {/* Black Banner Section */}
          <div className="bg-black text-white py-12">
            <div className="container mx-auto px-4 ">
              <h2 className="text-3xl font-bold mb-4 ">Discover Your Next Favorite Item</h2>
              <p className="text-gray-400 mb-8">Browse our exclusive collection and find the perfect product selected just for you.</p>
              <div className="flex gap-4">
                <button className="bg-white text-black px-8 py-3 rounded  hover:text-grey cursor-pointer ">Shop</button>
                <button className="border border-white px-8 py-3 rounded cursor-pointer ">Learn More</button>
              </div>
            </div>
          </div>
          {/* Products Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-1 h-6 bg-red-500"></div>
              <h2 className="text-2xl font-bold">Explore Our Products</h2>
            </div>
            
            {loading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-gray-900 border-t-transparent mx-auto"></div>
              </div>
            ) : error ? (
              <div className="text-center py-12 text-red-600">{error}</div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onClick={() => setSelectedProduct(product)}
                  />
                ))}
              </div>
            )}
          </section>
        </main>

        <Footer />

        {selectedProduct && (
          <ProductModal
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </div>
    </Provider>
  );
}

export default App;