import { MenuPage } from "@/components/MenuPage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("ar", "/menu");

export default function Page() {
  return <MenuPage locale="ar" />;
}
