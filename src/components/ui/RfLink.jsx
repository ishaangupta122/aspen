import Link from "@/components/ui/SiteLink";
import { ArrowRight } from "lucide-react";

export default function RfLink({ to, children }) {
  return (
    <Link className="rf-link px-0 py-[13px] gap-3 border-b [border-bottom-style:solid] border-b-current inline-flex items-center w-fit text-inherit font-semibold [transition:color_var(--dur-fast)_ease] [.rf-about-copy_&]:mt-[25px] [.rf-quality_&]:border-white/25 [.rf-quality_&]:text-white [.rf-about_.rf-about-copy_&]:px-0 [.rf-about_.rf-about-copy_&]:py-2.5 [.rf-about_.rf-about-copy_&]:border-b [.rf-about_.rf-about-copy_&]:[border-bottom-style:solid] [.rf-about_.rf-about-copy_&]:border-b-navy [.rf-about_.rf-about-copy_&]:mt-[30px] [.rf-about_.rf-about-copy_&]:text-navy [.rf-about_.rf-about-copy_&]:font-semibold [.rf-about_.rf-about-copy_&]:text-[15.5px] [.rf-about_.rf-about-copy_&]:leading-[1.2] [.rf-about_.rf-about-copy_&]:font-body [.rf-about_.rf-about-copy_&]:tracking-[0.01em] [.rf-about_.rf-about-copy_&]:[transition:border-color_0.25s_ease,color_0.25s_ease] [.rf-about_.rf-about-copy_&:hover]:[&&]:border-b-red [.rf-quality_.rf-quality-copy_&]:[&&]:px-0 [.rf-quality_.rf-quality-copy_&]:[&&]:py-2.5 [.rf-quality_.rf-quality-copy_&]:[&&]:border-b [.rf-quality_.rf-quality-copy_&]:[&&]:[border-bottom-style:solid] [.rf-quality_.rf-quality-copy_&]:[&&]:border-b-white [.rf-quality_.rf-quality-copy_&]:[&&]:mt-[30px] [.rf-quality_.rf-quality-copy_&]:[&&]:text-white [.rf-quality_.rf-quality-copy_&]:[&&]:font-semibold [.rf-quality_.rf-quality-copy_&]:[&&]:text-[15.5px] [.rf-quality_.rf-quality-copy_&]:[&&]:leading-[1.2] [.rf-quality_.rf-quality-copy_&]:[&&]:font-body [.rf-quality_.rf-quality-copy_&]:[&&]:tracking-[0.01em] [.rf-quality_.rf-quality-copy_&]:[&&]:[transition:border-color_0.25s_ease] min-[901px]:[.rf-quality_.rf-quality-copy_&]:self-start [.rf-quality_.rf-quality-copy_&:hover]:[&&&]:border-b-red-on-dark" href={to}>
      <span>{children}</span>
      <ArrowRight className="[transition:transform_var(--dur-fast)_ease] [.rf-link:hover_&]:[transform:translateX(3px)] [.rf-quality_.rf-quality-copy_.rf-link_&]:text-red-on-dark" size={17} />
    </Link>
  );
}
