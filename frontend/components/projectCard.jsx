import TechBadge from "./techBadge.jsx";
import { SiGithub } from "react-icons/si";

// Компонент карточки проекта с анимацией, ссылками на GitHub и демо
export default function ProjectCard({ title, description, technologies, github, live, image }) {
  return (
    <div className="group bg-[var(--card-bg)] backdrop-blur border border-[var(--card-border)] rounded-lg p-6 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 transform hover:-translate-y-1">
      {/* Иконка проекта */}
      <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{image}</div>

      {/* Title */}
      <h2 className="text-xl font-bold mb-3 text-[var(--text-primary)] group-hover:text-blue-400 transition-colors duration-300">
        {title}
      </h2>

      {/* Description */}
      <p className="text-[var(--text-secondary)] text-sm mb-4 leading-relaxed line-clamp-3">{description}</p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.slice(0, 3).map((tech) => (
          <TechBadge key={tech} tech={tech} />
        ))}
        {technologies.length > 3 && (
          <span className="text-xs px-2 py-1 rounded bg-[var(--bg-tertiary)] text-[var(--text-secondary)]">
            +{technologies.length - 3}
          </span>
        )}
      </div>

      {/* Links */}
      <div className="flex items-center gap-3 pt-4 border-t border-[var(--border-color)]">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-blue-400 transition-colors duration-200"
          title="View on GitHub"
        >
          <SiGithub className="w-5 h-5" />
          <span className="text-sm">GitHub</span>
        </a>
        <a
          href={live}
          className={`flex items-center gap-2 text-[var(--text-secondary)] hover:text-purple-400 transition-colors duration-200 ${live === "#" ? "opacity-50 cursor-not-allowed" : ""}`}
          title="View live demo"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
          <span className="text-sm">Live</span>
        </a>
      </div>
    </div>
  );
}
