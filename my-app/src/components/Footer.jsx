import { Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-semibold mb-4">Exclusive</h3>
            <h4 className="text-base mb-4">Subscribe</h4>
            <p className="text-sm text-gray-400 mb-4">
              Get 10% off your first order
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-black border border-white rounded px-4 py-2 text-sm"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
                <Mail className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li> India</li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                anushrichoubey04@gmail.com
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Account</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="" className="hover:text-white">
                  My Account
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Login / Register
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Link</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="" className="hover:text-white">
                  Terms Of Use
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>&copy; All right reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
