export default function TechBadge({ tech }) {
  return (
    <div className="bg-gray-700 rounded-lg px-4 py-2 hover:bg-gray-600 transition-colors duration-200">
      <span className="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
            clipRule="evenodd"
          />
        </svg>
        <span className="font-medium text-sm">{tech}</span>
      </span>
    </div>
  );
}
