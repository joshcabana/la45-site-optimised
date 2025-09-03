import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import DonationMount from "@/components/DonationMount";
import StructuredData from "@/components/StructuredData";
import type { Metadata } from "next";

const ValueProps = dynamic(() => import("@/components/ValueProps"), {
  ssr: false,
  loading: () => <div className="min-h-[32rem]" />,
});
const SocialProof = dynamic(() => import("@/components/SocialProof"), {
  ssr: false,
  loading: () => <div className="min-h-[24rem]" />,
});
const FooterCABANA = dynamic(() => import("@/components/FooterCABANA"), {
  ssr: false,
  loading: () => <div className="min-h-[20rem]" />,
});
const QueueStats = dynamic(() => import("@/components/QueueStats"), { ssr: false });

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

/**
 * The home page stitches together all of the landing sections. It
 * intentionally avoids client-side interactivity other than the
 * sticky nav and hero, meaning most of the page can be statically
 * rendered for excellent performance. DonationMount is commented
 * out because donations are disabled while the product is in beta.
 */
export default function HomePage() {
  return (
    <>
      <main id="main">
        <Hero />
        <StructuredData />
        <DonationMount location="home" />
        <ValueProps />
        <SocialProof />
        <QueueStats />
        <FooterCABANA />
      </main>
      {/* Mobile bottom sticky CTA to improve primary action discoverability */}
      <div className="sm:hidden fixed bottom-0 inset-x-0 z-40 p-4 pb-[calc(1rem+env(safe-area-inset-bottom))] bg-black/70 backdrop-blur border-t border-white/10">
        <a
          href="/signup"
          className="block w-full text-center rounded-full bg-gold-500 text-ink font-medium px-6 py-3 min-h-[44px] hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
        >
          Enter the queue
        </a>
      </div>
    </>
  );
}
