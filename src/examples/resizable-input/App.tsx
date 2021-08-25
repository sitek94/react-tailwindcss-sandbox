import clsx from 'clsx';
console.log(process.env);
export default function App() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center text-gray-700">
        TailwindCSS Template
      </h1>
      <div className="flex justify-center p-10">
        <Example />
      </div>
    </div>
  );
}

function Example() {
  return (
    <div>
      <input
        type="text"
        placeholder="Search Sources"
        className={clsx(
          'transition-all duration-1000 overflow-ellipsis',
          'w-12 focus:w-24',
          'text-sm font-medium leading-5',
          'border rounded-xl',
          'text-gray-600',
          // Focus
          'focus:border-red-500 focus:ring-0 focus:outline-none outline-none',
          // 'py-3 rounded-xl border border-gray-300',
        )}
      />
    </div>
  );
}
