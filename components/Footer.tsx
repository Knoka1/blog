import { generalSite } from "@/constants/constants";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="mb-6 mt-14 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <a target="_blank" rel="noreferrer" href="mailto:hello@example.com">
            <span className="sr-only">Mail</span>
          </a>
          <a target="_blank" rel="noreferrer" href={generalSite.links.linkedin}>
            <span className="sr-only">Twitter</span>
          </a>
          <a target="_blank" rel="noreferrer" href={generalSite.links.github}>
            <span className="sr-only">GitHub</span>
          </a>
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-muted-foreground">
          <a href={generalSite.links.personalSite} target="_blank">
            {generalSite.author}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
