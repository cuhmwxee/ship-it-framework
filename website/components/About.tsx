import PageHero from "@/components/PageHero";
import Section from "@/components/ui/Section";

const aboutCopy = {
  title: "About",
  paragraphs: [
    "Ship It! grew from a simple observation: software delivery is becoming increasingly diverse, but the fundamental workflow remains the same.",
    "Teams use different methodologies, tools, release strategies, and levels of automation. Some deploy continuously, others release monthly. Some rely heavily on AI-assisted development, while others follow more traditional workflows. Despite these differences, every software change begins with an input, is developed, validated, and eventually shipped.",
    "Many frameworks focus on how teams should work. Ship It! takes a different approach. It defines the minimum workflow shared by every software change, providing a common language for reasoning about software delivery without prescribing specific practices or tools.",
    "The project was inspired in part by Dave Thomas' work on software delivery. Like many ideas in software engineering, similar patterns emerge independently when different people try to simplify the same problem. Ship It! represents one interpretation of those shared principles, developed through practical software delivery experience.",
    "It is not intended to replace Scrum, Kanban, Shape Up, or other methodologies. Instead, it complements them by describing the journey every software change ultimately follows—from Input to Ship.",
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
