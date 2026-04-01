const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      {/* Icon Shape */}
      <div className="w-10 h-10 bg-lime-400 clip-shape"></div>

      {/* Text */}
      <h1 className="text-2xl font-bold text-gray-700">
        Zap<span className="text-gray-900">Shift</span>
      </h1>
    </div>
  );
};

export default Logo;