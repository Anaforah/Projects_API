export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");

  res.status(200).json([
    {
      title: "LoopOS software",
      image: "https://raw.githubusercontent.com/Anaforah/Projects_API/main/public/LoopOS.png",
      tags: ["UX/UI Design", "Research"],
      description: "Summer Internship",
      links: [
        { url: "https://www.behance.net/gallery/237217699/LoopOS-software-UIUX-design", text: "Study Case" }
      ]
    },
    {
      title: "NETWORKin identity",
      image: "https://raw.githubusercontent.com/Anaforah/Projects_API/main/public/LoopOS.png",
      tags: ["Graphic Design", "Branding"],
      description: "Volunteer project",
      links: [
        { url: "https://www.behance.net/gallery/222436073/NETWORKin-Logotype", text: "Study Case" }
      ]
    },
    {
      title: "Octy Mobile App",
      image: "https://raw.githubusercontent.com/Anaforah/Projects_API/main/public/LoopOS.png",
      tags: ["UI/UX design", "Research", "User Experience"],
      description: "University project",
      links: [
        { url: "https://www.behance.net/gallery/231067023/OCTY-learning-mobile-app-UIUX-Study-case", text: "Study Case" }
      ]
    },
    {
      title: "Asas Vingativas",
      image: "https://raw.githubusercontent.com/Anaforah/Projects_API/main/public/LoopOS.png",
      tags: ["Animation", "Video"],
      description: "University project",
      links: [
        { url: "https://www.behance.net/gallery/206542949/Asas-Vingativas-Video", text: "Video" }
      ]
    }
  ]);
}
