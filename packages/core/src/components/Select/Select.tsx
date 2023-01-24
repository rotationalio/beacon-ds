import { useState, useEffect, FC } from 'react';
import { Listbox } from '@headlessui/react';

import { SelectProps, SelectOptionType } from './Select.types';

const Select: FC<SelectProps<SelectOptionType[], SelectOptionType>> = ({
  options,
  value,
  onChange,
  placeholder,
  label,
  isError,
  hintText,
  disabled,
  size = 'md',
  optionWidth = '100%',
  ...props
}) => {
  const [option, setOption] = useState<SelectOptionType | undefined>(value);

  const handleChange = (option: SelectOptionType) => {
    if (onChange) {
      onChange(option);
    }
    setOption(option);
  };

  useEffect(() => {
    if (value) {
      handleChange(value);
    }
  }, [value]);

  return (
    <Listbox value={option} onChange={handleChange}>
      {({ open }) => (
        <>
          {label && (
            <Listbox.Label className="block text-sm font-medium text-gray-700">
              {label}
            </Listbox.Label>
          )}
          <div className="mt-1 relative">
            <Listbox.Button className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              <span className="block truncate">
                {option?.label || placeholder}
              </span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </Listbox.Button>
            <Listbox.Options className="absolute mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
              {options.map((option) => (
                <Listbox.Option
                  key={option.value}
                  className={({ active }) =>
                    `${active ? 'text-white bg-indigo-600' : 'text-gray-900'}
                                            cursor-default select-none relative py-2 pl-3 pr-9`
                  }
                  value={option}
                >
                  {({ selected, active }) => (
                    <>
                      <div className="flex items-center">
                        <span
                          className={`${
                            selected ? 'font-semibold' : 'font-normal'
                          } block truncate`}
                        >
                          {option.label}
                        </span>
                      </div>
                      {selected ? (
                        <span
                          className={`${
                            active ? 'text-white' : 'text-indigo-600'
                          }
                                                            absolute inset-y-0 right-0 flex items-center pr-4`}
                        >
                          <svg
                            className="h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </div>
        </>
      )}
    </Listbox>
  );
};

export default Select;
