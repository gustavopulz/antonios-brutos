type Props = { title: string; desc: string };
export default function FeatureCard({ title, desc }: Props) {
  return (
    <div className="card p-6">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-white/70">{desc}</p>
    </div>
  );
}
