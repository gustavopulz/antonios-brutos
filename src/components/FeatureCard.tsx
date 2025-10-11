import type { ReactNode } from "react";
import { clsx } from "clsx";

type Props = {
  icon?: ReactNode;
  title: string;
  description: string;
  className?: string;
};

export default function FeatureCard({ icon, title, description, className }: Props) {
  return (
    <div
      className={clsx(
        "rounded-2xl border border-brand-100 bg-gradient-to-b from-white to-brand-50/30 p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1",
        className
      )}
    >
      {icon && (
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 text-brand-700 shadow-inner">
          {icon}
        </div>
      )}
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-gray-700 leading-relaxed">{description}</p>
    </div>
  );
}
