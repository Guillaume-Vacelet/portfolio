import LinkIcon from "@/_components/linkIcon";
import React from "react";

export default function ResumeListCard() {
  const resumes = [
    { label: "French", shortLabel: "Fr", url: "/static/documents/resume-french.pdf" },
    { label: "English", shortLabel: "En", url: "/static/documents/resume-english.pdf" },
    { label: "Korean", shortLabel: "Kr", url: "/static/documents/resume-korean.pdf" },
  ];

  return (
    <div className="size-full flex flex-col p-[2px] bg-cardBackground rounded-2xl border-cardBorder border-[0.35px] shadow-sm">
      <h3 className="text-lg font-medium p-4">My resumes</h3>
      <div className="h-full flex flex-col gap-1 bg-white p-1 rounded-[14px] border-cardBorder border-[0.35px]">
        {resumes.map((resume, i) =>
          <React.Fragment key={i}>
            <a className="h-full flex flex-row items-center justify-between p-3 rounded-[10px] hover:bg-cardHover transition-colors duration-300"
              href={resume.url} target="_blank">
              <span className="text-base font-normal leading-none">{resume.label}</span>
              <LinkIcon />
            </a>
            {(i + 1) < resumes.length ? <hr className="h-[0.5px] border-none bg-cardBackground" /> : ''}
          </React.Fragment>
        )}
      </div>
    </div>
  );
}