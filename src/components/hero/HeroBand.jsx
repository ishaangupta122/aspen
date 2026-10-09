import { therapeuticAreas } from "@/data/site";
import { SERVED_STATES } from "@/lib/site";

// Three plain facts, drawn from the same data as the rest of the site so they always agree.
const items = [
  {
    title: "250+ products",
    text: `Across ${therapeuticAreas.length} therapeutic areas`,
  },
  {
    title: `${SERVED_STATES.length} states served`,
    text: "Across North India",
  },
  {
    title: "Since 2010",
    text: "Serving healthcare professionals",
  },
];

/** Frosted highlights band set into the bottom of the hero. */
export default function HeroBand() {
  return (
    <section className="hl" aria-label="Aspen at a glance">
      <ul className="hl-band">
        {items.map(({ title, text }) => (
          <li key={title}>
            <p>
              <strong>{title}</strong>
              <span>{text}</span>
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
