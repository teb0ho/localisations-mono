const LoadingButton = () => {
  return (
    <button
      type="button"
      disabled={true}
      className="cursor-not-allowed inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
    >
      Loading...
    </button>
  );
};

export default LoadingButton;
