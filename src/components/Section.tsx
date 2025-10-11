export default function Section({
  id,
  title,
  subtitle,
  children,
  light = false,
}: {
  id?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  light?: boolean;
}) {
  function clsx(...classes: (string | false | null | undefined)[]): string {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <section
      id={id}
      className={clsx(
        "py-20 md:py-28 transition-colors",
        light ? "bg-white" : "bg-brand-50/40"
      )}
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
            {title}
          </h2>
          {subtitle && <p className="mt-3 text-gray-700">{subtitle}</p>}
        </div>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
