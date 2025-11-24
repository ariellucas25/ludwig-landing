import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <div className="mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Ludwig Digital Studio. All rights reserved.
        </div>
        <div className="flex space-x-6">
          <a href="https://lumare.app" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Lumare App</a>
        </div>
      </div>
    </footer>
  );
};
