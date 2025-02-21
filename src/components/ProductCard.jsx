import PropTypes from 'prop-types';
import { Star } from 'lucide-react';

const ProductCard = ({ product, onClick }) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
      onClick={onClick}
    >
      <div className="relative pt-[100%]">
        <img
          src={product.image}
          alt={product.title}
          className="absolute top-0 left-0 w-full h-full object-contain p-4"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 line-clamp-2">{product.title}</h3>
        <div className="flex items-center gap-2 mb-2">
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm">{product.rating.rate}</span>
          </div>
          <span className="text-sm text-gray-500">({product.rating.count} reviews)</span>
        </div>
        <p className="text-xl font-bold">${product.price}</p>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
    product: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired
    };

export default ProductCard;