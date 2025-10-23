function ActionButtons({ editMode, onEdit, onSave, onCancel }) {
  try {
    return (
      <div 
        className="fixed bottom-6 right-6 flex gap-3"
        data-name="action-buttons"
        data-file="components/ActionButtons.js"
      >
        {!editMode ? (
          <button onClick={onEdit} className="btn-primary shadow-lg">
            Update Details
          </button>
        ) : (
          <>
            <button onClick={onCancel} className="btn-secondary shadow-lg">
              Cancel
            </button>
            <button onClick={onSave} className="btn-success shadow-lg">
              Save
            </button>
          </>
        )}
      </div>
    );
  } catch (error) {
    console.error('ActionButtons component error:', error);
    return null;
  }
}