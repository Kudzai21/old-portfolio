import data from "../../../data/caseStudies.json";

// Import images statically
import ExampleImage from "../../../assets/images3/project.jpg"; // Replace with your actual path

const Project = () => {
  // Find the case study with id 1
  const caseStudy = data.caseStudies.find((cs) => cs.id === 3);

  if (!caseStudy) {
    return <div>Loading...</div>; // Handle the case where the data is not found
  }

  const { projectGoals } = caseStudy;

  // Map image filenames from JSON to actual imported images
  const imageMap = {
    "project.jpg": ExampleImage, // Map JSON image name to imported image
  };

  // Get the correct image source based on the case study data
  const imageSrc = imageMap[projectGoals.images[0].src] || projectGoals.images[0].src; // Fallback to the original src if no mapping is found

  return (
    <div className="flex flex-col items-center max-w-7xl mx-auto pt-10 px-5">
      {/* Image on Top */}
      <img
        src={imageSrc}
        alt={projectGoals.images[0].alt}
        className="w-full"
      />

      {/* Text Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start w-full pt-10 gap-5">
        {/* Heading */}
        <h1 className="text-5xl md:text-8xl lg:text-[10rem] font-medium sm:w-1/2 flex flex-wrap">
          {"Project Goals".split(" ").map((word, wordIndex) => (
            <span key={wordIndex} className="inline-block">
              {Array.from(word).map((char, index) => (
                <span
                  key={index}
                  className={`inline-block hover-stretch-letter font-six-caps ${
                    char === " " ? "w-2" : ""
                  }`}
                >
                  {char}
                </span>
              ))}
              {wordIndex < 1 && <span className="inline-block w-4"></span>} {/* Space between words */}
            </span>
          ))}
        </h1>

        {/* Paragraph */}
        <div className="text-base lg:text-xl ml-5">
          <p className="pb-5 font-semibold">{projectGoals.description}</p>
          <ul>
            {projectGoals.objectives.map((objective, index) => (
              <li key={index} className="pb-2">
                <span className="font-semibold">{objective.semibold}</span>
                {objective.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Project;
