import { useState } from "react";

import ProjectCard from "./components/ProjectCard";
import ProjectForm from "./components/ProjectForm";
import ProjectFilters from "./components/ProjectFilters";

import "./App.css";

const initialProjects = [
  {
    id: 1,
    title: "Portfolio Website",
    category: "Web",
    description: "Personal portfolio built with React.",
    priority: "High",
    owner: "Adik",
    status: "In Progress"
  },
  {
    id: 2,
    title: "Task Manager",
    category: "Web",
    description: "Simple productivity dashboard.",
    priority: "Medium",
    owner: "Adik",
    status: "Planning"
  },
  {
    id: 3,
    title: "Analytics Dashboard",
    category: "Data",
    description: "Dashboard for visualizing project metrics.",
    priority: "Low",
    owner: "Adik",
    status: "Done"
  }
];

function App() {
  console.log("Render App");

  const [projects, setProjects] = useState(initialProjects);
  const [filter, setFilter] = useState("All");
  const [nextId, setNextId] = useState(4);
  const [resetVersion, setResetVersion] = useState(0);

  function addProject(data) {
    const newProject = {
      id: nextId,
      title: data.title,
      category: data.category,
      description: "New project added from the dashboard.",
      priority: data.priority,
      owner: "Adik",
      status: "Planning"
    };

    setProjects(currentProjects => [
      ...currentProjects,
      newProject
    ]);

    setNextId(id => id + 1);
  }

  function deleteProject(id) {
    setProjects(currentProjects =>
      currentProjects.filter(project => project.id !== id)
    );
  }

  function changeStatus(id, newStatus) {
    setProjects(currentProjects =>
      currentProjects.map(project =>
        project.id === id
          ? { ...project, status: newStatus }
          : project
      )
    );
  }

  function reverseProjects() {
    setProjects(currentProjects => [
      ...currentProjects
    ].reverse());
  }

  function resetAllLocalState() {
    setResetVersion(version => version + 1);
  }

  const visibleProjects =
    filter === "All"
      ? projects
      : projects.filter(project => project.status === filter);

  return (
    <div className="app">
      <header className="dashboard-header">
        <div>
          <p className="eyebrow">React Rendering & State</p>
          <h1>Project Dashboard</h1>
          <p>
            Manage projects while observing React re-renders,
            reconciliation, keys and state preservation.
          </p>
        </div>
      </header>

      <main className="dashboard-main">
        <section className="dashboard-section">
          <h2>Add Project</h2>

          <ProjectForm onAddProject={addProject} />
        </section>

        <section className="dashboard-section">
          <div className="section-top">
            <div>
              <h2>Projects</h2>
              <p>
                Showing {visibleProjects.length} of {projects.length}
              </p>
            </div>
          </div>

          <ProjectFilters
            filter={filter}
            onFilterChange={setFilter}
            onReverse={reverseProjects}
            onResetAllLocalState={resetAllLocalState}
          />

          <div className="project-grid">
            {visibleProjects.map(project => (
              <ProjectCard
                key={`${project.id}-${resetVersion}`}
                project={project}
                onDelete={deleteProject}
                onStatusChange={changeStatus}
                resetVersion={resetVersion}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;