import RiBookLine  from "../assets/book-duotone.svg";
import PiBrainLight  from "../assets/brain-duotone.svg";
import PiSmileyNervousDuotone from "../assets/smiley-nervous-duotone.svg";
import IoSearch from "../assets/magnifying-glass-duotone.svg";
export default function ProblemSection() {
  const cards = [
    {
      icon: RiBookLine,
      title: "Mauvaise gestion des notes",
      description:
        "Les étudiants croulent sous des piles de notes, ayant du mal à les organiser et à les réviser efficacement.",
    },
    {
      icon: PiBrainLight,
      title: "Faible rétention des informations",
      description:
        "Malgré des heures passées à réviser, de nombreux étudiants constatent qu’ils ne retiennent qu’une fraction des informations.",
    },
    {
      icon: PiSmileyNervousDuotone,
      title: "Des révisions interminables",
      description: "Et si la clé était d’apprendre mieux, pas plus ?",
    },
    {
      icon: IoSearch,
      title: "Absence de suivi des progrès",
      description:
        "Sans outils pour suivre leurs progrès, les étudiants ignorent s’ils s’améliorent, ce qui limite leur efficacité.",
    },
  ];
  return (
    <section className="py-16 px-5 sm:px-6    md:px-16 xl:px-[250px] text-center bg-[#F6F5F4]">
      {/* Title and Description */}
      <div className=" max-w-[1050px] mx-auto">
        <span className="bg-white shadow-md px-3 py-2 rounded-full text-[18px] font-[500] leading-[27px] inline-flex items-center">
          🚨 Le Problème
        </span>
        <h2 className="text-[20px] md:text-[26px] lg:text-[33px]  leading-[46px] font-[700] mt-4">
          70 % des étudiants perdent du temps  avec des méthodes inefficaces
        </h2>
        <p className="text-[17px]  leading-[26px] text-[#545454] font-[500]   mt-4">
          Submergés d’informations, les étudiants peinent à retenir l’essentiel,
          accumulent du stress et s’épuisent avec des méthodes de révision dépassées.
        </p>
      </div>

      {/* 4-Column Grid */}
      <div className="grid grid-cols-1 space-y-5  md:grid-cols-2 mt-7  mx-auto">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`flex flex-col items-center px-6 py-10  text-center ${
            index % 2 === 0 ? "md:border-r border-gray-300" : ""
          }`}
        >
          <img src={card.icon} alt="icons" className="w-12 h-16"/>
          <h3 className="text-[20px] leading-[30px] text-[#1e1e1e]  font-[600] mt-3">{card.title}</h3>
          <p className="text-[#565656] font-[500]  p-1 text-[17px]">{card.description}</p>
        </div>
      ))}
    </div>
    </section>
  );
}
