import ClosingBand from "@/components/ui/ClosingBand";

export default function QualityClosing() {
  return (
    <ClosingBand
      id="quality-enquiries"
      eyebrow="Quality enquiries"
      title="Questions about our quality approach?"
      paragraphs={[
        "For information on our quality systems, testing or the standards followed by our manufacturing partners, get in touch with our team.",
      ]}
    />
  );
}
