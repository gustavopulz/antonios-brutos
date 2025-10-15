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
      <div className="container-page">
        {title && (
          <header className="mb-8">
            <h2 className="section-title">{title}</h2>
            {subtitle && <p className="section-subtitle">{subtitle}</p>}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
