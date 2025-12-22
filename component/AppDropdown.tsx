"use client";

import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";
import { FiCheck, FiChevronDown } from "react-icons/fi";

export interface DropdownOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface DropdownProps {
  options: DropdownOption[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  error?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  label?: string;
}

const AppDropdown: React.FC<DropdownProps> = ({
  options,
  value,
  onChange,
  placeholder = "Chọn một tùy chọn",
  disabled = false,
  error,
  className = "",
  size = "md",
  label,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const sizeClasses = {
    sm: "text-sm py-1.5 px-3",
    md: "text-base py-2 px-4",
    lg: "text-lg py-3 px-5",
  };

  const selectedOption = options.find((opt) => opt.value === value);

  // Đóng dropdown khi click bên ngoài
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleSelect = (optionValue: string) => {
    if (onChange && !disabled) {
      onChange(optionValue);
    }
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className={`relative ${className}`}>
      {label && (
        <label className="block mb-2 text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <div ref={dropdownRef}>
        {/* Dropdown Button */}
        <button
          type="button"
          onClick={toggleDropdown}
          disabled={disabled}
          className={clsx(`
              w-full
              flex items-center justify-between
              ${sizeClasses[size]}
              bg-white
              border-2
              rounded-lg
              transition-all
              ${
                error
                  ? "border-red-500 focus:ring-red-500"
                  : isOpen
                  ? "border-blue-500 ring-2 ring-blue-200"
                  : "border-gray-300 hover:border-blue-400"
              }
              ${
                disabled
                  ? "bg-gray-100 opacity-60 cursor-not-allowed"
                  : "cursor-pointer"
              }
              focus:outline-none
            `)}
        >
          <span className={selectedOption ? "text-gray-900" : "text-gray-400"}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <FiChevronDown
            className={`ml-2 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""}`}
            size={20}
          />
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="overflow-y-auto absolute z-50 mt-2 w-full max-h-60 bg-white rounded-lg border border-gray-200 shadow-lg">
            {options.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => handleSelect(option.value)}
                disabled={option.disabled}
                className={`
                  w-full
                  flex items-center justify-between
                  px-4 py-2.5
                  text-left
                  transition-colors
                  ${
                    option.disabled
                      ? "bg-gray-50 text-gray-400 cursor-not-allowed"
                      : value === option.value
                      ? "bg-blue-50 text-blue-700 hover:bg-blue-100"
                      : "text-gray-900 hover:bg-gray-100"
                  }
                  ${
                    options[0].value === option.value
                      ? "rounded-t-lg"
                      : options[options.length - 1].value === option.value
                      ? "rounded-b-lg"
                      : ""
                  }
                `}
              >
                <span>{option.label}</span>
                {value === option.value && (
                  <FiCheck className="text-blue-600" size={18} />
                )}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Error Message */}
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default AppDropdown;
