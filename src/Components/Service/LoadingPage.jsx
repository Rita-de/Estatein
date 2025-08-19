const LoadingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-purple-800 text-white">
      <div className="w-12 h-12 border-4 border-white/20 border-t-sky-400 rounded-full animate-spin"></div>
      <p className="mt-4 text-sm opacity-80">loading, please wait...</p>
    </div>
  );
};

export default LoadingPage;
