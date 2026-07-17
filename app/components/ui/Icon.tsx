import { Zap, ShieldCheck, TrendingUp, LucideIcon } from "lucide-react";

const icons: Record<string, LucideIcon> = {
  Zap,
  ShieldCheck,
  TrendingUp,
};

export function Icon({ name, className }: { name: string; className?: string }) {
  const LucideIconComponent = icons[name];
  if (!LucideIconComponent) return null;
  return <LucideIconComponent className={className} />;
}