function ProjectFilters({
  filter,
  onFilterChange,
  onReverse,
  onResetAllLocalState
}) {
  console.log("Render ProjectFilters");

  return (
    <div className="project-filters">
      <div>
        <label htmlFor="status-filter">Filter:</label>

        <select
          id="status-filter"
          value={filter}
          onChange={(event) => onFilterChange(event.target.value)}
        >
          <option value="All">All</option>
          <option value="Planning">Planning</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>
      </div>

      <button onClick={onReverse}>
        Reverse List
      </button>

      <button
        className="secondary-btn"
        onClick={onResetAllLocalState}
      >
        Reset All Local State
      </button>
    </div>
  );
}

export default ProjectFilters;