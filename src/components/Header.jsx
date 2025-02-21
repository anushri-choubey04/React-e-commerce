import { useState, useEffect, useRef } from "react";
import { Search, ShoppingCart,  ChevronDown } from "lucide-react";
import { useSelector } from "react-redux";
import CartModal from "./CartModal";
import PropTypes from "prop-types";

const Header = ({ onCategorySelect, categories, onSearch }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const { count } = useSelector((state) => state.cart);
  const searchRef = useRef(null);
  const categoryRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false);
      }
      if (categoryRef.current && !categoryRef.current.contains(event.target)) {
        setIsCategoryOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <header className="bg-[#FFA41C] shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-14">
            {/* Logo & Navigation */}
            <div className="flex items-center space-x-6">
              <h1 className="text-2xl font-bold" onClick={scrollToTop}>
                My Store
              </h1>
              <nav className="hidden md:flex space-x-4 text-sm">
                <button
                  onClick={scrollToTop}
                  className="hover:text-white cursor-pointer"
                >
                  Home
                </button>

                <a href="" className="hover:text-white cursor-pointer">
                  Contact Us
                </a>
                <div className="relative" ref={categoryRef}>
                  <button
                    className="flex items-center hover:text-white cursor-pointer"
                    onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                  >
                    More Option <ChevronDown className="w-4 h-4 ml-1" />
                  </button>
                  {isCategoryOpen && (
                    <div className="absolute top-full left-0 mt-1 w-48 bg-grey rounded-lg shadow-lg py-2 z-50 hover:text-white cursor-pointer">
                      {categories.map((category) => (
                        <button
                          key={category}
                          onClick={() => {
                            onCategorySelect(category);
                            setIsCategoryOpen(false);
                          }}
                          className="w-full text-left px-4 py-2 hover:bg-gray-100"
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </nav>
            </div>

            {/* Search & Cart */}
            <div className="flex items-center space-x-4 border-amber-300">
              {/* Search Bar */}
              <div className="relative" ref={searchRef}>
                <div className="flex items-center border-1">
                  <input
                    type="text color-white"
                    placeholder="Search for products..."
                    value={searchTerm}
                    onChange={handleSearch}
                    onFocus={() => setIsSearchOpen(true)}
                    className="w-64 px-4 py-1 rounded-sm text-sm  border-black-300 border-l-indigo-950 transition-colors duration-200"
                  />
                  <button className="absolute right-2" aria-label="Search">
                    <Search className="w-4 h-4 text-gray-500" />
                  </button>
                </div>
                {isSearchOpen && searchTerm && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-lg py-2 max-h-96 overflow-y-auto">
                    <div className="px-4 py-2 text-sm text-gray-500">
                      Searching for{" "}
                      <span className="font-bold">{searchTerm}</span>...
                    </div>
                  </div>
                )}
              </div>

              {/* Cart & User Icons */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setIsCartOpen(true)}
                  className="relative hover:text-white cursor-pointer"
                  aria-label="Open Cart"
                >
                  <ShoppingCart className="w-5 h-5" />
                  {count > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                      {count}
                    </span>
                  )}
                </button>
                
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Cart Modal */}
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

Header.propTypes = {
  onCategorySelect: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default Header;
