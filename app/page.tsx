import Hero from "@/components/Hero";
import DonationMount from "@/components/DonationMount";
import ValueProps from "@/components/ValueProps";
import QueueExplainer from "@/components/QueueExplainer";
import SafetyAnonymity from "@/components/SafetyAnonymity";
import SocialProof from "@/components/SocialProof";
import FAQ from "@/components/FAQ";
import FooterCABANA from "@/components/FooterCABANA";

/**
 * The home page stitches together all of the landing sections. It
 * intentionally avoids client‑side interactivity other than the
 * sticky nav and hero, meaning most of the page can be statically
 * rendered for excellent performance. DonationMount is commented
 * out because donations are disabled while the product is in beta.
 */
export default function HomePage() {
  return (
    <>
      <main id="main-content">
        <Hero />
        <DonationMount location="home" />
        <ValueProps />
        <QueueExplainer />
        <SafetyAnonymity />
        <SocialProof />
        <FAQ />
        <FooterCABANA />
      </main>
    </>
  );
}
