import { useState } from "react";
import BottomNavigation from "../../components/BottomNavigation";

import {
  BackButton,
  MapBackground,
  MapButtonContainer,
  MapContainer,
} from "./Map.styles";
import Popover from "./components/Popover";
import FirstTimeModal from "../../components/FirstTimeModal";
import MapImage from "../../assets/images/map.webp";

//Audios
import AbadayAudio from "../../assets/audios/Abaday.m4a";
import AchcharuAudio from "../../assets/audios/Achcharu.m4a";
import AddaAudio from "../../assets/audios/Adda.m4a";
import AderaAudio from "../../assets/audios/Adera.m4a";
import AjeebAudio from "../../assets/audios/Ajeeb.m4a";
import ArameshAudio from "../../assets/audios/Aramesh.m4a";
import AyzohAudio from "../../assets/audios/Ayzoh.m4a";
import BayanihanAudio from "../../assets/audios/Bayanihan.m4a";
import BhaiAudio from "../../assets/audios/Bhai.m4a";
import BunnaAudio from "../../assets/audios/Bunna.m4a";
import ChillAudio from "../../assets/audios/Chill.m4a";
import CoolAudio from "../../assets/audios/Cool.m4a";
import DostiAudio from "../../assets/audios/Dosti.mp3";
import JugaadAudio from "../../assets/audios/Jugaad.mp3";
import KataPataAudio from "../../assets/audios/Katapata.m4a";
import KhiladiAudio from "../../assets/audios/Khiladi.mp3";
import MahdoumAudio from "../../assets/audios/Mahdoum.m4a";
import MujammalahAudio from "../../assets/audios/Mujammalah.m4a";
import SajiloAudio from "../../assets/audios/Sajilo.m4a";
import SandiganAudio from "../../assets/audios/Sandigan.m4a";
import SukoonAudio from "../../assets/audios/Sukoon.mp3";
import TarofAudio from "../../assets/audios/Tarof.m4a";
import VibesAudio from "../../assets/audios/Vibes.m4a";
import WastaAudio from "../../assets/audios/Wasta.m4a";
import YalahwiAudio from "../../assets/audios/Yalahwi.m4a";
import HowToNavigate from "./components/HowToNavigate";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function Map() {
  const [selected, setSelected] = useState("");
  const [params] = useSearchParams();
  const navigate = useNavigate();

  return (
    <MapContainer>
      {params.get("first") === "true" ? (
        <></>
      ) : (
        <BackButton onClick={() => navigate("/timeline")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1rem"
            height="1rem"
            viewBox="0 0 24 20"
            fill="none"
          >
            <path
              d="M9.67055 0.289747L0.0605469 9.94975L9.67055 19.6097C9.75734 19.7237 9.8676 19.8177 9.99388 19.8854C10.1202 19.953 10.2595 19.9928 10.4025 20.0019C10.5454 20.011 10.6887 19.9893 10.8225 19.9382C10.9564 19.8872 11.0777 19.808 11.1783 19.7059C11.2788 19.6039 11.3563 19.4815 11.4055 19.3469C11.4546 19.2124 11.4743 19.0688 11.4631 18.926C11.4519 18.7832 11.4102 18.6444 11.3408 18.5191C11.2713 18.3938 11.1757 18.2849 11.0605 18.1997L3.87055 10.9497H23.0005C23.2658 10.9497 23.5201 10.8444 23.7077 10.6569C23.8952 10.4693 24.0005 10.215 24.0005 9.94975C24.0005 9.68453 23.8952 9.43018 23.7077 9.24264C23.5201 9.0551 23.2658 8.94975 23.0005 8.94975H3.87055L11.0605 1.69975C11.2475 1.51144 11.352 1.25657 11.3511 0.991211C11.3502 0.725847 11.2439 0.471724 11.0555 0.284746C10.8672 0.0977685 10.6124 -0.00674746 10.347 -0.00580978C10.0816 -0.00487211 9.82752 0.101444 9.64055 0.289747H9.67055Z"
              fill="#00171F"
            />
          </svg>
          <span>back to intro</span>
        </BackButton>
      )}
      <MapBackground>
        <img src={MapImage} fetchPriority="high" alt="Map" />
        {params.get("first") === "true" ? (
          <FirstTimeModal setIsOpen={() => navigate("/map")} />
        ) : (
          <>
            {params.get("how-to-navigate") === "true" ? (
              <HowToNavigate />
            ) : (
              <>
                <MapButtonContainer top="23%" left="20%">
                  <Popover
                    id="Aramesh"
                    isOpen={selected}
                    setIsOpen={setSelected}
                    name="Aramesh"
                    title="آرامش"
                    text="<b> Inner core </b> peace and tranquillity in a deep, spiritual way."
                    axisX="right"
                    axisY="top"
                    nameOrigin="Persian"
                    audio={ArameshAudio}
                  />
                </MapButtonContainer>

                <MapButtonContainer top="48%" left="20%" width="10rem">
                  <Popover
                    id="Vibes"
                    isOpen={selected}
                    setIsOpen={setSelected}
                    name="Vibes"
                    title="Vibes"
                    text="It's an informal term that refers to the <b>emotional atmosphere</b>, <b>feelings</b>, or <b>mood of a person</b>, <b>place</b>, or <b>situation</b>. It is often used to describe the <b>impression</b> or <b>energy</b> something gives off."
                    axisX="right"
                    axisY="top"
                    nameOrigin="English"
                    audio={VibesAudio}
                  />
                  <Popover
                    id="Wasta"
                    isOpen={selected}
                    setIsOpen={setSelected}
                    name="Wasta"
                    title=" واسطه"
                    text='Refers to the concept of using <b>connections</b>, <b>influence</b>, or <b>intermediaries to achieve something</b>, such as securing a job, gaining a favor, or resolving a problem. While "wasta" can sometimes have a <b>neutral or positive connotation</b> (such as facilitating a legitimate connection or mediation), it is often criticized for perpetuating <b>inequality</b>, <b>corruption</b>, and lack of <b>meritocracy</b>.'
                    axisX="right"
                    axisY="top"
                    nameOrigin="Arabic"
                    audio={WastaAudio}
                  />
                  <Popover
                    id="Bhai"
                    isOpen={selected}
                    setIsOpen={setSelected}
                    name="Bhai"
                    title="(भाई)"
                    text='This term means "younger brother," but it is often used more broadly to denote <b>camaraderie</b>, <b>friendship</b>, and <b>respect among peers</b>, regardless of actual familial ties. The term embodies the <b>spirit of kinship</b> and <b>community</b>, reflecting the Nepali social structure, where relationships extend <b>beyond bloodlines</b>.'
                    axisX="right"
                    axisY="top"
                    nameOrigin="Nepali"
                    audio={BhaiAudio}
                  />
                  <Popover
                    id="Dosti"
                    isOpen={selected}
                    setIsOpen={setSelected}
                    name="Dosti"
                    title="دوستی"
                    text='This word means "friendship," but it encapsulates a profound <b>sense of loyalty</b> and <b>emotional connection</b> that extends beyond the typical understanding of friendship. In Pakistan, dosti often involves a <b>commitment to support one another</b> through thick and thin, highlighting the importance of camaraderie in social relationships.'
                    axisX="right"
                    axisY="top"
                    nameOrigin="Urdu"
                    audio={DostiAudio}
                  />
                </MapButtonContainer>

                <MapButtonContainer bottom="24%" left="12%">
                  <Popover
                    id="Mujammalah"
                    isOpen={selected}
                    setIsOpen={setSelected}
                    name="Mujammalah"
                    title="مجاملة"
                    text="Refers to <b>polite gestures</b>, <b>compliments</b>, or <b>social niceties</b> used to maintain <b>harmony</b> and <b>goodwill</b> in interactions. While it can be used to refer to the efforts of doing what is needed to respect cultural values, it can also mean <b>sacrificing one's authenticity</b> and <b>acting in performative ways</b> that don't reflect what one believes or feels."
                    axisX="right"
                    axisY="bottom"
                    nameOrigin="Arabic"
                    audio={MujammalahAudio}
                  />
                </MapButtonContainer>

                <MapButtonContainer bottom="17%" left="30%">
                  <Popover
                    id="Cool"
                    isOpen={selected}
                    setIsOpen={setSelected}
                    name="Cool"
                    title="Cool"
                    text="The most popular modern usage refers to being <b>fashionable</b>, <b>impressive</b>, or <b>generally likable</b>. It's widely used in casual conversations and has become a staple of informal English."
                    axisX="right"
                    axisY="bottom"
                    nameOrigin="English"
                    audio={CoolAudio}
                  />
                  <Popover
                    id="Ajeeb"
                    isOpen={selected}
                    setIsOpen={setSelected}
                    name="Ajeeb"
                    title="عجيب"
                    text="An expression often used in the Gulf countries to describe something that <b>elicits surprise</b>, <b>wonder</b>, <b>amazement</b> or <b>admiration</b>."
                    axisX="right"
                    axisY="bottom"
                    nameOrigin="Arabic"
                    audio={AjeebAudio}
                  />
                  <Popover
                    id="Yalahwi"
                    isOpen={selected}
                    setIsOpen={setSelected}
                    name="Yalahwi"
                    title="يا لهوي."
                    text={`It's a common expression in some Arabic dialects, particularly in Egyptian Arabic, to convey feelings of <b>astonishment</b>, <b>worry</b>, or <b>alarm</b>. For example, when someone hears unexpected bad news, they might exclaim: "Yalawhi!", meaning "Oh my goodness!" or "Oh no!".`}
                    axisX="right"
                    axisY="bottom"
                    nameOrigin="Arabic"
                    audio={YalahwiAudio}
                  />
                </MapButtonContainer>

                <MapButtonContainer left="47%" top="61%">
                  <Popover
                    id="Sidra"
                    isOpen={selected}
                    setIsOpen={setSelected}
                    name="Sidra Tree"
                    text="In Kuwait's desert, the Sidra tree thrives, symbolizing <b>resilience</b>, <b>unity</b>, and <b>life</b>. Deeply rooted in Islamic culture and Kuwaiti heritage, it embodies survival in harsh climates and inspires <b>environmental awareness</b>. Like the Sidra tree, Kuwait brings together over <b>100 nationalities</b>, each life a unique leaf on its branches. Together we form a <b>vibrant whole</b>, rooted in <b>shared stories</b> and <b>memories</b>. No matter where we come from, our paths converge here, beneath a common canopy."
                    title="Sidra Tree"
                    axisX="right"
                    axisY="bottom"
                    nameOrigin=""
                    hasName={false}
                  />
                </MapButtonContainer>

                <MapButtonContainer top="22%" left="45%">
                  <Popover
                    id="Bunna"
                    isOpen={selected}
                    setIsOpen={setSelected}
                    name="Bunna"
                    title="ቡና"
                    text='This word means "<b>coffee</b>" in Amharic, but it encompasses much more than just the beverage. Coffee holds a significant <b>cultural and social role</b> in Ethiopia, often involving <b>elaborate ceremonies</b> where the coffee is <b>roasted</b>, <b>ground</b>, and <b>brewed</b> in front of guests. The bunna ceremony symbolizes hospitality, community, and a shared experience that is central to Ethiopian social life.'
                    axisX="left"
                    axisY="top"
                    nameOrigin="Amharic"
                    audio={BunnaAudio}
                  />
                  <Popover
                    id="Sandigan"
                    isOpen={selected}
                    setIsOpen={setSelected}
                    name="Sandigan"
                    title="Sandigan"
                    text='Means "pillar," "support," or "foundation." It refers to something or someone that <b>serves as a source of strength</b>, <b>support</b>, or <b>reliability</b>.'
                    axisX="left"
                    axisY="top"
                    nameOrigin="Tagalog"
                    audio={SandiganAudio}
                  />
                  <Popover
                    id="Bayanihan"
                    isOpen={selected}
                    setIsOpen={setSelected}
                    name="Bayanihan"
                    title="Bayanihan"
                    text="'We must give and share whatever we have and we are lucky if we have something to share'. One of the inherent traits that identifies Filipinos is 'Bayanihan', or the <b>willingness to help others without asking for something in return</b>."
                    axisX="left"
                    axisY="top"
                    nameOrigin="Tagalog"
                    audio={BayanihanAudio}
                  />
                </MapButtonContainer>

                <MapButtonContainer top="39%" right="28%">
                  <Popover
                    id="Adera"
                    isOpen={selected}
                    setIsOpen={setSelected}
                    name="Adera"
                    title="አደራ"
                    text="When a person passes a <b>valuable belonging of theirs to someone to look after</b>, they use this phrase <b>to let them know they have a big responsibility</b>. For example, if you're going to babysit somebody's little kid, usually the mother will say adera lijaen. (Ligaen means 'my kid'). The phrase adera contains 'please', 'take care of my child', 'promise to protect them' and 'I'm trusting you' all in one word. It's nothing to be taken lightly."
                    axisX="left"
                    axisY="top"
                    nameOrigin="Amharic"
                    audio={AderaAudio}
                  />
                  <Popover
                    id="Ayzoh"
                    isOpen={selected}
                    setIsOpen={setSelected}
                    name="Ayzoh"
                    title="አይዞህ"
                    text="Lots of Amharic speakers land on this word. It can translate into something like '<b>it's okay</b>', '<b>it's going to be okay</b>', '<b>I hope you didn't hurt yourself</b>' or '<b>don't worry</b>' depending on the situation. Sometimes it can mean 'be strong' or 'have courage', and can be applied to anything as small as someone tripping while walking. It could be thought of as the <b>acknowledgement of someone else's struggle</b>, with a bit of encouragement in there, too, and it's used all the time. "
                    axisX="left"
                    axisY="top"
                    nameOrigin="Amharic"
                    audio={AyzohAudio}
                  />
                </MapButtonContainer>

                <MapButtonContainer top="3%" right="2%">
                  <Popover
                    id="Kata Pata"
                    isOpen={selected}
                    setIsOpen={setSelected}
                    name="Kata Pata"
                    title="කට පට"
                    text="This word describes the <b>cheerful</b>, <b>often noisy</b>, and <b>lively atmosphere</b> created by <b>people talking</b> or <b>bustling around</b>, often in a group setting. It's used to express the buzz of conversation or activity, especially in places like markets or family gatherings, where there's a vibrant hum of people going about their lives."
                    axisX="left"
                    axisY="top"
                    nameOrigin="Tamil"
                    audio={KataPataAudio}
                  />
                  <Popover
                    id="Jugaad"
                    isOpen={selected}
                    setIsOpen={setSelected}
                    name="Jugaad"
                    title="जुगाड़"
                    text="Using skill and imagination <b>to find an easy solution to a problem</b> or to fix or make something using cheap, basic items."
                    axisX="left"
                    axisY="top"
                    nameOrigin="Hindi"
                    audio={JugaadAudio}
                  />
                  <Popover
                    id="Tarof"
                    isOpen={selected}
                    setIsOpen={setSelected}
                    name="Tarof"
                    title="تعارف"
                    text="Tarof is a complex and culturally significant concept in Iranian culture that revolves around politeness, hospitality, and social etiquette. It refers to a set of social behaviors where people make offers or express sentiments that may not be meant to be taken literally. Essentially, it's a <b>ritual of courtesy</b> where individuals show <b>deference</b>, <b>generosity</b>, or <b>respect</b>, often beyond what is <b>genuinely intended</b> or <b>feasible</b>.

For example, someone may insist on paying for a meal even if they expect the other person to refuse their offer, or they may repeatedly offer you something out of politeness, not necessarily expecting you to accept. <b>The art of tarof lies in recognizing when an offer is genuine and when it's merely a polite gesture</b>. At its core, tarof is about maintaining harmony, showing respect, and navigating social interactions gracefully, but it can also lead to a degree of ambiguity or even miscommunication if not understood well.
"
                    axisX="left"
                    axisY="top"
                    nameOrigin="Persian"
                    audio={TarofAudio}
                  />
                </MapButtonContainer>

                <MapButtonContainer top="31%" right="3%">
                  <Popover
                    id="Abadai"
                    isOpen={selected}
                    setIsOpen={setSelected}
                    name="Abadai"
                    title="قبضاي"
                    text="It's a colloquial word used in Levantine Arabic, particularly in Syrian, Lebanese, and Palestinian dialects. <b>It refers to someone who is strong</b>, <b>courageous</b>, or has a <b>commanding presence</b>, often associated with street smarts or physical strength."
                    axisX="left"
                    axisY="top"
                    nameOrigin="Arabic"
                    audio={AbadayAudio}
                  />
                </MapButtonContainer>

                <MapButtonContainer top="53%" right="6%" width="15rem">
                  <Popover
                    id="Chill"
                    isOpen={selected}
                    setIsOpen={setSelected}
                    name="Chill"
                    title="Chill"
                    text="It's a versatile term often used in informal and casual conversations to indicate <b>relaxation</b>, <b>calmness</b>, or <b>something positive</b>."
                    axisX="left"
                    axisY="top"
                    nameOrigin="English"
                    audio={ChillAudio}
                  />
                  <Popover
                    id="Mahdoum"
                    isOpen={selected}
                    setIsOpen={setSelected}
                    name="Mahdoum"
                    title="مهضوم"
                    text="It's a colloquial Arabic word primarily used in Levantine dialects, such as Lebanese and Syrian Arabic. Its meaning depends on context, but it generally conveys a <b>positive sentiment</b> related to something being <b>charming</b>, <b>cute</b>, <b>funny</b> or <b>entertaining</b>."
                    axisX="left"
                    axisY="top"
                    nameOrigin="Arabic"
                    audio={MahdoumAudio}
                  />
                  <Popover
                    id="Sukoon"
                    isOpen={selected}
                    setIsOpen={setSelected}
                    name="Sukoon"
                    title="سکون"
                    text="A <b>sense of peace</b> and <b>tranquility</b>, especially after a long or challenging day, or in the presence of oved ones."
                    axisX="left"
                    axisY="top"
                    nameOrigin="Urdu"
                    audio={SukoonAudio}
                  />
                  <Popover
                    id="Adda"
                    isOpen={selected}
                    setIsOpen={setSelected}
                    name="Adda"
                    title="আড্ডা"
                    text="This refers to informal, relaxed conversations that Bengalis love to have with friends and family, often about anything under the sun—philosophy, politics, art, literature, or just gossip. <b>An adda session often involves a strong sense of community</b>, <b>intellectual curiosity</b>, and <b>bonding</b>, which are deeply valued in Bengali culture."
                    axisX="left"
                    axisY="top"
                    nameOrigin="Bangla"
                    audio={AddaAudio}
                  />
                </MapButtonContainer>

                <MapButtonContainer bottom="18%" right="10%">
                  <Popover
                    id="Khiladi"
                    isOpen={selected}
                    setIsOpen={setSelected}
                    name="Khiladi"
                    title="खिलाड़ी"
                    text={`Literally means "player", but it has a sense of <b>someone who is smart</b>, <b>streetwise</b>, and <b>strategic</b>.`}
                    axisX="left"
                    axisY="bottom"
                    nameOrigin="Hindi"
                    audio={KhiladiAudio}
                  />
                  <Popover
                    id="Achcharu"
                    isOpen={selected}
                    setIsOpen={setSelected}
                    name="Achcharu"
                    title="அச்சாறு"
                    text="This word refers to a popular Sri Lankan pickle-like dish, but it also <b>describes a unique concept</b>—a mix of different elements that create something vibrant and distinct. It's used in slang to <b>describe a jumble of things</b>, or <b>situations with a variety of mixed elements</b>, like a <b>group of people with different personalities</b>."
                    axisX="left"
                    axisY="bottom"
                    nameOrigin="Tamil"
                    audio={AchcharuAudio}
                  />
                  <Popover
                    id="Sajilo"
                    isOpen={selected}
                    setIsOpen={setSelected}
                    name="Sajilo"
                    title="सजिलो"
                    text={`This term means "easy" but is often used in a broader context to describe <b>anything that feels comfortable</b> or <b>convenient</b>. It reflects the Nepali attitude towards life's challenges: striving for simplicity. It captures <b>an essence of ease that transcends mere practicality</b>, and it's often used in social contexts to denote a sense of being at ease with one's surroundings or tasks.`}
                    axisX="left"
                    axisY="bottom"
                    nameOrigin="Nepali"
                    audio={SajiloAudio}
                  />
                </MapButtonContainer>
              </>
            )}

            <BottomNavigation />
          </>
        )}
      </MapBackground>
    </MapContainer>
  );
}
