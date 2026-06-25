export default function MissionStatement({ text }: { text: string }) {
  return (
    <p className="text-sm text-stone-500 border-l-2 border-stone-300 pl-3 mb-8 leading-relaxed">
      {text}
    </p>
  );
}
