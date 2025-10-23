function LineItem({ item, itemId, editMode, isSelected, onToggle }) {
  try {
    return (
      <div 
        className="flex items-center justify-between py-3 px-4 hover:bg-[var(--bg-hover)] rounded-lg"
        data-name="line-item"
        data-file="components/LineItem.js"
      >
        <div className="flex items-center gap-3">
          {editMode && !item.completed && (
            <input
              type="checkbox"
              checked={isSelected}
              onChange={() => onToggle(itemId)}
              className="w-4 h-4 rounded border-gray-300 cursor-pointer"
            />
          )}
          <div className="w-2 h-2 rounded-full bg-blue-500"></div>
          <span className="text-sm font-medium">{item.name}</span>
        </div>
        <StatusBadge completed={item.completed} />
      </div>
    );
  } catch (error) {
    console.error('LineItem component error:', error);
    return null;
  }
}