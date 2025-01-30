import ProgramPage from '../minipages/ProgramPage';
import Footer from '../../components/Footer/Footer';

const LegacyLeadersProgram = () => {
  const programData = {
    title: "LEGACY LEADERS PROGRAMME",
    subtitle: "Shaping Organizational Transformation",
    backgroundImage: "https://i.imgur.com/qsWTkfs.png",
    features: [
      {
        title: "Visionary Leadership",
        description: "Craft and communicate a compelling vision for long-term growth.",
        icon: "🔭"
      },
      {
        title: "Executive Decision-Making",
        description: "Navigate complexity with risk management and data-driven strategies.",
        icon: "📊"
      },
      {
        title: "Culture Building",
        description: "Embed values of inclusion, diversity, and high performance.",
        icon: "🌟"
      },
      {
        title: "Legacy and Mentorship",
        description: "Mentor emerging leaders and build a lasting impact.",
        icon: "🤝"
      }
    ],
    tools: [
      "Executive Leadership Portal",
      "360-Degree Feedback Tool",
      "Leadership Shadowing Opportunities",
      "Strategic Planning Framework"
    ],
    outcome: "Senior leaders who inspire, innovate, and build a thriving organizational culture."
  };
  return (
    <>
      <ProgramPage {...programData} />
      <Footer />
    </>
  );

};

export default LegacyLeadersProgram;