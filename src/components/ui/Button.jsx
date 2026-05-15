const Button = ({ 
  children, 
  variant = 'primary', // Para elegir el color
  size = 'md',        // Para elegir la medida
  className = '',     // Para ajustes excepcionales (como el redondeado)
  ...props            // Para capturar onClick, type="submit", etc.
}) => {
  
  // Definimos los "temas" del botón
  const variants = {
    primary: 'bg-accent text-white hover:bg-accent/90 shadow-sm',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50',
    ghost: 'text-gray-600 hover:bg-gray-100'
  };

  // Definimos las escalas de tamaño
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',    // Ideal para el Header [cite: 28]
    md: 'px-6 py-3 text-base',    // Ideal para el Formulario/Cotizador [cite: 100]
    lg: 'px-8 py-4 text-lg font-bold' // Ideal para el Hero [cite: 34]
  };

  return (
    <button 
      className={`
        inline-flex items-center justify-center 
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