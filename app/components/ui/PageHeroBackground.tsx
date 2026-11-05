import { Grainient } from "./lazy-bits";

/** Soft brand gradient with grain behind a page hero. Put it first inside a section with className "page-hero". */
export function PageHeroBackground() {
  return (
    <div className="page-hero-bg" aria-hidden="true">
      <Grainient
        intro={false}
        speed={0}
        grainAnimated={false}
        dpr={1}
        colors={["#F7F5FF", "#E4DDFF", "#B3A5FF", "#7B66FF"]}
        angle={120}
        silk={0.2}
        grainAmount={0.06}
        interactive={false}
        clickSwirl={false}
      />
    </div>
  );
}
