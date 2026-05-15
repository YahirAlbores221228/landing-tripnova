import Checkbox from './ui/CheckBox';

const CheckBoxCards = ({
  options = [],
  value = [],
  onChange
}) => {

  const handleToggle = (optionValue) => {
    const newValue = value.includes(optionValue)
      ? value.filter(item => item !== optionValue)
      : [...value, optionValue];

    onChange({
      target: {
        name: 'serviciosExtra',
        value: newValue
      }
    });
  };

  return (
    <div className="w-full mb-6">
      <span className="mb-4 block text-sm font-medium text-gray-700">
        Servicios adicionales
      </span>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {options.map((option) => {
          const isChecked = value.includes(option.value);

          return (
            <label
              key={option.value}
              className={`
                flex items-center justify-between rounded-2xl border p-4 text-sm transition-all duration-300 cursor-pointer select-none
                ${isChecked
                  ? 'border-accent ring-1 ring-accent bg-accent/5'
                  : 'border-gray-200 bg-white hover:bg-gray-50/50'}
              `}
            >
              <div className="flex items-center gap-3">
                <Checkbox
                  checked={isChecked}
                  onChange={() => handleToggle(option.value)}
                />
                <span className="font-medium text-gray-800">{option.label}</span>
              </div>
              <span className={`text-sm font-medium ${isChecked ? 'text-accent' : 'text-secondary'}`}>
                {option.priceLabel}
              </span>
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default CheckBoxCards;