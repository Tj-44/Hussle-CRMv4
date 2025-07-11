export function Card({ children, className = '' }) {
  return <div className={`bg-white shadow rounded-lg ${className}`}>{children}</div>;
}
export function CardContent({ children }) {
  return <div className="p-6">{children}</div>;
}
export function CardTitle({ children }) {
  return <h3 className="text-xl font-semibold mb-2">{children}</h3>;
}
export function CardDescription({ children }) {
  return <p className="text-gray-600">{children}</p>;
}