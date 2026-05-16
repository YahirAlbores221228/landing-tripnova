const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) => {

  const variants = {
    primary: 'bg-accent text-white hover:bg-accent/90 shadow-sm',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50',
    ghost: 'text-gray-600 hover:bg-gray-100'
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg font-bold'
  };

  return (
    <button
      className={`
        font-lato inline-flex items-center justify-center 
        transition-all duration-200 
        active:scale-95 
        rounded-lg 
        ${variants[variant]} 
        ${sizes[size]} 
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;