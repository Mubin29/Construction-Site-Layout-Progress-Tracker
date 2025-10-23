function FilterDropdown({ value, onChange, floors }) {
  try {
    const allLineItemNames = new Set();
    floors.forEach(floor => {
      floor.flats.forEach(flat => {
        flat.areas.forEach(area => {
          area.lineItems.forEach(item => {
            allLineItemNames.add(item.name);
          });
        });
      });
    });
    
    const uniqueLineItems = Array.from(allLineItemNames).sort();

    return (
      <div className="mb-4" data-name="filter-dropdown" data-file="components/FilterDropdown.js">
        <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
          Filter Line Items
        </label>
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full md:w-64 px-4 py-2 border border-[var(--border-color)] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Line Items</option>
          {uniqueLineItems.map(name => (
            <option key={name} value={name}>{name}</option>
          ))}
        </select>
      </div>
    );
  } catch (error) {
    console.error('FilterDropdown component error:', error);
    return null;
  }
}