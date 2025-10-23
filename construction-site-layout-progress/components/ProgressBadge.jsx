function ProgressBadge({ completed, total }) {
  try {
    const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
    
    return (
      <span 
        className="text-sm font-medium text-[var(--text-secondary)]"
        data-name="progress-badge"
        data-file="components/ProgressBadge.js"
      >
        {completed}/{total} ({percentage}%)
      </span>
    );
  } catch (error) {
    console.error('ProgressBadge component error:', error);
    return null;
  }
}