import ProjectCard from "../Card/projectCard";

interface projectsDataFace {
  title: string;
  desc: string;
  url: string;
}
[];

const projectsData: projectsDataFace[] = [
  {
    title: "Program",
    desc: "An open-source codebase for sharing programming solutions. Good collection of `good first issue`",
    url: "https://program.codinasion.org/",
  },
  {
    title: "Bot",
    desc: "A collection of github bots for automating tasks. Build using Probot.",
    url: "https://bots.codinasion.org/",
  },
  {
    title: "Packages",
    desc: "A collection of npm packages written in typescript. These packages contains some useful typescript functions.",
    url: "https://packages.codinasion.org/",
  },
];

export default function Projects() {
  return (
    <section className="p-3 relative py-10 xl:container mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
      <h2 className="text-xl font-bold col-span-full text-black dark:text-white capitalize">
        Projects by codinasion
      </h2>
      <hr className="col-span-full opacity-50" />
      {projectsData.map((item) => (
        <ProjectCard
          key={item.title}
          title={item.title}
          desc={item.desc}
          url={item.url}
        />
      ))}
    </section>
  );
}
