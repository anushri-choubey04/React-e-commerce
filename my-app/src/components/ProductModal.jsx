
import { X } from 'lucide-react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import { api } from '../api';

const ProductModal = ({ product, onClose }) => {
  const dispatch = useDispatch();
  const { isAuthenticated, userId } = useSelector(state => state.cart);

  const handleAddToCart = async () => {
    dispatch(addToCart(product.id));
    
    if (isAuthenticated) {
      try {
        await api.addCart({
          userId,
          date: new Date().toISOString(),
          products: [{ productId: product.id, quantity: 1 }]
        });
      } catch (error) {
        console.error('Failed to add to cart:', error);
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative p-6">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="aspect-square relative">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-contain"
              />
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">{product.title}</h2>
              <p className="text-gray-600 mb-6">{product.description}</p>
              
              <div className="flex items-center justify-between mb-6">
                <span className="text-3xl font-bold">${product.price}</span>
                <span className="text-sm text-gray-500">
                  Rating: {product.rating.rate}/5 ({product.rating.count} reviews)
                </span>
              </div>
              
              <button
                onClick={handleAddToCart}
                className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
ProductModal.propTypes = {
  product: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired
};
  

export default ProductModal;