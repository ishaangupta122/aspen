import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { LEGAL_NAME } from "@/lib/site";
import { contact } from "@/data/contact";
import PageShell from "@/components/layout/PageShell";
import PageBanner from "@/components/ui/PageBanner";

export const metadata = pageMetadata({
  title: "Privacy policy | Aspen Pharmaceuticals",
  description:
    "How Aspen Pharmaceuticals collects, uses and protects the information you share with us through this website's enquiry form.",
  path: "/privacy",
});

const UPDATED = "October 2026";

export default function PrivacyPage() {
  return (
    <PageShell>
      <PageBanner
        title="Privacy policy"
        crumbs={[{ label: "Privacy policy" }]}
        path="/privacy"
      />
      <section className="rf rf-section lg-section">
        <div className="rf-container lg-body">
          <p className="lg-meta">Last updated: {UPDATED}</p>
          <p>
            This policy explains what information {LEGAL_NAME} (“Aspen”, “we”,
            “us”) collects through this website, how we use it, and the choices
            you have. This website is intended for healthcare professionals,
            partners and visitors interested in our company and products.
          </p>

          <h2>Information we collect</h2>
          <p>
            We collect information only when you send us an enquiry through the
            contact form. This is the information you choose to enter:
          </p>
          <ul>
            <li>Enquiry type</li>
            <li>Full name</li>
            <li>Phone number</li>
            <li>Email address</li>
            <li>The message you write</li>
          </ul>
          <p>
            Please do not include personal medical details about yourself or any
            patient in your message. Our website does not provide medical
            advice.
          </p>

          <h2>How we use it</h2>
          <p>
            We use this information to read and respond to your enquiry,
            including product, distribution, partnership and careers enquiries,
            and to keep a record of that correspondence. We do not use it for
            advertising.
          </p>

          <h2>How your enquiry is delivered</h2>
          <p>
            When you submit the form, your enquiry is passed to an email
            delivery service, which forwards it to our team’s inbox. Your email
            address is set as the reply address so that we can respond to you
            directly.
          </p>

          <h2>Cookies and third-party content</h2>
          <p>
            We do not use advertising or analytics cookies on this website. The
            contact page includes an embedded Google Map. When it loads, Google
            may receive technical information such as your IP address and may
            set its own cookies, as described in{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google’s privacy policy
            </a>
            . Like most websites, our hosting provider may also keep standard
            technical logs (for example, IP address and pages requested) for
            security and reliability.
          </p>

          <h2>Sharing your information</h2>
          <p>
            We do not sell your personal information. We share it only with the
            service providers needed to run this website and deliver your
            enquiry, or where we are required to do so by law.
          </p>

          <h2>How long we keep it</h2>
          <p>
            We keep enquiry correspondence for as long as it is needed to
            respond to you and to maintain our business records, and then delete
            it.
          </p>

          <h2>Your choices</h2>
          <p>
            You can ask us what information we hold about you, ask us to correct
            it, or ask us to delete it, by contacting us using the details
            below.
          </p>

          <h2>Contact us</h2>
          <p>
            {contact.address.join(", ")}
            <br />
            Email: <a href={`mailto:${contact.email}`}>{contact.email}</a>
            <br />
            Phone: <a href={contact.phoneHref}>{contact.phone}</a>
          </p>
          <p>
            You can also use our <Link href="/contact">contact page</Link>.
          </p>

          <h2>Changes to this policy</h2>
          <p>
            We may update this policy from time to time. The date at the top of
            the page shows when it was last changed.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
