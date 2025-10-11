import { clsx } from "clsx";
type Props = React.InputHTMLAttributes<HTMLInputElement> & { label: string; error?: string };
export function Input({ label, error, className, ...props }: Props) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-gray-700">{label}</span>
      <input
        {...props}
        className={clsx(
          "mt-1 w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-300",
          error && "border-red-300 focus:ring-red-200",
          className
        )}
      />
      {error && <span className="mt-1 block text-xs text-red-500">{error}</span>}
    </label>
  );
}
