import Link from "@/components/ui/SiteLink";
import { ExternalLink } from "lucide-react";
import RfReveal from "@/components/ui/RfReveal";
import EnquiryForm from "@/components/contact/EnquiryForm";
import { contact } from "@/data/contact";

export default function ContactSection() {
  const address = contact.address.slice(1);
  return (
    <section className="rf px-0 py-[var(--section-y)] text-[color:var(--rf-ink)] [background:#fff] [&[id]]:scroll-mt-[70px]" id="enquiry">
      <div className="mx-auto w-[min(var(--page-max),calc(100%_-_2_*_var(--page-gutter)))] grid grid-cols-[minmax(0,7fr)_minmax(0,5fr)] gap-x-[clamp(32px,6vw,88px)] items-stretch max-[1024px]:gap-y-8 max-[1000px]:grid-cols-[1fr] max-[1000px]:gap-y-10">
        <div className="gap-6 flex flex-col min-w-0">
          <RfReveal className="flex motion-reduce:opacity-100 motion-reduce:[transform:none] motion-reduce:[transition:none] max-[1024px]:[grid-column:1] max-[1024px]:[grid-row:auto]">
            <div className="p-0 gap-3.5 border-l-0 [border-left-style:none] border-l-current w-full block flex-col justify-start self-start">
              <span className="block mb-[22px] text-red uppercase leading-[1.4] font-body !text-[14px] !font-bold !tracking-[0.12em]">Get in touch</span>
              <h2 className="mx-0 mt-3.5 mb-3 font-semibold text-[length:clamp(30px,3.2vw,40px)] leading-[1.2] font-body tracking-[-0.012em] text-navy">Send us an enquiry</h2>
              <p className="m-0 text-[#4a5b6c] not-italic font-normal text-[16.5px] leading-[1.7] font-body tracking-[var(--heading-tracking)] [word-spacing:0.06em] max-w-[54ch] last:m-0 last:text-[#4a5b6c] last:not-italic last:[font-synthesis:style] last:font-normal last:text-[16.5px] last:tracking-[0] last:leading-[1.7] last:font-body last:max-w-[54ch]">
                Whether you are a healthcare professional, distributor, partner
                or job seeker, tell us how we can help and our team will reply.
              </p>
            </div>
          </RfReveal>

          <RfReveal className="flex-1 flex motion-reduce:opacity-100 motion-reduce:[transform:none] motion-reduce:[transition:none] max-[1024px]:[grid-column:1] max-[1024px]:[grid-row:auto]">
            <div className="p-0 rounded-none border-0 border-none border-current w-full [background:transparent] mt-6">
              <EnquiryForm />
            </div>
          </RfReveal>
        </div>
        <div className="gap-6 flex flex-col min-w-0">
          <RfReveal className="flex-1 flex min-h-[320px] mt-0 motion-reduce:opacity-100 motion-reduce:[transform:none] motion-reduce:[transition:none] max-[1024px]:[grid-column:1] max-[1024px]:[grid-row:auto]">
            <div className="overflow-hidden flex-1 rounded-[6px] w-full relative min-h-[260px] [background:var(--rf-map-bg)]">
              <iframe className="inset-0 border-0 border-none border-current absolute w-full h-full"
                title="Aspen Pharmaceuticals location map"
                src={contact.mapSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                className="px-3.5 py-[9px] gap-1.5 rounded-[var(--radius-sm)] absolute left-3 top-3 inline-flex items-center [background:var(--c-white)] text-[color:var(--rf-blue)] font-semibold text-[13px] leading-[normal] font-heading [box-shadow:0_2px_10px_rgba(7,25,47,0.18)] focus-visible:rounded-[max(var(--ring-r,0px),3px)]"
                href={contact.mapLink}
                target="_blank"
                rel="noopener noreferrer">
                Open in Maps <ExternalLink size={14} />
              </a>
            </div>
          </RfReveal>

          <RfReveal className="flex mt-6 motion-reduce:opacity-100 motion-reduce:[transform:none] motion-reduce:[transition:none] max-[1024px]:[grid-column:1] max-[1024px]:[grid-row:auto]">
            <div className="px-0 border-t-2 border-l-0 [border-top-style:solid] [border-left-style:none] border-t-navy border-l-current w-full pt-5 pb-0 text-[16px] leading-[1.7] font-normal font-body text-[#4a5b6c]">
              <strong className="block mb-1.5 font-semibold text-[18px] leading-[1.35] font-body tracking-[0] text-navy">Aspen Pharmaceuticals — Head Office</strong>
              <address className="not-italic">
                {address.map((line) => (
                  <span className="block leading-[1.6]" key={line}>{line}</span>
                ))}
              </address>
              <dl className="mx-0 gap-0 border-t-0 [border-top-style:none] border-t-current mt-3 mb-0 pt-0 grid">
                <div className="px-0 py-[9px] gap-3 border-t [border-top-style:solid] border-t-[color:var(--c-line)] grid grid-cols-[64px_minmax(0,1fr)] items-baseline">
                  <dt className="flex-none w-auto text-red text-[13px] font-bold leading-[1.4] font-body tracking-[.14em] uppercase">Tel</dt>
                  <dd className="m-0 font-medium text-[15.5px] leading-normal font-body text-navy">
                    <a className="hover:text-red [&[href^='tel:']]:py-[9px] [&[href^='tel:']]:inline-block min-[901px]:[&[href^='tel:']]:py-0 text-navy" href={contact.phoneHref}>{contact.phone}</a>
                  </dd>
                </div>
                <div className="px-0 py-[9px] gap-3 border-t [border-top-style:solid] border-t-[color:var(--c-line)] grid grid-cols-[64px_minmax(0,1fr)] items-baseline">
                  <dt className="flex-none w-auto text-red text-[13px] font-bold leading-[1.4] font-body tracking-[.14em] uppercase">Email</dt>
                  <dd className="m-0 font-medium text-[15.5px] leading-normal font-body text-navy">
                    <a className="hover:text-red [&[href^='mailto:']]:py-[9px] [&[href^='mailto:']]:inline-block min-[901px]:[&[href^='mailto:']]:py-0 text-navy" href={`mailto:${contact.email}`}>{contact.email}</a>
                  </dd>
                </div>
                <div className="px-0 py-[9px] gap-3 border-t [border-top-style:solid] border-t-[color:var(--c-line)] grid grid-cols-[64px_minmax(0,1fr)] items-baseline">
                  <dt className="flex-none w-auto text-red text-[13px] font-bold leading-[1.4] font-body tracking-[.14em] uppercase">Hours</dt>
                  <dd className="m-0 font-medium text-[15.5px] leading-normal font-body text-navy">{contact.hours}</dd>
                </div>
              </dl>
            </div>
          </RfReveal>
        </div>
      </div>
      <div className="mx-auto w-[min(var(--page-max),calc(100%_-_2_*_var(--page-gutter)))]">
        <p className="mx-0 border-t [border-top-style:solid] border-t-[color:var(--c-line)] mt-10 mb-0 text-[#4a5b6c] text-[14px] leading-[1.6] font-normal font-body pt-5 max-w-none">
          We use your details only to respond to your enquiry. See our{" "}
          <Link className="py-0 text-navy underline decoration-red underline-offset-[3px] inline hover:text-red" href="/privacy">privacy policy</Link>.
        </p>
      </div>
    </section>
  );
}
