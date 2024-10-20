const TodoItem = ({ title, icon, additionalInfo }) => (
  <div className="flex items-center space-x-2 mb-2">
    <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
    <span className="text-lg text-gray-600">{title} test</span>
    {icon}
    {additionalInfo && (
      <span className="bg-orange-200 text-orange-800 px-2 py-1 rounded-full text-sm">
        {additionalInfo}
      </span>
    )}
  </div>
);

export default TodoItem;
