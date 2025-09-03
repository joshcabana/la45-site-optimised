// A stub implementation of the donation helper. In a production build
// this would integrate with Stripe or another payment provider. Here we
// simply log to the console so the button appears functional during
// development.
import { gaEvent } from "@/utils/ga";

export function startDonation(amount: number) {
  gaEvent("donation_confirm", { amount });
  console.log(`Donation initiated for $${amount}`);
}