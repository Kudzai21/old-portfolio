import data from "../../../data/caseStudies.json";

// Import images statically
import Image1 from "../../../assets/Tile5.jpg"; // Replace with your actual path

const Outcomes = () => {
  // Find the case study with id 1
  const caseStudy = data.caseStudies.find(cs => cs.id === 2);

  if (!caseStudy) {
    return <div>Loading...</div>; // Handle the case where the data is not found
  }

  const { outcomes } = caseStudy;

  // Map image filenames from JSON to actual imported images
  const imageMap = {
    "Tile5.jpg": Image1,
  };

  return (
    <div className="flex flex-col items-center max-w-7xl mx-auto px-5 py-10 lg:pt-32">
      {/* Image on Top */}
      <img
        src={imageMap[outcomes.images[0].src] || outcomes.images[0].src} // Map or fallback
        alt={outcomes.images[0].alt}
        className="w-full"
      />

      {/* Text Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start w-full pt-10 gap-5">
        {/* Heading */}
        <h1 className="text-5xl md:text-8xl lg:text-[10rem] font-medium sm:w-1/2 flex flex-wrap">
          {"The Outcomes".split(" ").map((word, wordIndex) => (
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
          <p className="pb-5 font-semibold">{outcomes.description}</p>
          <ul>
            {outcomes.objectives.map((objective, index) => (
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

export default Outcomes;
