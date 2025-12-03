// Компонент бейджа технологии (используется в карточках проектов)
export default function TechBadge({ tech }) {
  return (
    <div className="bg-[var(--bg-tertiary)] border border-[var(--border-color)] rounded-lg px-3 py-2 hover:border-blue-500/40 hover:bg-blue-500/5 transition-all duration-200">
      <span className="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-blue-400"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
            clipRule="evenodd"
          />
        </svg>
        <span className="font-medium text-sm text-[var(--text-secondary)]">{tech}</span>
      </span>
    </div>
  );
}
