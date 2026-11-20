import Link from "@/components/ui/SiteLink";
import { ArrowRight } from "lucide-react";

export default function RfLink({ to, children }) {
  return (
    <Link className="rf-link px-0 py-[13px] gap-3 inline-flex items-center w-fit text-inherit font-semibold [transition:color_var(--dur-fast)_ease] [.rf-about-copy_&]:mt-[25px] [.rf-quality_&]:text-white [.rf-about_.rf-about-copy_&]:px-0 [.rf-about_.rf-about-copy_&]:py-2.5 [.rf-about_.rf-about-copy_&]:mt-[30px] [.rf-about_.rf-about-copy_&]:text-navy [.rf-about_.rf-about-copy_&]:font-semibold [.rf-about_.rf-about-copy_&]:text-[15.5px] [.rf-about_.rf-about-copy_&]:leading-[1.2] [.rf-about_.rf-about-copy_&]:font-body [.rf-about_.rf-about-copy_&]:tracking-[0.01em] [.rf-quality_.rf-quality-copy_&]:[&&]:px-0 [.rf-quality_.rf-quality-copy_&]:[&&]:py-2.5 [.rf-quality_.rf-quality-copy_&]:[&&]:mt-[30px] [.rf-quality_.rf-quality-copy_&]:[&&]:text-white [.rf-quality_.rf-quality-copy_&]:[&&]:font-semibold [.rf-quality_.rf-quality-copy_&]:[&&]:text-[15.5px] [.rf-quality_.rf-quality-copy_&]:[&&]:leading-[1.2] [.rf-quality_.rf-quality-copy_&]:[&&]:font-body [.rf-quality_.rf-quality-copy_&]:[&&]:tracking-[0.01em] min-[901px]:[.rf-quality_.rf-quality-copy_&]:self-start" href={to}>
      <span>{children}</span>
      <ArrowRight className="[transition:transform_var(--dur-fast)_ease] [.rf-link:hover_&]:[transform:translateX(3px)] [.rf-quality_.rf-quality-copy_.rf-link_&]:text-red-on-dark" size={17} />
    </Link>
  );
}
