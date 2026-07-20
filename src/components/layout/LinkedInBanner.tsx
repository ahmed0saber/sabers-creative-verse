import { useState } from "react";
import { Linkedin, X } from "lucide-react";

const LinkedInBanner = () => {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <a
      href="https://www.linkedin.com/in/ahmed0saber/"
      target="_blank"
      rel="noopener noreferrer"
      className="linkedin-banner"
    >
      <div className="linkedin-banner-icon">
        <Linkedin className="w-4 h-4" />
      </div>
      <span className="linkedin-banner-text">
        My portfolio may get outdated, but my LinkedIn doesn't — let's connect!
      </span>
      <button
        className="linkedin-banner-close"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setDismissed(true);
        }}
        aria-label="Dismiss banner"
      >
        <X className="w-[18px] h-[18px]" />
      </button>
    </a>
  );
};

export default LinkedInBanner;
