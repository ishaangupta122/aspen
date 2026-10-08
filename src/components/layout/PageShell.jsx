import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/ui/RevealObserver";
import SamePageScrollTop from "@/components/ui/SamePageScrollTop";

/** Shared page chrome (wrapped in a plain block so Next's route scroll targets a non-sticky element): scroll-reveal observer, navbar, <main> content and footer. */
export default function PageShell({ children }) {
  return (
    <div className="page-shell">
      <RevealObserver />
      <SamePageScrollTop />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
