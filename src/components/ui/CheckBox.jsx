import { useId } from 'react';
import { Check } from 'lucide-react';

const Checkbox = ({
  name,
  checked,
  onChange,
  disabled = false,
  className = '',
  ...props
}) => {
  const checkboxId = useId();

  return (
    <label
      htmlFor={checkboxId}
      className={`
        flex items-center cursor-pointer select-none
        ${disabled ? 'cursor-not-allowed opacity-50' : ''}
      `}
    >
      <input
        id={checkboxId}
        type="checkbox"
        name={name}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        className="sr-only"
        {...props}
      />
      <div
        className={`h-5 w-5 rounded-md border flex items-center justify-center transition-all duration-200
          ${checked
            ? 'border-accent bg-accent'
            : 'border-gray-300 bg-white hover:border-gray-400'}
          ${className}
        `}
      >
        {checked && (
          <Check className="w-4 h-4 text-white" />
        )}
      </div>
    </label>
  );
};

export default Checkbox;