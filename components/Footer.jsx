// components/Footer.js

export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between py-6 space-y-4 md:space-y-0">
            {/* Left Section */}
            <div className="flex items-center space-x-4">
              <img
                // src="/logo.png" 
                alt="Logo"
                className="h-10 w-10"
              />
              <span className="text-lg font-semibold">AI.Conomy</span>
            </div>
  
            {/* Navigation Links */}
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-200"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-200"
              >
                About
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-200"
              >
                Services
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-200"
              >
                Contact
              </a>
            </div>
  
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition duration-200"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775a4.933 4.933 0 0 0 2.165-2.723 9.864 9.864 0 0 1-3.125 1.196 4.92 4.92 0 0 0-8.384 4.482A13.978 13.978 0 0 1 1.64 3.16a4.903 4.903 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616c-.054 2.281 1.581 4.415 3.95 4.89a4.935 4.935 0 0 1-2.224.084c.63 1.956 2.445 3.377 4.604 3.415a9.868 9.868 0 0 1-6.102 2.104c-.396 0-.787-.023-1.175-.068a13.978 13.978 0 0 0 7.557 2.212c9.056 0 14.01-7.496 14.01-13.986 0-.213-.005-.425-.015-.637A10.012 10.012 0 0 0 24 4.557z" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition duration-200"
              >
                <span className="sr-only">Facebook</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.675 0h-21.35C.59 0 0 .59 0 1.325v21.351C0 23.411.59 24 1.325 24H12.82v-9.294H9.692V11.41h3.128V8.413c0-3.1 1.893-4.788 4.66-4.788 1.325 0 2.464.099 2.794.143v3.242H17.68c-1.379 0-1.646.656-1.646 1.616v2.12h3.293l-.428 3.296h-2.865V24h5.619c.735 0 1.325-.59 1.325-1.324V1.325C24 .59 23.411 0 22.675 0z" />
                </svg>
              </a>
            </div>
          </div>
  
          <div className="border-t border-gray-700 mt-6 pt-4 text-center">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} AI.Conomy. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  }
  