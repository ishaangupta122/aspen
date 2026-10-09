import { pageMetadata } from "@/lib/seo";
import JsonLd from "@/components/ui/JsonLd";
import { pageSchema } from "@/lib/schema";
import PageShell from "@/components/layout/PageShell";
import PageBanner from "@/components/ui/PageBanner";
import ContactSection from "@/components/contact/ContactSection";
import Careers from "@/components/contact/Careers";

export const metadata = pageMetadata({
  title: "Contact Aspen Pharmaceuticals | Ghaziabad, Uttar Pradesh",
  description:
    "Send an enquiry to Aspen Pharmaceuticals, find our office in Sahibabad, Ghaziabad, check working hours, or explore careers with us.",
  path: "/contact",
});

const schema = pageSchema("ContactPage", {
  name: metadata.title,
  description: metadata.description,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <PageShell>
      <JsonLd data={schema} />
      <PageBanner
        title={
          <>
            Talk to the <br />
            Aspen team
          </>
        }
        crumbs={[{ label: "Contact" }]}
        path="/contact"
      />
      <Careers />
      <ContactSection />
    </PageShell>
  );
}
