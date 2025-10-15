type Props = { title: string; desc: string };
export default function FeatureCard({ title, desc }: Props) {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-6 border border-white/10 transition-transform hover:scale-105 hover:shadow-2xl duration-200">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-white/70">{desc}</p>
    </div>
  );
}
