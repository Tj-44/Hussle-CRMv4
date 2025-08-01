export function Button({ children, className = '', ...props }) {
  return <button className={`bg-blue-600 text-white rounded px-4 py-2 ${className}`} {...props}>{children}</button>;
}