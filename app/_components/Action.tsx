import { Button } from "@/components/ui/button";
import React from "react";

const Action = () => {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Let&apos;s Solve This Together.</h2>
        <p className="text-xl mb-8">
          Ready for marketing that works like a knife through butter?
        </p>
        <h3 className="text-2xl font-semibold mb-6">
          Get Your Free Marketing Consultation Today:
        </h3>
        <Button size="lg" variant="secondary" className="text-lg">
          YES, I WANT THAT!
        </Button>
      </div>
    </section>
  );
};

export default Action;
