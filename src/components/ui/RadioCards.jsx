import { useId } from 'react';
import { Check } from 'lucide-react';

import Checkbox from './CheckBox';

const RadioCards = ({
  label,
  name,
  options = [],
  value,
  onChange,
  error,
  disabled = false,
  required = false,
  className = '',
  ...props
}) => {
  const groupId = useId();

  return (
    <div className="w-full mb-6">
      {label && (
        <span className="mb-4 block text-sm font-medium text-primary font-poppins">
          {label}
          {required && <span className="ml-1 text-red-500">*</span>}
        </span>
      )}
      <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 ${className}`} {...props}>
        {options.map((option, index) => {
          const optionId = `${groupId}-${index}`;
          const isSelected = value === option.value;

          return (
            <label
              key={index}
              htmlFor={optionId}
              className={`relative flex flex-col rounded-3xl border p-5 transition-all duration-200 cursor-pointer select-none
                ${disabled ? 'cursor-not-allowed bg-gray-50 opacity-60' : ''}
                ${isSelected
                  ? 'border-accent ring-1 ring-accent bg-accent/5'
                  : 'border-gray-200 bg-white hover:bg-gray-50/50'
                }
                ${error ? 'border-red-500' : ''}
              `}
            >
              <Checkbox
                id={optionId}
                name={name}
                value={option.value}
                checked={isSelected}
                onChange={onChange}
                disabled={disabled}
                className="sr-only"
              />
              <h3 className="text-lg font-bold text-primary font-poppins mb-4">
                {option.label}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {option.features?.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-2 text-sm text-secondary leading-snug">
                    <Check className="h-4 w-4 text-accent mt-1" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </label>
          );
        })}
      </div>
      {error && (
        <p className="mt-2 text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};

export default RadioCards;