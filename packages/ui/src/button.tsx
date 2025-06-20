interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

const buttonVariants = {
  primary: 'bg-brand-navy text-white hover:bg-brand-navy/90',
  secondary: 'bg-gray-500 text-white hover:bg-gray-600',
  outline: 'border border-brand-navy text-brand-navy hover:bg-brand-navy/10',
  ghost: 'text-brand-navy hover:bg-brand-navy/10'
};

const buttonSizes = {
  sm: 'px-3 py-1 text-sm',
  md: 'px-4 py-2',
  lg: 'px-6 py-3 text-lg'
};

export const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '',
  ...rest 
}: ButtonProps) => {
  const baseClasses = 'rounded-md font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2';
  const variantClasses = buttonVariants[variant];
  const sizeClasses = buttonSizes[size];
  
  return (
    <button 
      className={`${baseClasses} ${variantClasses} ${sizeClasses} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};
