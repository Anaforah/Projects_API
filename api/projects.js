export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");

  res.status(200).json([
    {
      title: "LoopOS software",
      image: "https://drive.google.com/uc?export=view&id=1Cn2WNcnDtXByrsBbtcgC2y7E45rFWqaS",
      tags: ["UX/UI Design", "Research"],
      description: "Summer Internship",
      links: [
        { url: "https://www.behance.net/gallery/237217699/LoopOS-software-UIUX-design", text: "Study Case" }
      ]
    },
    {
      title: "NETWORKin identity",
      image: "https://drive.google.com/uc?export=view&id=1Cn2WNcnDtXByrsBbtcgC2y7E45rFWqaS",
      tags: ["Graphic Design", "Branding"],
      description: "Volunteer project",
      links: [
        { url: "https://www.behance.net/gallery/222436073/NETWORKin-Logotype", text: "Study Case" }
      ]
    },
    {
      title: "Octy Mobile App",
      image: "https://drive.google.com/uc?export=view&id=1Cn2WNcnDtXByrsBbtcgC2y7E45rFWqaS",
      tags: ["UI/UX design", "Research", "User Experience"],
      description: "University project",
      links: [
        { url: "https://www.behance.net/gallery/231067023/OCTY-learning-mobile-app-UIUX-Study-case", text: "Study Case" }
      ]
    },
    {
      title: "Asas Vingativas",
      image: "https://drive.google.com/uc?export=view&id=1Cn2WNcnDtXByrsBbtcgC2y7E45rFWqaS",
      tags: ["Animation", "Video"],
      description: "University project",
      links: [
        { url: "https://www.behance.net/gallery/206542949/Asas-Vingativas-Video", text: "Video" }
      ]
    }
  ]);
}
