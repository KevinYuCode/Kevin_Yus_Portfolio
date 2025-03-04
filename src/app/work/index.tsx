import { PageTitle } from "@/components/ui/page";
import React from "react";
const jobs = [
  {
    title: "Software Developer",
    company: "Conflict Analytics",
    startDate: "Feb 2024",
    endDate: "Jan 2025",
    logo: "/images/open-justice.png",
    technologies: [
      "Next.JS",
      "Azure",
      "LangChain",
      "Pinecone",
      "Python",
      "Selenium",
      "Web Security",
      "JWT",
    ],
    description: [
      "Designed and developed a RAG AI-chatbot web application using Next.JS, OpenAI, and Pinecone",
      "Web scraped and vectorized 500+ law documents to implement RAG using Python and Selenium",
      "Created RESTful API endpoints to stream RAG-generated LLM responses using Next.JS and LangChain",
      "Configured an Azure VPS and set up the cloud network to deliver HTTP traffic to a Flask server",
      "Implemented JWT authentication for APIs and web services to prevent unauthorized access to resources",
    ],
  },
  {
    title: "Software Developer",
    company: "Distributive",
    startDate: "Jan 2023",
    endDate: "Oct 2024",
    logo: "/images/DCP.png",
    technologies: [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "UI/UX",
      "i18n",
      "a11y",
      "Playwright",
    ],
    description: [
      "Collaborated with the CTO to architect two React applications to organize code modularity and re-usability",
      "Presented my work directly to the CEO, helping him attract leads such as Bell, Nokia, and Vector Institute",
      "Contributed to UI/UX design by improving HTML semantics and writing automated Playwright tests",
      "Added i18n and a11y attributes to support language localization and accessibility standards",
    ],
  },
  {
    title: "Software Consultant",
    company: "Smith School of Business",
    startDate: "June 2024",
    endDate: "Sept 2024",
    logo: "/images/smith.png",
    technologies: [
      "Next.JS",
      "TypeScript",
      "Zod",
      "SQLite",
      "Sequelize",
      "Docker",
      "Google Search API",
    ],
    description: [
      "Built a privacy-focused, offline, Next.JS application to manage student profiles in an SQLite database",
      "Used React Hook Form and Zod to allow professors to upload their class CSV files into the application",
      "Utilized Google Search API and ProxyCurl to find LinkedIn URLs and fetch public student information",
      "Recruited a developer and delegated workloads to Dockerize the application, enabling smooth deployment",
    ],
  },
  {
    title: "Software Engineering Intern",
    company: "PwC",
    startDate: "May 2023",
    endDate: "Sept 2023",
    logo: "/images/pwc.png",
    technologies: ["Angular", ".NET6", "MySQL", "HTML", "CSS"],
    description: [
      "Developed an internal file-sharing web application using Angular, serving 7,800 employees",
      "Created dynamic email templates using .NET6, HTML, and CSS, reducing manual email creation",
      "Wrote pre-deployment SQL scripts to automatically update email templates whenever changes were made",
    ],
  },
  {
    title: "Co-Founder, CTO",
    company: "Ivory OMS",
    startDate: "May 2022",
    endDate: "Sept 2022",
    logo: "/images/printer.png",
    technologies: [
      "React",
      "Node.js",
      "Firebase",
      "Express",
      "PM2",
      "R-Pi",
      "Git",
    ],
    description: [
      "Created a React-based order management system for four restaurants, reducing service time by 60%",
      "Implemented error monitoring for printer failures using Firebase, improving error detection and debugging",
      "Developed a Node.js script on an R-Pi to print to a thermal printer, reducing order creation time by 98.3%",
      "Adapted to evolving client requirements by using Git’s cherry-pick command to select implemented features",
    ],
  },
];

function Work() {
  return (
    <div>
      <PageTitle>Work Experience</PageTitle>
      <section className="mt-10 flex flex-col gap-8">
        {jobs.map((job) => (
          <div
            key={job.company}
            className="grid grid-cols-[auto_1fr] border-border border-b-2 gap-x-4 gap-y-2 pb-10"
          >
            {/* Company Logo */}
            <div className="border-border border-2 p-2 rounded-lg flex col-start-1 self-start">
              <img
                className="w-9 md:w-16 h-9 md:h-16 object-contain"
                src={job.logo}
                alt={job.company}
              />
            </div>

            {/* Job Title and Company */}
            <div className="flex flex-col col-start-1 md:col-start-2 row-start-2 md:row-start-1 col-span-2 md:col-span-1 gap-y-2">
              {/* Start and End Date */}
              <span className="text-md md:text-2xl text-gray-500">
                {job.startDate} - {job.endDate}
              </span>

              {/* Job Title and Company */}
              <h3 className="text-lg md:text-3xl">
                {job.title} at{" "}
                <span className="italic underline-offset-4 underline">
                  {job.company}
                </span>{" "}
              </h3>

              {/* Technologies */}
              <div className="flex flex-wrap gap-x-2">
                {job?.technologies?.map((tech, i) => (
                  <p className="text-md md:text-2xl text-blue-400" key={tech}>
                    {tech}
                    {i !== job.technologies.length - 1 ? "," : ""}
                  </p>
                ))}
              </div>
            </div>

            {/* Job Description */}
            <ul className="flex flex-col gap-2 list-disc ml-8 mt-4 col-start-1 col-span-2 md:col-span-1 md:col-start-2 ">
              {job.description?.map((desc) => (
                <li className="text-sm md:text-2xl text-gray-500 " key={desc}>
                  {desc}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Work;
