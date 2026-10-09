import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SamePageScrollTop from "@/components/ui/SamePageScrollTop";
import ScrollReveal from "@/components/ui/ScrollReveal";

/** Shared page chrome (wrapped in a plain block so Next's route scroll targets a non-sticky element): navbar, <main> content and footer. */
export default function PageShell({ children, navVariant }) {
  return (
    <div className="page-shell">
      <SamePageScrollTop />
      <ScrollReveal />
      <Navbar variant={navVariant} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
