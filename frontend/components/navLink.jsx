import Link from "next/link";

// Компонент навигационной ссылки с hover-эффектом
export default function NavLink({ href, children }) {
  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <Link href={href} className="hover:text-blue-400 transition-colors duration-200 font-medium">
      {children}
    </Link>
  );
}
