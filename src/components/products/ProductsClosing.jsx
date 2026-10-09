import ClosingBand from "@/components/ui/ClosingBand";

export default function ProductsClosing() {
  return (
    <ClosingBand
      id="product-enquiries"
      eyebrow="Product enquiries"
      title="Looking for a specific product or partnership?"
      paragraphs={[
        "For product availability, pack details or distribution enquiries, write to us and our team will respond with the information you need.",
      ]}
    />
  );
}
