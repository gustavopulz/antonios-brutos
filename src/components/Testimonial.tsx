export default function Testimonial({
  text,
  author,
}: { text: string; author: string }) {
  return (
    <figure className="rounded-2xl border border-gray-100 p-6 bg-white shadow-sm">
      <blockquote className="text-gray-700 leading-relaxed">“{text}”</blockquote>
      <figcaption className="mt-4 text-sm text-gray-500">— {author}</figcaption>
    </figure>
  );
}
