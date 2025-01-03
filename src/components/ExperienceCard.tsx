import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { FaGlobe } from "react-icons/fa6";
import type { ExperienceDetailDocument } from "../../prismicio-types";
import Link from "next/link";

type ExperienceCardProps = {
  experience: ExperienceDetailDocument<string>;
  index: number;
  totalExperiences: number;
};

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className="group card prose card-compact border-base-300 bg-base-200/50 shadow-lg backdrop-blur-md transition-all duration-500 hover:scale-[1.02] hover:bg-base-200/80 hover:shadow-xl">
      <figure className="pt-6">
        <PrismicNextImage
          className="h-24 w-24 rounded-lg shadow-md transition-transform duration-500 group-hover:scale-110"
          field={experience.data.company_logo}
        />
      </figure>
      <div className="card-body">
        <div className="flex">
          <p className="text-sm font-medium text-base-content/70">
            <span>{experience.data.start_date} </span> -{" "}
            <span>{experience.data.end_date}</span>{" "}
          </p>
        </div>
        <PrismicRichText field={experience.data.job_title} />
        <PrismicRichText field={experience.data.experience_summary} />
        <div className="flex flex-wrap gap-2">
          {experience.data.skill_tags.length > 0 &&
            experience.data.skill_tags.map((tag) => (
              <span
                className="badge badge-secondary badge-sm font-medium shadow-sm transition-all duration-300 hover:scale-105"
                key={tag.tag}
              >
                {tag.tag}
              </span>
            ))}
        </div>
        <div className="mt-6 flex items-center gap-4">
          <Link
            href={`experience/${experience.uid}`}
            className="btn btn-primary btn-sm text-primary-content no-underline shadow-md transition-all duration-300 hover:scale-105"
          >
            Learn More &rarr;
          </Link>
          <div className="hover:text-accent-focus flex items-center text-accent transition-all duration-300 hover:scale-105">
            <FaGlobe className="mr-2" />
            <PrismicNextLink field={experience.data.project_website}>
              Visit Project &rarr;
            </PrismicNextLink>
          </div>
        </div>
      </div>
    </div>
  );
}
