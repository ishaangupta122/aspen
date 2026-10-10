import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SamePageScrollTop from "@/components/ui/SamePageScrollTop";
import ScrollReveal from "@/components/ui/ScrollReveal";

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
