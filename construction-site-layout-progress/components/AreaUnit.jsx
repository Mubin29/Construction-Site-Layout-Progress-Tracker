function AreaUnit({ area, areaId, editMode, selectedItems, setSelectedItems, filterLineItem }) {
  try {
    const [isOpen, setIsOpen] = React.useState(false);
    
    const filteredLineItems = filterLineItem
      ? area.lineItems.filter(item => item.name === filterLineItem)
      : area.lineItems;
    
    const completed = filteredLineItems.filter(item => item.completed).length;
    const total = filteredLineItems.length;
    const allCompleted = completed === total;
    
    const pendingItems = filteredLineItems.filter(item => !item.completed);
    const hasSelectable = editMode && pendingItems.length > 0;
    
    const handleToggle = (itemId) => {
      const newSelected = new Set(selectedItems);
      if (newSelected.has(itemId)) {
        newSelected.delete(itemId);
      } else {
        newSelected.add(itemId);
      }
      setSelectedItems(newSelected);
    };
    
    const handleAreaToggle = () => {
      const newSelected = new Set(selectedItems);
      const allSelected = pendingItems.every(item => selectedItems.has(`${areaId}-line-${filteredLineItems.indexOf(item)}`));
      
      pendingItems.forEach((item, idx) => {
        const itemId = `${areaId}-line-${filteredLineItems.indexOf(item)}`;
        if (allSelected) {
          newSelected.delete(itemId);
        } else {
          newSelected.add(itemId);
        }
      });
      setSelectedItems(newSelected);
    };

    return (
      <div className="ml-8 border-l-2 border-gray-200" data-name="area-unit" data-file="components/AreaUnit.js">
        <div className="accordion-item">
          <div className="flex items-center justify-between py-3 px-4 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            <div className="flex items-center gap-3 flex-1">
              {hasSelectable && (
                <input
                  type="checkbox"
                  checked={pendingItems.every(item => selectedItems.has(`${areaId}-line-${filteredLineItems.indexOf(item)}`))}
                  onChange={(e) => {
                    e.stopPropagation();
                    handleAreaToggle();
                  }}
                  className="w-4 h-4 rounded border-gray-300 cursor-pointer"
                />
              )}
              <div className={`icon-${isOpen ? 'chevron-down' : 'chevron-right'} text-lg text-gray-500`}></div>
              <span className="font-medium">{area.name}</span>
              <ProgressBadge completed={completed} total={total} />
            </div>
            <StatusBadge completed={allCompleted} />
          </div>
          {isOpen && (
            <div className="ml-6 border-l-2 border-gray-100">
              {filteredLineItems.map((item, idx) => (
                <LineItem
                  key={item.id}
                  item={item}
                  itemId={`${areaId}-line-${idx}`}
                  editMode={editMode}
                  isSelected={selectedItems.has(`${areaId}-line-${idx}`)}
                  onToggle={handleToggle}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    );
  } catch (error) {
    console.error('AreaUnit component error:', error);
    return null;
  }
}