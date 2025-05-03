const Loader = () => {
  return (
    <div className="flex items-center justify-center space-x-2">
      <div className="w-8 h-8 border-4 border-t-4 border-blue-500 rounded-full animate-spin"></div>
      <span className="text-white font-semibold">Loading...</span>
    </div>
  );
};

export default Loader;
