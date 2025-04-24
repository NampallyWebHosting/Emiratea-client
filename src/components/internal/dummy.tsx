import ScrollSyncComponent from "./ScrollSyncComponent";
import contentImag1 from "../../assets/leafLeft.svg";
import contentImag2 from "../../assets/leafStraight.svg";
import contentImag3 from "../../assets/leafBottom.svg";

const dummySections = [
  {
    id: "1",
    title: "Welcome",
    description: "This is the first step of the journey.",
    image: "https://plus.unsplash.com/premium_photo-1670148434900-5f0af77ba500?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3BsYXNofGVufDB8fDB8fHww",
    contentImage: contentImag1, // Correctly reference the image here
  },
  {
    id: "2",
    title: "Discover",
    description: "Find new ideas and insights here.",
    image: "https://images.unsplash.com/photo-1498462440456-0dba182e775b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BsYXNofGVufDB8fDB8fHww",
    contentImage: contentImag2, // Correctly reference the image here
  },
  {
    id: "3",
    title: "Build",
    description: "Now we build something great.",
    image: "https://images.unsplash.com/photo-1525431836161-e40d6846e656?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3BsYXNofGVufDB8fDB8fHww",
    contentImage: contentImag3, // Correctly reference the image here
  },
];

export default function Page() {
  return <ScrollSyncComponent sections={dummySections} />;
}
