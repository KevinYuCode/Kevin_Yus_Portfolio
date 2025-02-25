import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import React from "react";

const hackathons = [
  {
    title: "QHacks",
    image: "/images/leaf-hack.png",
    subHeading: "1st Place Winners",
    date: "2024",
    description:
      "LeafHack uses computer vision to assess plant health in real time, helping homeowners take quick action for a thriving garden. Users can store images in a personal database. Beyond disease detection, it offers personalized tips and fosters a community of sustainability enthusiasts, making plant care easier and more engaging.",
  },
  {
    title: "HACKTO",
    image: "/images/hack-to.png",
    subHeading: "1st Place Winners",
    date: "2023",
    description:
      "Minute Tutor is a web app that connects tutors with students for instant one-on-one support. Tutors can post session ads, and students can join active Zoom rooms for quick help. It bridges the gap between students needing affordable tutoring and tutors seeking extra income, making learning more accessible and efficient.",
  },
  {
    title: "QHacks",
    image: "/images/mind-hack.png",
    subHeading: "1st Place Winners",
    date: "2023",
    description:
      "Mind Hack is a web app that leverages OpenAI to provide step-by-step actions for improving mental health and productivity. It offers curated suggestions on what to focus on next, helping users build better habits and maintain progress with AI-driven guidance for a healthier and more efficient mindset.",
  },
  {
    title: "NewHacks",
    image: "/images/link-hack.png",
    subHeading: "Education Category Winner",
    date: "2022",
    description:
      "Link Hack is a web application used to help academic staff and students validate the reliability of their potential sources. LinkHack uses Natural Language Processing to summarize the contents of any website. In addition, it uses Beautiful Soup to scrape the article for relevant data and formats it into MLA format.",
  },
  {
    title: "Scotiabank S:\\Hacks",
    image: "/images/money-hack.png",
    subHeading: "3rd Place Overall",
    date: "2022",
    description:
      "MoneyHack is a financial advice and budgeting web app designed to help users improve financial literacy. It analyzes monthly statements, salary, age, and debt to provide personalized insights on spending, investing, and saving. By offering actionable guidance, MoneyHack empowers individuals to make informed financial decisions and build long-term stability.",
  },
  {
    title: "QHacks",
    image: "/images/cook-hack.png",
    subHeading: "Winner of Hammer of the Gods Prize @QHACKS",
    date: "2022",
    description:
      "Cook Hack is a recipe web app that simplifies the decision and planning process of cooking at home. The app implements computer vision to scan and identify ingredients from your camera and provides a list of recipes and step-by-step instructions for cooking those dishes.",
  },
  {
    title: "NewHacks",
    image: "/images/note-hack.png",
    subHeading: "3rd Place Overall",
    date: "2021",
    description:
      "Note Hack is a note-sharing web app that's sole purpose is to encourage others to share and collaborate together through digital note-sharing. The app implements Firebase services allowing personalized student profiles to upload, update and delete notes they want to share with others.",
  },
];

function Hacakthons() {
  return (
    <div className="mt-10">
      <h2 className="text-4xl">Hackathons</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mt-10">
        {hackathons.map((hackathon) => (
          <Card key={hackathon.description}>
            <div className="p-4">
              <img
                src={hackathon.image}
                alt={hackathon.title}
                className="object-cover rounded-lg shadow-sm"
              />
            </div>
            <CardHeader>
              <CardTitle>{hackathon.title}</CardTitle>
              <CardDescription className="flex flex-col gap-2">
                {hackathon?.subHeading && (
                  <Label>{hackathon?.subHeading}</Label>
                )}
                <Label>{hackathon.date}</Label>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>{hackathon.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Hacakthons;
