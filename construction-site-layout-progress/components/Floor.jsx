function Floor({ floor, floorIndex, editMode, selectedItems, setSelectedItems, filterLineItem }) {
  try {
    const [isOpen, setIsOpen] = React.useState(false);
    
    let allLineItems = [];
    floor.flats.forEach(flat => {
      flat.areas.forEach(area => {
        const items = filterLineItem 
          ? area.lineItems.filter(item => item.name === filterLineItem)
          : area.lineItems;
        allLineItems = allLineItems.concat(items);
      });
    });
    
    const completed = allLineItems.filter(item => item.completed).length;
    const total = allLineItems.length;
    const allCompleted = completed === total;

    return (
      <div className="mb-2" data-name="floor" data-file="components/Floor.js">
        <div className="accordion-item rounded-lg">
          <div className="flex items-center justify-between py-4 px-4 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            <div className="flex items-center gap-3 flex-1">
              <div className={`icon-${isOpen ? 'chevron-down' : 'chevron-right'} text-xl text-gray-600`}></div>
              <span className="text-lg font-bold">{floor.name}</span>
              <ProgressBadge completed={completed} total={total} />
            </div>
            <StatusBadge completed={allCompleted} />
          </div>
          {isOpen && (
            <div className="pb-2">
              {floor.flats.map((flat, idx) => (
                <Flat
                  key={flat.id}
                  flat={flat}
                  flatId={`floor-${floorIndex}-flat-${idx}`}
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
    console.error('Floor component error:', error);
    return null;
  }
}