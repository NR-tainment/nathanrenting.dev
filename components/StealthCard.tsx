import { Redacted } from "@/components/sketch";

export function StealthCard({
  category,
  description,
  status,
}: {
  category: string;
  description: React.ReactNode;
  status: string;
}) {
  return (
    <div className="border border-zinc-800 rounded-md p-5 hover:border-cyan-700 transition-colors">
      <div className="font-mono text-xs uppercase tracking-widest text-cyan-400 mb-3">
        {category}
      </div>
      <p className="text-sm text-zinc-300 leading-relaxed mb-4">
        {description}
      </p>
      <div className="flex items-center justify-between gap-2">
        <div className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
          {status}
        </div>
        <Redacted variant="block">PROJECT NAME</Redacted>
      </div>
    </div>
  );
}
