import { useState } from "react";
import BottomNavigation from "../../components/BottomNavigation";

import { MapBackground, MapButtonContainer, MapContainer } from "./Map.styles";
import Popover from "./components/Popover";
import FirstTimeModal from "../../components/FirstTimeModal";
import MapImage from "../../assets/images/map.png";

export default function Map() {
  const [selected, setSelected] = useState("");
  const [firstTime, setFirstTime] = useState(true);

  const handleCloseModal = () => {
    setFirstTime(false);
  };

  return (
    <MapContainer>
      <MapBackground>
        <img src={MapImage} alt="Map" />
        {firstTime ? (
          <FirstTimeModal setIsOpen={handleCloseModal} />
        ) : (
          <>
            <MapButtonContainer top="23%" left="20%">
              <Popover
                id="Aramesh"
                isOpen={selected}
                setIsOpen={setSelected}
                name="Aramesh"
                title="آرامش"
                text="Inner core peace and tranquillity in a deep, spiritual way."
                axisX="right"
                axisY="top"
                nameOrigin="Persian"
              />
            </MapButtonContainer>

            <MapButtonContainer top="48%" left="20%" width="10rem">
              <Popover
                id="Vibes"
                isOpen={selected}
                setIsOpen={setSelected}
                name="Vibes"
                title="Vibes"
                text="It's an informal term that refers to the emotional atmosphere, feelings, or mood of a person, place, or situation. It is often used to describe the impression or energy something gives off."
                axisX="right"
                axisY="top"
                nameOrigin="English"
              />
              <Popover
                id="Wasta"
                isOpen={selected}
                setIsOpen={setSelected}
                name="Wasta"
                title=" واسطه"
                text='Refers to the concept of using connections, influence, or intermediaries to achieve something, such as securing a job, gaining a favor, or resolving a problem. While "wasta" can sometimes have a neutral or positive connotation (such as facilitating a legitimate connection or mediation), it is often criticized for perpetuating inequality, corruption, and lack of meritocracy.'
                axisX="right"
                axisY="top"
                nameOrigin="Arabic"
              />
              <Popover
                id="Bhai"
                isOpen={selected}
                setIsOpen={setSelected}
                name="Bhai"
                title="(भाई)"
                text='This term means "younger brother," but it is often used more broadly to denote camaraderie, friendship, and respect among peers, regardless of actual familial ties. The term embodies the spirit of kinship and community, reflecting the Nepali social structure, where relationships extend beyond bloodlines.'
                axisX="right"
                axisY="top"
                nameOrigin="Nepali"
              />
              <Popover
                id="Dosti"
                isOpen={selected}
                setIsOpen={setSelected}
                name="Dosti"
                title="دوستی"
                text='This word means "friendship," but it encapsulates a profound sense of loyalty and emotional connection that extends beyond the typical understanding of friendship. In Pakistan, dosti often involves a commitment to support one another through thick and thin, highlighting the importance of camaraderie in social relationships.'
                axisX="right"
                axisY="top"
                nameOrigin="Urdu"
              />
            </MapButtonContainer>

            <MapButtonContainer bottom="25%" left="12%">
              <Popover
                id="Mujammalah"
                isOpen={selected}
                setIsOpen={setSelected}
                name="Mujammalah"
                title="مجاملة"
                text="Refers to polite gestures, compliments, or social niceties used to maintain harmony and goodwill in interactions. While it can be used to refer to the efforts of doing what is needed to respect cultural values, it can also mean sacrificing one's authenticity and acting in performative ways that don't reflect what one believes or feels."
                axisX="right"
                axisY="bottom"
                nameOrigin="Arabic"
              />
            </MapButtonContainer>

            <MapButtonContainer bottom="17%" left="30%">
              <Popover
                id="Cool"
                isOpen={selected}
                setIsOpen={setSelected}
                name="Cool"
                title="Cool"
                text="The most popular modern usage refers to being fashionable, impressive, or generally likable. It's widely used in casual conversations and has become a staple of informal English."
                axisX="right"
                axisY="bottom"
                nameOrigin="English"
              />
              <Popover
                id="Ajeeb"
                isOpen={selected}
                setIsOpen={setSelected}
                name="Ajeeb"
                title="عجيب"
                text="An expression often used in the Gulf countries to describe something that elicits surprise, wonder, amazement or admiration."
                axisX="right"
                axisY="bottom"
                nameOrigin="Arabic"
              />
              <Popover
                id="Yalahwi"
                isOpen={selected}
                setIsOpen={setSelected}
                name="Yalahwi"
                title="يا لهوي."
                text={`It's a common expression in some Arabic dialects, particularly in Egyptian Arabic, to convey feelings of astonishment, worry, or alarm. For example, when someone hears unexpected bad news, they might exclaim: "Yalawhi!”, meaning "Oh my goodness!" or "Oh no!".`}
                axisX="right"
                axisY="bottom"
                nameOrigin="Arabic"
              />
            </MapButtonContainer>

            <MapButtonContainer left="47%" top="61%">
              <Popover
                id="Sidra"
                isOpen={selected}
                setIsOpen={setSelected}
                name="Sidra Tree"
                text="In Kuwait's desert, the Sidra tree thrives, symbolizing resilience, unity, and life. Deeply rooted in Islamic culture and Kuwaiti heritage, it embodies survival in harsh climates and inspires environmental awareness. Like the Sidra tree, Kuwait brings together over 100 nationalities, each life a unique leaf on its branches. Together we form a vibrant whole, rooted in shared stories and memories. No matter where we come from, our paths converge here, beneath a common canopy"
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
                text='This word means "coffee" in Amharic, but it encompasses much more than just the beverage. Coffee holds a significant cultural and social role in Ethiopia, often involving elaborate ceremonies where the coffee is roasted, ground, and brewed in front of guests. The bunna ceremony symbolizes hospitality, community, and a shared experience that is central to Ethiopian social life.'
                axisX="left"
                axisY="top"
                nameOrigin="Amharic"
              />
              <Popover
                id="Sandigan"
                isOpen={selected}
                setIsOpen={setSelected}
                name="Sandigan"
                title="Sandigan"
                text='Means "pillar," "support," or "foundation." It refers to something or someone that serves as a source of strength, support, or reliability.'
                axisX="left"
                axisY="top"
                nameOrigin="Tagalog"
              />
              <Popover
                id="Bayanihan"
                isOpen={selected}
                setIsOpen={setSelected}
                name="Bayanihan"
                title="Bayanihan"
                text="'We must give and share whatever we have and we are lucky if we have something to share'. One of the inherent traits that identifies Filipinos is 'Bayanihan', or the willingness to help others without asking for something in return."
                axisX="left"
                axisY="top"
                nameOrigin="Tagalog"
              />
            </MapButtonContainer>

            <MapButtonContainer top="39%" right="28%">
              <Popover
                id="Adera"
                isOpen={selected}
                setIsOpen={setSelected}
                name="Adera"
                title="አደራ"
                text="When a person passes a valuable belonging of theirs to someone to look after, they use this phrase to let them know they have a big responsibility. For example, if you're going to babysit somebody's little kid, usually the mother will say adera lijaen. (Ligaen means 'my kid'). The phrase adera contains 'please', 'take cake of my child', 'promise to protect them' and 'I'm trusting you' all in one word. It's nothing to be taken lightly."
                axisX="left"
                axisY="top"
                nameOrigin="Amharic"
              />
              <Popover
                id="Ayzoh"
                isOpen={selected}
                setIsOpen={setSelected}
                name="Ayzoh"
                title="አይዞህ"
                text="Lots of Amharic speakers land on this word. It can translate into something like 'it's okay', 'it's going to be okay', 'I hope you didn't hurt yourself' or 'don't worry' depending on the situation. Sometimes it can mean 'be strong' or 'have courage', and can be applied to anything as small as someone tripping while walking. It could be thought of as the acknowledgement of someone else's struggle, with a bit of encouragement in there, too, and it's used all the time. "
                axisX="left"
                axisY="top"
                nameOrigin="Amharic"
              />
            </MapButtonContainer>

            <MapButtonContainer top="3%" right="5%">
              <Popover
                id="Kata Pata"
                isOpen={selected}
                setIsOpen={setSelected}
                name="Kata Pata"
                title="කට පට"
                text="This word describes the cheerful, often noisy, and lively atmosphere created by people talking or bustling around, often in a group setting. It's used to express the buzz of conversation or activity, especially in places like markets or family gatherings, where there's a vibrant hum of people going about their lives."
                axisX="left"
                axisY="top"
                nameOrigin="Tamil"
              />
              <Popover
                id="Jugaad"
                isOpen={selected}
                setIsOpen={setSelected}
                name="Jugaad"
                title="जुगाड़"
                text="Using skill and imagination to find an easy solution to a problem or to fix or make something using cheap, basic items."
                axisX="left"
                axisY="top"
                nameOrigin="Hindi"
              />
              <Popover
                id="Tarof"
                isOpen={selected}
                setIsOpen={setSelected}
                name="Tarof"
                title="تعارف"
                text="Tarof is a complex and culturally significant concept in Iranian culture that revolves around politeness, hospitality, and social etiquette. It refers to a set of social behaviors where people make offers or express sentiments that may not be meant to be taken literally. Essentially, it's a ritual of courtesy where individuals show deference, generosity, or respect, often beyond what is genuinely intended or feasible.
For example, someone may insist on paying for a meal even if they expect the other person to refuse their offer, or they may repeatedly offer you something out of politeness, not necessarily expecting you to accept. The art of tarof lies in recognizing when an offer is genuine and when it's merely a polite gesture. At its core, tarof is about maintaining harmony, showing respect, and navigating social interactions gracefully, but it can also lead to a degree of ambiguity or even miscommunication if not understood well.
"
                axisX="left"
                axisY="top"
                nameOrigin="Persian"
              />
            </MapButtonContainer>

            <MapButtonContainer top="31%" right="3%">
              <Popover
                id="Abadai"
                isOpen={selected}
                setIsOpen={setSelected}
                name="Abadai"
                title="قبضاي"
                text="It's a colloquial word used in Levantine Arabic, particularly in Syrian, Lebanese, and Palestinian dialects. It refers to someone who is strong, courageous, or has a commanding presence, often associated with street smarts or physical strength."
                axisX="left"
                axisY="top"
                nameOrigin="Arabic"
              />
            </MapButtonContainer>

            <MapButtonContainer top="53%" right="6%" width="15rem">
              <Popover
                id="Chill"
                isOpen={selected}
                setIsOpen={setSelected}
                name="Chill"
                title="Chill"
                text="It's a versatile term often used in informal and casual conversations to indicate relaxation, calmness, or something positive."
                axisX="left"
                axisY="top"
                nameOrigin="English"
              />
              <Popover
                id="Mahdoum"
                isOpen={selected}
                setIsOpen={setSelected}
                name="Mahdoum"
                title="مهضوم"
                text="It's a colloquial Arabic word primarily used in Levantine dialects, such as Lebanese and Syrian Arabic. Its meaning depends on context, but it generally conveys a positive sentiment related to something being charming, cute, funny or entertaining."
                axisX="left"
                axisY="top"
                nameOrigin="Arabic"
              />
              <Popover
                id="Sukoon"
                isOpen={selected}
                setIsOpen={setSelected}
                name="Sukoon"
                title="سکون"
                text="A sense of peace and tranquility, especially after a long or challenging day, or in the presence of loved ones."
                axisX="left"
                axisY="top"
                nameOrigin="Urdu"
              />
              <Popover
                id="Adda"
                isOpen={selected}
                setIsOpen={setSelected}
                name="Adda"
                title="আড্ডা"
                text="This refers to informal, relaxed conversations that Bengalis love to have with friends and family, often about anything under the sun—philosophy, politics, art, literature, or just gossip. An adda session often involves a strong sense of community, intellectual curiosity, and bonding, which are deeply valued in Bengali culture."
                axisX="left"
                axisY="top"
                nameOrigin="Bangla"
              />
            </MapButtonContainer>

            <MapButtonContainer bottom="18%" right="10%">
              <Popover
                id="Khiladi"
                isOpen={selected}
                setIsOpen={setSelected}
                name="Khiladi"
                title="खिलाड़ी"
                text="Literally means “player,” but it has a sense of someone who is smart, streetwise, and strategic."
                axisX="left"
                axisY="bottom"
                nameOrigin="Hindi"
              />
              <Popover
                id="Achcharu"
                isOpen={selected}
                setIsOpen={setSelected}
                name="Achcharu"
                title="அச்சாறு"
                text="This word refers to a popular Sri Lankan pickle-like dish, but it also describes a unique concept—a mix of different elements that create something vibrant and distinct. It's used in slang to describe a jumble of things, or situations with a variety of mixed elements, like a group of people with different personalities."
                axisX="left"
                axisY="bottom"
                nameOrigin="Tamil"
              />
              <Popover
                id="Sajilo"
                isOpen={selected}
                setIsOpen={setSelected}
                name="Sajilo"
                title="सजिलो"
                text={`This term means "easy" but is often used in a broader context to describe anything that feels comfortable or convenient. It reflects the Nepali attitude towards life's challenges: striving for simplicity. It captures an essence of ease that transcends mere practicality, and it's often used in social contexts to denote a sense of being at ease with one's surroundings or tasks.`}
                axisX="left"
                axisY="bottom"
                nameOrigin="Nepali"
              />
            </MapButtonContainer>
            <BottomNavigation />
          </>
        )}
      </MapBackground>
    </MapContainer>
  );
}
