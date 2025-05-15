export const VisibilityControl = ({setShowCompleted, cleanTaskCompleted}) => {
    const handleDelete = () => {
        if (window.confirm("¿Estás seguro de que deseas eliminar todas las tareas completadas?")) {
            cleanTaskCompleted();   
        } 
    }

    return (
        <div className="flex items-center gap-2 my-4 justify-center">
            <input 
                type="checkbox"
                onChange={e => setShowCompleted(e.target.checked)}
                className="w-4 h-4 text-gray-700 bg-gray-100 border-gray-300 rounded focus:ring-gray-700 focus:ring-2 cursor-pointer"
            /> 
            <label className="text-gray-700">   
                Mostrar tareas completadas 
            </label>

            <button 
                onClick={handleDelete} 
                className="px-6 py-3 text-sm font-medium text-white bg-red-700 rounded-lg hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-300 shadow-sm"
            >
                Clear
            </button>
        </div>
    );
}