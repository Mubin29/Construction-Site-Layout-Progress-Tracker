function Flat({ flat, flatId, editMode, selectedItems, setSelectedItems, filterLineItem }) {
  try {
    const [isOpen, setIsOpen] = React.useState(false);
    
    let allLineItems = [];
    flat.areas.forEach(area => {
      const items = filterLineItem 
        ? area.lineItems.filter(item => item.name === filterLineItem)
        : area.lineItems;
      allLineItems = allLineItems.concat(items);
    });
    
    const completed = allLineItems.filter(item => item.completed).length;
    const total = allLineItems.length;
    const allCompleted = completed === total;

    return (
      <div className="ml-6 border-l-2 border-gray-200" data-name="flat" data-file="components/Flat.js">
        <div className="accordion-item">
          <div className="flex items-center justify-between py-3 px-4 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            <div className="flex items-center gap-3 flex-1">
              <div className={`icon-${isOpen ? 'chevron-down' : 'chevron-right'} text-lg text-gray-500`}></div>
              <span className="font-semibold">{flat.name}</span>
              <ProgressBadge completed={completed} total={total} />
            </div>
            <StatusBadge completed={allCompleted} />
          </div>
          {isOpen && (
            <div>
              {flat.areas.map((area, idx) => (
                <AreaUnit
                  key={area.id}
                  area={area}
                  areaId={`${flatId}-area-${idx}`}
                  editMode={editMode}
                  selectedItems={selectedItems}
                  setSelectedItems={setSelectedItems}
                  filterLineItem={filterLineItem}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    );
  } catch (error) {
    console.error('Flat component error:', error);
    return null;
  }
}