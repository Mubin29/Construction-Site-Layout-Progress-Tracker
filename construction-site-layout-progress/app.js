class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h1>
            <p className="text-gray-600 mb-4">We're sorry, but something unexpected happened.</p>
            <button onClick={() => window.location.reload()} className="btn-primary">
              Reload Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  try {
    const [floors, setFloors] = React.useState(mockData);
    const [editMode, setEditMode] = React.useState(false);
    const [selectedItems, setSelectedItems] = React.useState(new Set());
    const [filterLineItem, setFilterLineItem] = React.useState('');
    const [showToast, setShowToast] = React.useState(false);

    const handleSave = () => {
      const updatedFloors = JSON.parse(JSON.stringify(floors));
      selectedItems.forEach(itemId => {
        const parts = itemId.split('-');
        const floorIdx = parseInt(parts[1]);
        const flatIdx = parseInt(parts[3]);
        const areaIdx = parseInt(parts[5]);
        const lineIdx = parseInt(parts[7]);
        
        updatedFloors[floorIdx].flats[flatIdx].areas[areaIdx].lineItems[lineIdx].completed = true;
      });
      
      setFloors(updatedFloors);
      setSelectedItems(new Set());
      setEditMode(false);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    };

    const filteredFloors = filterLineItem 
      ? floors.map(floor => ({
          ...floor,
          flats: floor.flats.map(flat => ({
            ...flat,
            areas: flat.areas.filter(area => 
              area.lineItems.some(item => item.name === filterLineItem)
            )
          })).filter(flat => flat.areas.length > 0)
        })).filter(floor => floor.flats.length > 0)
      : floors;

    return (
      <div className="min-h-screen bg-gray-50 py-8 px-4" data-name="app" data-file="app.js">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-2">
              Construction Site Layout Progress Tracker
            </h1>
            <p className="text-[var(--text-secondary)]">
              Track waterproofing progress across floors, flats, and areas
            </p>
          </div>

          <FilterDropdown 
            value={filterLineItem}
            onChange={setFilterLineItem}
            floors={floors}
          />

          <div className="card p-6 mb-20">
            {filteredFloors.map((floor, idx) => (
              <Floor
                key={floor.id}
                floor={floor}
                floorIndex={idx}
                editMode={editMode}
                selectedItems={selectedItems}
                setSelectedItems={setSelectedItems}
                filterLineItem={filterLineItem}
              />
            ))}
          </div>

          <ActionButtons
            editMode={editMode}
            onEdit={() => setEditMode(true)}
            onSave={handleSave}
            onCancel={() => {
              setEditMode(false);
              setSelectedItems(new Set());
            }}
          />

          {showToast && <Toast message="Progress updated successfully!" />}
        </div>
      </div>
    );
  } catch (error) {
    console.error('App component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);