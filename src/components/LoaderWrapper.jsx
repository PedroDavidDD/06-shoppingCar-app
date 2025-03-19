import React from "react";

const LoaderWrapper = ({ isLoading, children }) => {
  return isLoading ? (
    <div className="flex flex-col items-center justify-center h-40">
      <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      <h2 className="mt-2 text-lg font-semibold text-gray-700">Cargando...</h2>
    </div>
  ) : (
    children
  );
};

export default LoaderWrapper;
