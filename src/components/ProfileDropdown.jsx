"use client";
import { useState } from 'react';

export default function ProfileDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative ml-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-10 h-10 bg-gray-300 rounded-full focus:outline-none"
      >
        {/* Profile Image */}
        <img
          src="/images/profile.png"  
          alt="Profile"
          className="rounded-full"
        />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
          <a href="/signin" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
            Sign In
          </a>
          <a href="/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
            Profile
          </a>
        </div>
      )}
    </div>
  );
}
