type Props = { title: string; price?: string; tag?: string };
export default function ProductCard({ title, price, tag }: Props) {
  return (
    <div className="card overflow-hidden">
      <div
        className="aspect-[4/5] bg-[image:var(--img-url)] bg-center bg-cover"
        style={{
          // Troque pela URL da imagem real do catálogo
          // Ex.: style={{ ['--img-url' as any]: 'url(/catalogo/aneis/aneis_01.jpg)' }}
          ["--img-url" as any]:
            "url(https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1200&auto=format&fit=crop)",
        }}
      />
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h4 className="font-medium">{title}</h4>
          {tag && <span className="text-xs text-brand">{tag}</span>}
        </div>
        {price && <p className="mt-1 text-sm text-white/70">{price}</p>}
      </div>
    </div>
  );
}
