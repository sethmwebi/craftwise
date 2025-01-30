import ProgramPage from '../minipages/ProgramPage';
import Footer from '../../components/Footer/Footer';

const EmergingLeadersProgram = () => {
  const programData = {
    title: "*EMERGING* LEADERS PROGRAMME",
    subtitle: "Preparing for Senior Leadership Roles",
    backgroundImage: "https://i.imgur.com/1NTh8oR.png",
    features: [
      {
        title: "Strategic Impact",
        description: "Drive initiatives aligned with organizational goals and manage multi-stakeholder environments.",
        icon: "🎯"
      },
      {
        title: "Advanced People Management",
        description: "Coach and mentor teams while fostering innovation and psychological safety.",
        icon: "👥"
      },
      {
        title: "Change Management",
        description: "Lead through organizational transitions and adapt leadership styles.",
        icon: "🔄"
      },
      {
        title: "Innovation and Influence",
        description: "Align teams around goals and encourage creative problem-solving.",
        icon: "💡"
      }
    ],
    tools: [
      "Strategic Planning Frameworks",
      "Performance Dashboards",
      "Leadership Mastery Portal",
      "Change Management Toolkit"
    ],
    outcome: "Leaders equipped to handle complex challenges and drive organizational transformation."
  };
  return (
    <>
      <ProgramPage {...programData} />
      <Footer />
    </>
  );

};

export default EmergingLeadersProgram;