import { useId } from 'react';

const RangeSlider = ({
  label,
  name,
  value,
  onChange,
  min = 1,
  max = 30,
  step = 1,
  unit = '',
  disabled = false,
  className = '',
  ...props
}) => {
  const sliderId = useId();
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className={`w-full mb-4 ${className}`}>
      {label && (
        <label
          htmlFor={sliderId}
          className="mb-2 block text-sm font-medium text-primary font-poppins"
        >
          {label}: <span className="font-semibold">{value} {unit}</span>
        </label>
      )}
      <div className=" flex items-center">
        <input
          id={sliderId}
          type="range"
          name={name}
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className={`h-1.5 w-full cursor-pointer appearance-none rounded-lg accent-accent focus:outline-none disabled:cursor-not-allowed disabled:opacity-50`}
          style={{
            background: `linear-gradient(to right, #FF6B35 0%, #FF6B35 ${percentage}%, #0A2342 ${percentage}%, #0A2342 100%)`
          }}
          {...props}
        />
      </div>
    </div>
  );
};

export default RangeSlider;