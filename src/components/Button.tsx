import { clsx } from "clsx";
type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "ghost" };
export default function Button({ variant="primary", className, ...props }: Props) {
  return (
    <button
      {...props}
      className={clsx(
        "inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold transition",
        variant === "primary" && "bg-brand-500 text-white hover:bg-brand-600 shadow-soft",
        variant === "ghost" && "text-gray-700 hover:text-gray-900",
        className
      )}
    />
  );
}
