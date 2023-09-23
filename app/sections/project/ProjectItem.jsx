import { Suspense, useRef } from "react";
import { useInView } from "framer-motion";
import Link from "next/link";
import ImageGallery from "react-image-gallery";
import { Loader } from "components";
import { VscSourceControl } from "react-icons/vsc";
import { FiExternalLink } from "react-icons/fi";

import "react-image-gallery/styles/css/image-gallery.css";

// projectData.js

export const ProjectsData = [
	{
	  year: 2023,
	  title: "Project 1",
	  description: "Description of Project 1...",
	  images: ["project1-image1.jpg", "project1-image2.jpg"],
	  liveUrl: "https://example.com/project1",
	  repoUrl: "https://github.com/user/project1",
	  stack: ["React", "Node.js", "MongoDB"]
	},
	{
	  year: 2023,
	  title: "Project 2",
	  description: "Description of Project 2...",
	  images: ["project2-image1.jpg", "project2-image2.jpg"],
	  liveUrl: "https://example.com/project2",
	  repoUrl: "https://github.com/user/project2",
	  stack: ["React", "Express", "PostgreSQL"]
	},
	{
	  year: 2022,
	  title: "Project 3",
	  description: "Description of Project 3...",
	  images: ["project3-image1.jpg", "project3-image2.jpg"],
	  liveUrl: "https://example.com/project3",
	  repoUrl: "https://github.com/user/project3",
	  stack: ["Django", "Python", "SQLite"]
	},
	{
	  year: 2020,
	  title: "Project 4",
	  description: "Description of Project 4...",
	  images: ["project4-image1.jpg", "project4-image2.jpg"],
	  liveUrl: "https://example.com/project4",
	  repoUrl: "https://github.com/user/project4",
	  stack: ["React", "Node.js", "MongoDB"]
	}
  ];
  
export function ProjectItem({ project, index }) {
	const { description, images, liveUrl, repoUrl, stack, title } = project;
	const cardRef = useRef(null);
	const isInView = useInView(cardRef, { once: true });

	const galleryImages = images.map((img) => ({
		original: img,
		loading: "lazy"
	}));

	return (
		<article
			ref={cardRef}
			className="flex flex-col rounded-lg bg-card-light dark:bg-card-dark"
			style={{
				transform: isInView
					? "none"
					: `${index === 0 ? "translateY(250px)" : `translateY(${200 / index}px)`}`,
				opacity: isInView ? 1 : 0,
				transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${index === 0 ? 0 : 25 * index}ms`
			}}
		>
			<figure>
				<div className="aspect-[12/9.2] w-full h-full">
					<Suspense fallback={<Loader />}>
						<ImageGallery
							items={galleryImages}
							showPlayButton={false}
							showThumbnails={false}
							showIndex
							lazyload
							additionalClass="gallery-item"
						/>
					</Suspense>
				</div>
			</figure>

			<div className="flex-[2] px-5 py-6 text-center flex flex-col gap-10">
				<header className="flex-1 flex items-center justify-start flex-col gap-3">
					<h3 tabIndex="0" className="text-2xl font-bold">
						{title}
					</h3>
					<p tabIndex="0" className="leading-7 font-light">
						{description}
					</p>
				</header>


				// ... (previous code)

<footer className="flex flex-col gap-10">
  {!!stack.length && (
    <div className="flex-center flex-wrap gap-3">
      {stack.map((tag, tagIndex) => ( // Add tagIndex as the second argument
        <span
          key={tagIndex} // Use tagIndex as the key
          tabIndex="0"
          className="px-2 text-sm leading-normal rounded bg-badge-light/50 dark:bg-badge-dark"
        >
          {tag}
        </span>
      ))}
    </div>
  )}

  <div className="flex-center gap-10">
    {repoUrl && (
      <Link
        href={repoUrl}
        target="_blank"
        className="icon-link-btn"
        title="Go to Github repository"
      >
        <VscSourceControl />
        <span>Source</span>
      </Link>
    )}
    {liveUrl && (
      <Link
        href={liveUrl}
        target="_blank"
        className="icon-link-btn"
        title="Go to live address"
      >
        <FiExternalLink />
        <span>Demo</span>
      </Link>
    )}
  </div>
</footer>

// ... (rest of the component)

				{/* <footer className="flex flex-col gap-10">
					{!!stack.length && (
						<div className="flex-center flex-wrap gap-3">
							{stack.map((tag) => (
								<span
									key={tag}
									tabIndex="0"
									className="px-2 text-sm leading-normal rounded bg-badge-light/50 dark:bg-badge-dark"
								>
									{tag}
								</span>
							))}
						</div>
					)}

					<div className="flex-center gap-10">
						{repoUrl && (
							<Link
								href={repoUrl}
								target="_blank"
								className="icon-link-btn"
								title="Go to Github repository"
							>
								<VscSourceControl />
								<span>Source</span>
							</Link>
						)}
						{liveUrl && (
							<Link
								href={liveUrl}
								target="_blank"
								className="icon-link-btn"
								title="Go to live address"
							>
								<FiExternalLink />
								<span>Demo</span>
							</Link>
						)}
					</div>
				</footer> */}
			</div>
		</article>
	);
}
