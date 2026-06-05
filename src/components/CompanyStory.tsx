export default function CompanyStory() {
  return (
    <section className="bg-foreground text-primary-foreground py-20 md:py-28 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <span className="text-accent text-xs font-semibold tracking-[0.25em] uppercase mb-4 block">
              The Story
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Who we are, why we exist, and what makes us different.
            </h2>
          </div>
          <div className="space-y-6 text-primary-foreground/75 leading-relaxed text-base md:text-lg">
            <p>
              In a saturated digital environment, brands can no longer rely on vanity metrics or superficial noise. Cultural relevance is the only currency that converts audiences into loyal communities.
            </p>
            <p>
              We founded Cultre Boat to close the gap between strategic brand consulting and premium digital execution. We dig deep into brand history and market dynamics before writing a single line of copy or code, ensuring that the visual identities we build represent a business's true soul.
            </p>
            <p>
              What makes us unique is our commitment to engineering-driven visuals. By blending three-dimensional WebGL, physics particles, and responsive design systems with a rigorous editorial perspective, we create experiences that command attention.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
