import { RootShell } from "@/components/RootShell";
import { latinFonts } from "../fonts";
import "../globals.css";

export { viewport } from "@/lib/metadata";

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return (
    <RootShell locale="en" fonts={latinFonts}>
      {children}
    </RootShell>
  );
}
