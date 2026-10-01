import { useState } from "react";

function ProjectCard({
  project,
  onDelete,
  onStatusChange,
  resetVersion,
  isVisible
}) {
  console.log("Render ProjectCard:", project.title);

  const [focusCount, setFocusCount] = useState(0);

  return (
    <article
  className={`project-card ${isVisible ? "" : "project-card-hidden"}`}
>
      <div className="project-card-header">
        <div>
          <p className="project-category">{project.category}</p>
          <h3>{project.title}</h3>
        </div>

        <span className={`status status-${project.status.toLowerCase().replaceAll(" ", "-")}`}>
          {project.status}
        </span>
      </div>

      <p className="project-description">{project.description}</p>

      <div className="project-meta">
        <span>Priority: {project.priority}</span>
        <span>Owner: {project.owner}</span>
      </div>

      <div className="local-state-box">
        <p>
          Local focus count: <strong>{focusCount}</strong>
        </p>

        <button onClick={() => setFocusCount(count => count + 1)}>
          Increase Focus
        </button>

        <button
          className="secondary-btn"
          onClick={() => setFocusCount(0)}
        >
          Reset Local State
        </button>
      </div>

      <div className="project-actions">
        <select
          value={project.status}
          onChange={(event) =>
            onStatusChange(project.id, event.target.value)
          }
        >
          <option value="Planning">Planning</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>

        <button
          className="danger-btn"
          onClick={() => onDelete(project.id)}
        >
          Delete
        </button>
      </div>

      <p className="reset-info">
        Reset version: {resetVersion}
      </p>
    </article>
  );
}

export default ProjectCard;