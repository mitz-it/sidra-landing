export enum plotEnum {
  TREE,
  ROOT,
  TEXT,
  PLOT_TREE
}

export const plot = [
  {
    title: "Plot 1",
    plotType: plotEnum.PLOT_TREE,
    description:
      "Kuwait is a <strong>land where resilience thrives</strong>, and this resilience is embodied by the enduring Sidra tree. Its roots anchor deeply in the soil, while its branches reach out, weaving together the <strong>voices of over 100 nationalities</strong>.",
  },
  {
    title: "Plot 2",
    plotType: plotEnum.TREE,
    image: "/src/assets/plots/expatriateTree/tree.webp",
    description:
      "Here, <mark>expatriates</mark> outnumber locals, making up 68.3% of the total population and <mark>75% of the workforce.</mark> The country's cultural tapestry is shaped by these diverse communities of expatriates, who constitute the largest part of Kuwait's social fabric.",
  },
  {
    title: "Plot 3",
    plotType: plotEnum.ROOT,
    image: "/src/assets/plots/bornRoot/root.webp",
    description: "In fact, among those <strong>born in the country, 41% are not considered Kuwaitis citizens.</strong> This disparity is reflected in <strong>people's expressed sense of belonging and in how they feel treated based on their nationality.</strong> In a survey conducted by our team, Kuwaitis reported a stronger <mark>sense of belonging</mark> and fairness in treatment compared to Non Kuwaitis."
  },
  {
    title: "Plot 4",
    plotType: plotEnum.ROOT,
    image: "/src/assets/plots/residentRoot/root.webp",
    description: "At the same time, <strong>non-Kuwaiti participants</strong> in the survey—<strong>both those born in the country and those who were not—</strong>reported <mark style='background-color:#5f939a; color: white'>more negative experiences</mark> in public spaces and expressed a weaker connection to Kuwait, partly because they don't always feel <mark style='color: white'>ethnically welcomed.</mark>"
  },
  {
    title: "Plot 5",
    plotType: plotEnum.TREE,
    image: "/src/assets/plots/positivityTree/tree.webp",
    description: "Despite this, <mark style='background-color:#FC9918; color: white'>80%</mark> <strong>of all respondents</strong> - Kuwaitis and residents - agree they have <mark style='background-color:#FC9918; color: white'>positive memories</mark> of living in Kuwait. Each memory is tied to their ethnicity, family, and their personal story, making Kuwait a shared <strong>Map of Memories</strong>."
  }
];

export const nationalities = [
  { color: "#FC9918", name: "Kuwait", percent: "32%", pathName: "kuwait" },
  { color: "#FFC982", name: "India", percent: "21%", pathName: "india" },
  { color: "#A92922", name: "Egypt", percent: "13%", pathName: "egypt" },
  {
    color: "#E15F58",
    name: "Bangladesh",
    percent: "6%",
    pathName: "bangladesh"
  },
  {
    color: "#D9AC86",
    name: "Philippines",
    percent: "5%",
    pathName: "philippines",
  },
  {
    color: "#C77024",
    name: "Saudi Arabia",
    percent: "3%",
    pathName: "saudi_arabia",
  },
  { color: "#53A890", name: "Sri Lanka", percent: "3%", pathName: "sri_lanka" },
  { color: "#3A7ED9", name: "Syria", percent: "3%", pathName: "syria" },
  { color: "#84A9F0", name: "Nepal", percent: "2%", pathName: "nepal" },
  { color: "#A9DFE6", name: "Pakistan", percent: "2%", pathName: "pakistan" },
  { color: "#B9B9B9", name: "Others", percent: "10%", pathName: "others" },
];
