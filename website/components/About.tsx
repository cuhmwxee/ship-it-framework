import PageHero from "@/components/PageHero";
import Section from "@/components/ui/Section";

const aboutCopy = {
  title: "About",
  paragraphs: [
    "Ship It! comes from practical software delivery experience.",
    "It was inspired in part by Dave Thomas' ideas about software delivery, and the framework itself was developed independently.",
    "Many methods converge on similar patterns. Ship It! focuses on the minimum workflow required to deliver validated software.",
  ],
};

export default function About() {
  return (
    <Section id="about" labelledBy="about-title">
      <div className="ds-content">
        <PageHero title={aboutCopy.title} titleId="about-title">
          {aboutCopy.paragraphs.map((paragraph) => (
            <p key={paragraph} className="ds-type-body">{paragraph}</p>
          ))}
        </PageHero>
      </div>
    </Section>
  );
}
