import ProgramPage from '../minipages/ProgramPage';
import Footer from '../../components/Footer/Footer';

const NewManagersProgram = () => {
  const programData = {
    title: "NEW MANAGERS PROGRAMME",
    subtitle: "Transitioning from Individual Contributor to Leader",
    backgroundImage: "https://i.imgur.com/Y94ziMX.png",
    features: [
      {
        title: "Leadership Foundations",
        description: "Navigate the peer-to-leader shift with authority and empathy.",
        icon: "👥"
      },
      {
        title: "Team Dynamics",
        description: "Manage performance, resolve conflicts, and foster collaboration.",
        icon: "🤝"
      },
      {
        title: "Strategic Thinking",
        description: "Use decision-making frameworks to lead with clarity and impact.",
        icon: "🎯"
      },
      {
        title: "Personal Leadership Brand",
        description: "Define and communicate your vision while building trust.",
        icon: "⭐"
      }
    ],
    tools: [
      "Leadership Toolkit",
      "Behavioral Assessments",
      "Simulated Scenarios",
      "Performance Tracking Dashboard"
    ],
    outcome: "Confident, empathetic managers capable of inspiring and driving team success."
  };

  return (
    <>
      <ProgramPage {...programData} />
      <Footer />
    </>
  );
};

export default NewManagersProgram;
