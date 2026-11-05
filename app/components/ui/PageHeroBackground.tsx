import { Grainient } from "./lazy-bits";

/** Soft brand gradient with grain behind a page hero. Put it first inside a section with className "page-hero". */
export function PageHeroBackground() {
  return (
    <div className="page-hero-bg" aria-hidden="true">
      <Grainient
        colors={["#F7F5FF", "#E4DDFF", "#B3A5FF", "#7B66FF"]}
        angle={120}
        speed={0.3}
        flow={0.5}
        silk={0.2}
        grainAmount={0.06}
        interactive={false}
        clickSwirl={false}
      />
    </div>
  );
}
