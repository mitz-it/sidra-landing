import expatriateTree from '../assets/plots/expatriateTree/img.webp'
import bornRoot from '../assets/plots/bornRoot/img.webp'
import residentRoot from '../assets/plots/residentRoot/img.webp'
import positivityTree from '../assets/plots/positivityTree/img.webp'
import tree from '../assets/plots/tree/full_tree.webp'
import kuwaitTree from '../assets/plots/tree/kuwait.webp'
import indiaTree from '../assets/plots/tree/india.webp'
import egyptTree from '../assets/plots/tree/egypt.webp'
import bangladeshTree from '../assets/plots/tree/bangladesh.webp'
import philippinesTree from '../assets/plots/tree/philippines.webp'
import saudiArabiaTree from '../assets/plots/tree/saudi_arabia.webp'
import sriLankaTree from '../assets/plots/tree/sri_lanka.webp'
import syriaTree from '../assets/plots/tree/syria.webp'
import nepalTree from '../assets/plots/tree/nepal.webp'
import pakistanTree from '../assets/plots/tree/pakistan.webp'
import othersTree from '../assets/plots/tree/others.webp'

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
    image: expatriateTree,
    description:
      "Here, <mark>expatriates</mark> outnumber locals, making up 68.3% of the total population and <mark>75% of the workforce.</mark> The country's cultural tapestry is shaped by these diverse communities of expatriates, who constitute the largest part of Kuwait's social fabric.",
  },
  {
    title: "Plot 3",
    plotType: plotEnum.ROOT,
    image: bornRoot,
    description:
      "In fact, among those <strong>born in the country, 41% are not considered Kuwaiti citizens.</strong> This disparity is reflected in <strong>people's expressed sense of belonging and in how they feel treated based on their nationality.</strong> In a survey conducted by our team, Kuwaitis reported a stronger <mark style='color: white'>sense of belonging</mark> and fairness in treatment compared to Non Kuwaitis.",
  },
  {
    title: "Plot 4",
    plotType: plotEnum.ROOT,
    image: residentRoot,
    description:
      "At the same time, <strong>non-Kuwaiti participants</strong> in the survey—<strong>both those born in the country and those who were not—</strong>reported <mark style='background-color:#5f939a; color: white'>more negative experiences</mark> in public spaces and expressed a weaker connection to Kuwait, partly because they don't always feel <mark style='color: white'>ethnically welcomed.</mark>",
  },
  {
    title: "Plot 5",
    plotType: plotEnum.TREE,
    image: positivityTree,
    description:
      "Despite this, <mark style='background-color:#FC9918; color: white'>80%</mark> <strong>of all respondents</strong> - Kuwaitis and residents - agree they have <mark style='background-color:#FC9918; color: white'>positive memories</mark> of living in Kuwait. Each memory is tied to their ethnicity, family, and their personal story, making Kuwait a shared <strong>Map of Memories</strong>.",
  },
];

export const fullTree = tree;

export const nationalities = [
  { color: "#FC9918", name: "Kuwait", percent: "32%", image: kuwaitTree },
  { color: "#FFC982", name: "India", percent: "21%", image: indiaTree },
  { color: "#A92922", name: "Egypt", percent: "13%", image: egyptTree },
  {
    color: "#E15F58",
    name: "Bangladesh",
    percent: "6%",
    image: bangladeshTree
  },
  {
    color: "#D9AC86",
    name: "Philippines",
    percent: "5%",
    image: philippinesTree
  },
  {
    color: "#C77024",
    name: "Saudi Arabia",
    percent: "3%",
    image: saudiArabiaTree
  },
  { color: "#53A890", name: "Sri Lanka", percent: "3%", image: sriLankaTree },
  { color: "#3A7ED9", name: "Syria", percent: "3%", image: syriaTree },
  { color: "#84A9F0", name: "Nepal", percent: "2%", image: nepalTree },
  { color: "#A9DFE6", name: "Pakistan", percent: "2%", image: pakistanTree },
  { color: "#B9B9B9", name: "Others", percent: "10%", image: othersTree },
];
