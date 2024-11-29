interface Experience {
  position: string;
  companyName: string;
  companyUrl: string;
  date: string;
  duration: string;
  location: string;
  description: string;
  techstack: string[];
}

export default function ExperiencesSection() {
  const experiences: Experience[] = [
    {
      position: 'Fullstack consultant developer',
      companyName: 'IPPON Technologies',
      companyUrl: 'https://fr.ippon.tech',
      date: 'SEPT 2023 - NOV 2024',
      duration: '1 year, 1 month',
      location: 'Bordeaux, France',
      description: "Providing web development expertise: I adapt to my client's environment and system architecture, supporting both of his backend and frontend needs.",
      techstack: []
    },
    {
      position: 'Fullstack developer internship',
      companyName: 'IPPON Technologies',
      companyUrl: 'https://fr.ippon.tech',
      date: 'MAR 2023 - AUG 2023',
      duration: '6 months',
      location: 'Bordeaux, France',
      description: "Creation a web app for IPPON's office, with the goal of centralizing all collaborators resources and tools. I designed the UI/UX with Figma. The frontend was made with React and the backend with Spring/Java. I managed to let the web app accept custom plugins, allowing anyone to add new features. The app was then deployed with AWS.",
      techstack: ['react', 'redux', 'java', 'spring', 'docker', 'aws']
    },
    {
      position: 'Fullstack developer internship',
      companyName: 'ITEA',
      companyUrl: 'https://www.itea.fr',
      date: 'AUG 2019 - DEC 2019',
      duration: '5 months',
      location: 'Nantes, France',
      description: 'ITEA is the IT service provider of the "Gîtes de France", building websites for housing rental structure all over France.\
      I developed VueJS map components using LeafletJS, for the B2C websites used by thousands of users to rent accomodations.\n\
      I also maintained the B2B website used by the rental structures to manage their reservations, using PHP and SQL.\n',
      techstack: ['vuejs-2', 'php', 'sql']
    },
  ];

  return (
    <section id="experiences" className="section">
      <ul className="flex flex-col gap-4">
        {experiences.map((xp, key) => 
          <li key={key} className="group w-full flex flex-col p-3 rounded-md hover:bg-slate-800 hover:text-white">
            <div className="flex flex-row justify-between text-xs font-base pb-2">
              <span>{xp.duration}</span>
              <span>{xp.date}</span>
            </div>

            <span className="text-lg font-bold group-hover:text-blue-500">{xp.position}</span>

            <a className="flex items-center pb-2 gap-1 group-hover:text-blue-500"
              href={xp.companyUrl} 
              target="_blank">
              {xp.companyName}

              <svg width="12.0718" height="11.9204" viewBox="0 0 20 20">
                <path className="group-hover:fill-blue-500" fill="#ffffff" fillOpacity="1" d="M10.4773 6.35376L9.17847 7.67212C10.4675 7.77954 11.3074 8.1604 11.9421 8.79517C13.6511 10.5042 13.6414 12.926 11.9519 14.6155L8.75855 17.7991C7.05933 19.4983 4.65698 19.5081 2.948 17.8088C1.23902 16.0901 1.24878 13.6877 2.948 11.9885L4.86206 10.0745C4.58862 9.45923 4.52027 8.72681 4.62769 8.09204L1.75659 10.9534C-0.577391 13.2971-0.596922 16.6174 1.76636 18.9807C4.13941 21.3538 7.45972 21.3342 9.7937 19.0002L13.1335 15.6506C15.4773 13.3069 15.4968 9.98657 13.1238 7.62329C12.5085 7.00806 11.7273 6.56861 10.4773 6.35376ZM10.2332 14.4006L11.532 13.0823C10.2429 12.9846 9.40308 12.594 8.76831 11.9592C7.05933 10.2502 7.06909 7.82837 8.75855 6.13892L11.9421 2.95532C13.6511 1.25611 16.0535 1.24634 17.7625 2.95532C19.4714 4.66431 19.4519 7.07642 17.7625 8.76587L15.8484 10.6799C16.1218 11.3049 16.1804 12.0276 16.0828 12.6624L18.9539 9.80103C21.2878 7.45728 21.3074 4.14673 18.9441 1.77368C16.571-0.599363 13.2507-0.579832 10.907 1.76392L7.57691 5.10376C5.23316 7.44751 5.21362 10.7678 7.58667 13.1311C8.20191 13.7463 8.98316 14.1858 10.2332 14.4006Z"/>
              </svg>
            </a>

            <p className="text-xs whitespace-pre-line">{xp.description}</p>

            <div className="flex flex-row gap-1 flex-wrap mt-4">
              {xp.techstack.map(tech => 
                <div className="flex px-2 py-0 border border-gray-800 rounded-lg text-xs group-hover:bg-blue-950 group-hover:border-blue-900">
                  {tech}
                </div>
              )}
            </div>
          </li>
        )}
      </ul>
    </section>
  );
}
