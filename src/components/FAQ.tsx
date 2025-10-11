type Item = { q: string; a: string };
export default function FAQ({ items }: { items: Item[] }) {
  return (
    <div className="divide-y divide-gray-200 rounded-2xl border border-gray-100">
      {items.map((it, idx) => (
        <details key={idx} className="group p-6">
          <summary className="cursor-pointer list-none font-medium text-gray-900">
            {it.q}
          </summary>
          <p className="mt-2 text-gray-600">{it.a}</p>
        </details>
      ))}
    </div>
  );
}
