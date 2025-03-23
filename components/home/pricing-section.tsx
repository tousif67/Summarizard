import { cn } from "@/lib/utils";
import { ArrowRightIcon, CheckCircleIcon } from "lucide-react";
import Link from "next/link";

type PriceType = {
  name: string;
  price: number;
  description: string;
  items: string[];
  id: string;
  PaymentLink: string;
  priceId: string;
};

const plans = [
  {
    name: "Starter",
    price: 10,
    description: "Perfect for occasional use",
    items: ["5 PDF summaries", "Standard processing speed", "Email support"],
    id: "starter",
    PaymentLink: "",
    priceId: "",
  },
  {
    name: "Pro",
    price: 20,
    description: "For professionals and teams",
    items: [
      "Unlimited PDF summaries",
      "Priority processing speed",
      "24/7 priority support",
      "Markdown export",
    ],
    id: "pro",
    PaymentLink: "",
    priceId: "",
  },
];

const PricingCard = ({
  name,
  price,
  description,
  items,
  id,
  PaymentLink,
  priceId,
}: PriceType) => {
  return (
    <div className="relative w-full h-full max-w-lg hover:scale-105 hover:shadow-lg transition-all duration-300">
      <div
        className={cn(
          "relative flex flex-col h-full gap-4 lg:gap-8 z-10 p-6 rounded-xl border-[1px] border-gray-500/20 shadow-md",

          id === "pro" && "border-amber-500 gap-5 border-2"
        )}
      >
        <div>
          <p className="text-lg lg:text-xl font-bold capitalize">{name}</p>
          <p className="text-base-content/80 mt-2">{description}</p>
        </div>

        <div className="flex gap-2">
          <p className="text-5xl tracking-tight font-extrabold">${price}</p>
          <p className="text-xs semibold mt-2">USD</p>
          <p className="text-base-content/80 mt-2">/month</p>
        </div>

        <div className="space-y-2 leading-relaxed text-base flex-1">
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <CheckCircleIcon className="w-4 h-4 text-green-500" />
              <span>{item}</span>
            </li>
          ))}
        </div>
        <div className=" space-y-2 flex justify-center w-full">
          <Link
            href={PaymentLink}
            className={cn(
              "w-full flex items-center justify-center rounded-full gap-2 bg-gradient-to-r from-amber-300 to-amber-700 hover:from-amber-700 hover:to-amber-300 text-white border-2 px-4 py-2 ",
              id === "pro"
                ? "border-amber-900"
                : "border-amber-100 from-amber-300 to-amber-400"
            )}
          >
            Buy Now <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default function PricingSection() {
  return (
    <section>
      <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold text-amber-500">
          Pricing
        </h2>
      </div>
      <div
        className="relative flex justify-center items-center flex-col 
        lg:flex-row lg:items-stretch
      gap-8"
      >
        {plans.map((plan) => (
          <PricingCard key={plan.id} {...plan} />
        ))}
      </div>
    </section>
  );
}
