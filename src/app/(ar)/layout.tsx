import { RootShell } from "@/components/RootShell";
import { arabicFonts } from "../fonts";
import "../globals.css";

export { viewport } from "@/lib/metadata";

export default function ArabicLayout({ children }: { children: React.ReactNode }) {
  return (
    <RootShell locale="ar" fonts={arabicFonts}>
      {children}
    </RootShell>
  );
}
