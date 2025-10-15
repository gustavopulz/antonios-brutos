import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  id?: string;
  title?: string;
  subtitle?: string;
  className?: string;
}>;

export default function Section({
  id,
  title,
  subtitle,
  className,
  children,
}: Props) {
  return (
    <section id={id} className={`section ${className ?? ""}`}>
      <div className="container-page py-10 px-4 lg:px-20 xl:px-40">
        {title && (
          <header className="mb-8">
            <h2 className="section-title text-white font-bold text-2xl">
              {title}
            </h2>
            {subtitle && (
              <p className="section-subtitle text-white/70">{subtitle}</p>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
