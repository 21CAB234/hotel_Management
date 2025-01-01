import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900">Get In Touch</h2>
          <p className="mt-4 text-lg text-gray-600">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
            <Mail className="w-8 h-8 text-blue-600" />
            <h3 className="mt-4 text-lg font-medium text-gray-900">Email</h3>
            <p className="mt-2 text-gray-600">john.doe@example.com</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
            <Phone className="w-8 h-8 text-blue-600" />
            <h3 className="mt-4 text-lg font-medium text-gray-900">Phone</h3>
            <p className="mt-2 text-gray-600">+1 (555) 123-4567</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
            <MapPin className="w-8 h-8 text-blue-600" />
            <h3 className="mt-4 text-lg font-medium text-gray-900">Location</h3>
            <p className="mt-2 text-gray-600">San Francisco, CA</p>
          </div>
        </div>
        <form className="mt-12 max-w-3xl mx-auto">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              ></textarea>
            </div>
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}