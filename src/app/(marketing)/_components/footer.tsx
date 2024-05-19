import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-2 sm:py-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between">
        <div className="flex items-center mb-4 sm:mb-0">
          <Link className="flex items-center" href="#">
            <svg
              className="h-6 w-auto text-white"
              fill="none"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"
                fill="currentColor"
              />
              <path
                d="M16 8C18.1217 8 20.1566 8.84285 21.6569 10.3431C23.1571 11.8434 24 13.8783 24 16C24 18.1217 23.1571 20.1566 21.6569 21.6569C20.1566 23.1571 18.1217 24 16 24C13.8783 24 11.8434 23.1571 10.3431 21.6569C8.84285 20.1566 8 18.1217 8 16C8 13.8783 8.84285 11.8434 10.3431 10.3431C11.8434 8.84285 13.8783 8 16 8V8Z"
                fill="white"
              />
            </svg>
            <span className="ml-2 text-base font-bold">Acme Inc</span>
          </Link>
        </div>
        <div className="flex space-x-4 text-sm">
          <Link className="hover:text-gray-400" href="#">
            About
          </Link>
          <Link className="hover:text-gray-400" href="#">
            Contact
          </Link>
          <Link className="hover:text-gray-400" href="#">
            Privacy Policy
          </Link>
        </div>
        <div className="text-sm text-gray-400 mt-4 sm:mt-0">
          © 2024 Acme Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
