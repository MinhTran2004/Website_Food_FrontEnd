'use client'

import { ReactNode, useState } from 'react';
import { FiX } from 'react-icons/fi';
import { IoMenuOutline } from 'react-icons/io5';
import AppButton from './Button/AppButton';

interface IAppDrawer {
  title?:string;
  open?: ReactNode;
  header?: ReactNode;
  body?: ReactNode;
  footer?: ReactNode;
}

const AppDrawer: React.FC<IAppDrawer> = ({ title, open, header, body, footer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Button mở Drawer */}
      {open ? (
        <div onClick={toggleDrawer} className='w-fit'>{open}</div>
      ) : (
        <AppButton
          buttonDefault
          onClick={toggleDrawer}
          iconLeft={
            <IoMenuOutline size={26} />
          }
        />
      )}

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-colorGrayLight opacity-50 z-40 transition-opacity"
          onClick={toggleDrawer}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-4 border-b border-colorGray">
          {header ? (
            header
          ) : (
            <>
              <h2 className="text-xl font-medium">{title}</h2>
              <AppButton
                buttonDefault
                iconLeft={<FiX size={20} />}
                onClick={toggleDrawer}
                aria-label="Close menu"
              />
            </>
          )}
        </div>

        {/* Drawer Body */}
        <div className="flex-1 overflow-y-auto">{body}</div>

        {/* Drawer Footer */}
        {footer && <div className="border-t p-4">{footer}</div>}
      </div>
    </>
  );
};

export default AppDrawer;