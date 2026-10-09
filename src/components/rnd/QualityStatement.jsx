import ClosingBand from "@/components/ui/ClosingBand";
import { quality, cta } from "@/data/rnd";

export default function QualityStatement() {
  return (
    <ClosingBand
      id="quality"
      eyebrow="Quality built into development"
      title={quality.title}
      paragraphs={[quality.paragraphs[0]]}
      label={cta.title}
    />
  );
}
