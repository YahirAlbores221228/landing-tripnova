import { useId } from 'react';
import { ChevronDown } from 'lucide-react';

const SelectField = ({
  label,
  name,
  value,
  onChange,
  options = [],
  error,
  placeholder = 'Selecciona una opción',
  required = false,
  ...rest
}) => {
  const selectId = useId();
  const errorId = `${selectId}-error`;

  return (
    <div className="flex flex-col gap-1.5 w-full mb-4">
      {label && (
        <label
          htmlFor={selectId}
          className="text-sm font-medium text-primary font-poppins"
        >
          {label}
          {required && <span className="text-red-500 ml-1" aria-hidden="true">*</span>}
        </label>
      )}
      <div className="relative w-full">
        <select
          id={selectId}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? errorId : undefined}
          className={`w-full px-3.5 py-2 pr-10 rounded-lg border text-base transition-colors duration-200
            outline-none focus:ring-2 focus:ring-offset-0 appearance-none
            disabled:opacity-50
            disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed
            ${error
              ? 'border-red-500 focus:border-red-500 focus:ring-red-200'
              : 'border-gray-200 focus:border-accent focus:ring-accent/20'
            }
          `}
          {...rest}
        >
          {placeholder && (
            <option value="" disabled hidden>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-secondary">
          <ChevronDown className="h-5 w-5" />
        </div>
      </div>
      {error && (
        <p
          id={errorId}
          role="alert"
          className="text-xs font-semibold text-red-500 mt-0.5 tracking-wide"
        >
          {error}
        </p>
      )}
    </div>
  );
};

export default SelectField;