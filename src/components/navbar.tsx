import React from 'react';

interface NavbarProps {
  email: string;
}

const Navbar: React.FC<NavbarProps> = ({email}) => {
  return (
    <nav className="navbar flex justify-between w-full">
      <div className="navbar-left flex items-center mt-2 ml-2">
      <div className="flex items-center mb-4">
        <div className="bg-red-700 p-2 rounded-md mr-2">
          {/* White checkmark icon (replace with your actual checkmark icon) */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <p className="text-xl tracking-widest">
          <span className="text-black-700 font-bold text-xl">G</span>Task
        </p>
      </div>
        <button className='mb-3 ml-3'>Menu</button>
      </div>
      <div className="navbar-right flex flex-col items-center mt-2 mr-2">
        <span>Hi, {email}</span>
        <button>Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;