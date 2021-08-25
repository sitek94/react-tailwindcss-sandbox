import clsx from 'clsx';

export default function App() {
  return (
    <div className="p-5">
      <h1 className="text-4xl font-bold text-center text-gray-700">
        Resizable Input
      </h1>
      <div className="flex justify-center p-10">
        <div>
          <input
            type="text"
            placeholder="Search..."
            className={clsx(
              // Text
              'text-sm font-medium leading-5 text-gray-600',

              // Disable defaults
              'focus:ring-0 focus:outline-none outline-none',

              // Borders
              'border rounded-xl focus:border-blue-700',

              // Transitions
              'transition-all duration-300',
              'w-24 focus:w-40',
            )}
          />
        </div>
      </div>
    </div>
  );
}
