import { useState } from "react";

function ProjectForm({ onAddProject }) {
  console.log("Render ProjectForm");

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Web");
  const [priority, setPriority] = useState("Medium");

  function handleSubmit(event) {
    event.preventDefault();

    if (!title.trim()) return;

    onAddProject({
      title,
      category,
      priority
    });

    setTitle("");
    setCategory("Web");
    setPriority("Medium");
  }

  return (
    <form className="project-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Project title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <select
        value={category}
        onChange={(event) => setCategory(event.target.value)}
      >
        <option value="Web">Web</option>
        <option value="Mobile">Mobile</option>
        <option value="Data">Data</option>
      </select>

      <select
        value={priority}
        onChange={(event) => setPriority(event.target.value)}
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>

      <button type="submit">Add Project</button>
    </form>
  );
}

export default ProjectForm;