import { PLACEHOLDER } from "@/content/demo";

/**
 * An external link, or — for demo placeholder accounts — the same thing
 * drawn as a label that goes nowhere.
 */
export function MaybeLink({ href, className = "", children }: { href: string; className?: string; children: React.ReactNode }) {
  if (href === PLACEHOLDER) {
    return <span className={`cursor-default ${className}`}>{children}</span>;
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}
