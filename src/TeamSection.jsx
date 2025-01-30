import { useEffect, useRef } from 'react';

const teamMembers = [
  { name: 'Pete Kariuki', role: 'Team Member', image: 'https://i.imgur.com/rlRlE2z.png' },
  { name: 'Terry Kiruki', role: 'Team Member', image: 'https://i.imgur.com/DXxBjNY.png' },
  { name: 'Joe Gachira', role: 'Team Member', image: 'https://i.imgur.com/QLu0K8p.png' },
  { name: 'Maryann Somba', role: 'Team Member', image: 'https://i.imgur.com/ejnhfW5.png' },
  { name: 'Bernard Kariuki', role: 'Team Member', image: 'https://i.imgur.com/oxpubqd.png' },
  { name: 'Sheila Antoinnette', role: 'Team Member', image: 'https://i.imgur.com/gwUpKbt.png' },
  { name: 'Ngibuini Mwaura', role: 'Team Member', image: 'https://i.imgur.com/nk0SIDn.png' },
  { name: 'Carol Kaye', role: 'Team Member', image: 'https://i.imgur.com/Z7ifO8X.png' },
  { name: 'Edwin Mutoro', role: 'Team Member', image: 'https://i.imgur.com/pJabNvR.png' },
  { name: 'Nguka Ojwang', role: 'Team Member', image: 'https://i.imgur.com/Nhf2Obx.png' },
  { name: 'Sylvia Njeri', role: 'Team Member', image: 'https://i.imgur.com/Z0H1ghr.png' },
  { name: 'Sam Kimera', role: 'Team Member', image: 'https://i.imgur.com/JyJR0Tu.png' },
  { name: 'Peris Wambui', role: 'Team Member', image: 'https://i.imgur.com/FkFPQoG.png' },
  { name: 'Denise Kibisu', role: 'Team Member', image: 'https://i.imgur.com/7cYbZXv.png' }
];

const TeamSection = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
    };

    const intervalId = setInterval(scroll, 30);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className=" mb-16 pt-6 py-16 bg-gradient-to-br from-[rgb(94,50,47)] to-[rgb(61,18,25)] text-white overflow-hidden">
      <h2 className=" font-montserrat text-4xl font-bold text-center mb-2">
        Your Partners in Growth and Excellence
      </h2>
      <h3 className=" font-montserrat text-2xl text-center mb-12 ">
        Empowering Africa's Top Talent!
      </h3>
      
      <div className="w-full overflow-hidden" ref={scrollRef}>
        <div className="flex gap-8 p-8 whitespace-nowrap">
          {[...teamMembers, ...teamMembers].map((member, index) => (
            <div
              key={index}
              className="flex-none w-[280px] p-6 bg-white/5 rounded-2xl text-center transform transition-all duration-300 hover:-translate-y-2 hover:bg-[rgb(73,37,47)]/10"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-[200px] h-[200px] mx-auto mb-4 rounded-full overflow-hidden border-4 border-[rgb(71,34,46)]/10">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                {member.name}
              </h3>
              <p className="text-[rgb(74,38,47)]">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
