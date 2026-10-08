import { pageMetadata } from "@/lib/seo";
import PageShell from "@/components/layout/PageShell";
import PageBanner from "@/components/ui/PageBanner";
import ContactSection from "@/components/contact/ContactSection";
import Careers from "@/components/contact/Careers";

export const metadata = pageMetadata({
  title: "Contact & Careers | Aspen Pharmaceuticals",
  description:
    "Send an enquiry to Aspen Pharmaceuticals, find our Ghaziabad office, and explore careers with us.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <PageShell>
      <PageBanner title="Contact us" crumbs={[{ label: "Contact" }]} />
      <ContactSection />
      <Careers />
    </PageShell>
  );
}
