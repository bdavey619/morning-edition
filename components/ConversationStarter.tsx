export default function ConversationStarter({ question }: { question: string }) {
  return (
    <div className="mt-4 flex items-start gap-2">
      <span className="text-stone-300 text-sm mt-0.5 select-none">💬</span>
      <p className="text-sm text-stone-500 italic leading-snug">
        <span className="not-italic font-medium text-stone-400 text-xs uppercase tracking-wider mr-1.5">
          Starter:
        </span>
        {question}
      </p>
    </div>
  );
}
