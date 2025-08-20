type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
};
export default function Section({ eyebrow, title, description }: Props) {
  return (
    <section className="my-16">
      {eyebrow && <p className="text-xs uppercase tracking-wider text-slate-500">{eyebrow}</p>}
      <h2 className="mt-2 text-2xl font-semibold">{title}</h2>
      {description && <p className="mt-2 max-w-2xl text-slate-600">{description}</p>}
    </section>
  );
}