
import React from 'react'

const LastPart = () => {
  return (
    <div>      {/* 🔷 Footer Section */}
      <footer className="p-6 mt-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Newsletter Section */}
          <div className="rounded-2xl p-6 bg-yellow-100">
            <h2 className="text-xl font-semibold mb-4">Stay Connected with Us</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Enter Your Email *</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="example@email.com" 
                  className="w-full p-2 rounded-full border border-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="terms" className="w-4 h-4" />
                <label htmlFor="terms" className="text-sm">I accept terms &amp; conditions</label>
              </div>
              <button 
                type="submit" 
                className="px-6 py-2  bg-purple-600 text-white rounded-full  hover:bg-purple-700 transition "
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="rounded-2xl p-6 flex flex-col justify-center bg-purple-600 text-white">
            <p>123-456-7890</p>
            <p>info@mysite.com</p>
            <p>500 Terry Francine St.</p>
            <p>San Francisco, CA</p>
            <p>94158</p>
          </div>

          {/* Policies Section */}
          <div className="rounded-2xl p-6 flex flex-col justify-between bg-white">
            <div className="space-y-2">
              <a href="#" className="text-sm text-gray-700 hover:underline">Privacy Policy</a>
              <a href="#" className="text-sm text-gray-700 hover:underline">Accessibility Statement</a>
              <a href="#" className="text-sm text-gray-700 hover:underline">Shipping Policy</a>
              <a href="#" className="text-sm text-gray-700 hover:underline">Terms &amp; Conditions</a>
              <a href="#" className="text-sm text-gray-700 hover:underline">Refund Policy</a>
            </div>
            <p className="mt-4 text-xs text-gray-500">
              © 2035 by P. Mbali. Powered and secured by Wix
            </p>
          </div>
        </div>
      </footer></div>
  )
}

export default LastPart