function StatusBadge({ completed }) {
  try {
    return (
      <span 
        className={`px-3 py-1 rounded-full text-xs font-medium ${
          completed 
            ? 'bg-green-100 text-green-700' 
            : 'bg-yellow-100 text-yellow-700'
        }`}
        data-name="status-badge"
        data-file="components/StatusBadge.js"
      >
        {completed ? 'Completed' : 'Pending'}
      </span>
    );
  } catch (error) {
    console.error('StatusBadge component error:', error);
    return null;
  }
}