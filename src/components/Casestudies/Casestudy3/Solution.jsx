import data from "../../../data/caseStudies.json";

// Import images statically
import Image1 from "../../../assets/images3/solution1.jpg"; // Replace with your actual path
import Image2 from "../../../assets/images3/solution2.jpg"; // Replace with your actual path
import Image3 from "../../../assets/images3/solution3.jpg"; // Replace with your actual path

const Solution = () => {
  // Find the case study with id 1
  const caseStudy = data.caseStudies.find(cs => cs.id === 3);

  if (!caseStudy) {
    return <div>Loading...</div>; // Handle the case where the data is not found
  }

  const { solution } = caseStudy;

  // Map image filenames from JSON to actual imported images
  const imageMap = {
    "solution1.jpg": Image1,
    "solution2.jpg": Image2,
    "solution3.jpg": Image3,
  };

  return (
    <div className="flex flex-col items-center max-w-7xl mx-auto px-5">
      {/* Image Section */}
      <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 pt-10 lg:pt-32">
        {solution.images.map((image, index) => {
          // Map JSON image filename to imported image
          const imageSrc = imageMap[image.src] || image.src; // Fallback to the original src if no mapping is found

          return (
            <img
              key={index}
              src={imageSrc}
              alt={image.alt}
              className="w-full sm:w-1/3"
            />
          );
        })}
      </div>

      {/* Text Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start w-full pt-10 gap-5">
        {/* Heading */}
        <h1 className="text-5xl md:text-8xl lg:text-[10rem] font-medium flex flex-wrap">
          {"The Solutions".split(" ").map((word, wordIndex) => (
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
          <p className="pb-5 font-semibold">{solution.description}</p>
          <ul>
            {solution.solutions.map((item, index) => (
              <li key={index} className="pb-4">
                <span className="font-semibold">{item.semibold}</span>
                <ul className="list-disc ml-5 mt-2">
                  {item.text.map((bullet, bulletIndex) => (
                    <li key={bulletIndex}>{bullet}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Solution;
