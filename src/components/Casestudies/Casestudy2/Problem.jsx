import data from "../../../data/caseStudies.json";

// Import images statically
import Image1 from "../../../assets/Tile1.jpg"; // Replace with your actual path
import Image2 from "../../../assets/Tile2.jpg"; // Replace with your actual path

const Problem = () => {
  // Find the case study with id 1
  const caseStudy = data.caseStudies.find(cs => cs.id === 2);

  if (!caseStudy) {
    return <div>Loading...</div>; // Handle the case where the data is not found
  }

  const { problem } = caseStudy;

  // Map image filenames from JSON to actual imported images
  const imageMap = {
    "Tile1.jpg": Image1,
    "Tile2.jpg": Image2,
  };

  return (
    <div className="flex flex-col items-center max-w-7xl mx-auto px-5">
      {/* Image Section */}
      <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 pt-10 lg:pt-32">
        {problem.images.map((image, index) => {
          // Map JSON image filename to imported image
          const imageSrc = imageMap[image.src] || image.src; // Fallback to the original src if no mapping is found

          return (
            <img
              key={index}
              src={imageSrc}
              alt={image.alt}
              className="w-full sm:w-1/2"
            />
          );
        })}
      </div>

      {/* Text Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start w-full pt-10 gap-5">
        {/* Heading */}
        <h1 className="text-5xl md:text-8xl lg:text-[10rem] font-medium sm:w-1/2 flex flex-wrap">
          {"The Problems".split(" ").map((word, wordIndex) => (
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
        <div className="lg:text-xl ml-5">
          <p className="pb-5 font-semibold">{problem.description}</p>
          <ul>
            {problem.challenges.map((challenge, index) => (
              <li key={index} className="pb-2">
                <span className="font-semibold">{challenge.semibold}</span>
                {challenge.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Problem;
