import { HomePage } from "@/components/HomePage";
import { pageMetadata } from "@/lib/metadata";

export const revalidate = 300;
export const metadata = pageMetadata("ar");

export default function Page() {
  return <HomePage locale="ar" />;
}
