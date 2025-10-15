type Props = { title: string; price?: string; tag?: string; img?: string };
export default function ProductCard({ title, price, tag, img }: Props) {
  return (
    <div className="rounded-xl overflow-hidden bg-white/5 border border-white/10 shadow-lg hover:shadow-2xl transition duration-200 group">
      <div
        className="aspect-[4/5] bg-center bg-cover group-hover:scale-105 transition-transform duration-200"
        style={{
          backgroundImage: `url(${
            img ||
            "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1200&auto=format&fit=crop"
          })`,
        }}
      />
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h4 className="font-medium text-white text-lg">{title}</h4>
          {tag && (
            <span className="ml-2 px-2 py-0.5 rounded bg-brand/20 text-brand text-xs font-semibold uppercase tracking-wide">
              {tag}
            </span>
          )}
        </div>
        {price && <p className="mt-1 text-sm text-white/70">{price}</p>}
      </div>
    </div>
  );
}
