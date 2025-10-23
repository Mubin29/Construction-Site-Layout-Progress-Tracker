function Toast({ message }) {
  try {
    return (
      <div 
        className="fixed bottom-24 right-6 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-3 animate-fade-in"
        data-name="toast"
        data-file="components/Toast.js"
      >
        <div className="icon-check-circle text-xl"></div>
        <span className="font-medium">{message}</span>
      </div>
    );
  } catch (error) {
    console.error('Toast component error:', error);
    return null;
  }
}