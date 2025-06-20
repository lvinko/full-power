interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button = ({ children, ...rest }: ButtonProps) => {
  return <button className="bg-blue-500 text-white p-2 rounded-md" {...rest}>{children}</button>;
};
