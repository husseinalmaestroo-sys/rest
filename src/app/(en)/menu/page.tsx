import { MenuPage } from "@/components/MenuPage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("en", "/menu");

export default function Page() {
  return <MenuPage locale="en" />;
}
