import { useState } from "react";
import BottomNavigation from "../../components/BottomNavigation";

import { MapBackground, MapButtonContainer, MapContainer } from "./Map.styles";
import Popover from "./components/Popover";

export default function Map() {
  const [selected, setSelected] = useState("");

  return (
    <MapContainer>
      <MapButtonContainer top="19%" left="20%">
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

      <MapButtonContainer top="47%" left="20%" width="20rem">
        <Popover
          id="Aramesh2"
          isOpen={selected}
          setIsOpen={setSelected}
          name="Aramesh"
          title="آرامش"
          text="Inner core peace and tranquillity in a deep, spiritual way."
          axisX="right"
          axisY="top"
          nameOrigin="Persian"
        />
        <Popover
          id="Vibes"
          isOpen={selected}
          setIsOpen={setSelected}
          name="Vibes"
          title=""
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce interdum consectetur ligula eu condimentum. Curabitur pretium euismod bibendum."
          axisX="right"
          axisY="top"
          nameOrigin="Persian"
        />
        <Popover
          id="Wasta"
          isOpen={selected}
          setIsOpen={setSelected}
          name="Wasta"
          title=""
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce interdum consectetur ligula eu condimentum. Curabitur pretium euismod bibendum."
          axisX="right"
          axisY="top"
          nameOrigin="Persian"
        />
        <Popover
          id="Bhai"
          isOpen={selected}
          setIsOpen={setSelected}
          name="Bhai"
          title=""
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce interdum consectetur ligula eu condimentum. Curabitur pretium euismod bibendum."
          axisX="right"
          axisY="top"
          nameOrigin="Persian"
        />
        <Popover
          id="Dosti"
          isOpen={selected}
          setIsOpen={setSelected}
          name="Dosti"
          title=""
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce interdum consectetur ligula eu condimentum. Curabitur pretium euismod bibendum."
          axisX="right"
          axisY="top"
          nameOrigin="Persian"
        />
      </MapButtonContainer>

      <MapButtonContainer bottom="21%" left="12%">
        <Popover
          id="Mujammalah"
          isOpen={selected}
          setIsOpen={setSelected}
          name="Mujammalah"
          title=""
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce interdum consectetur ligula eu condimentum. Curabitur pretium euismod bibendum."
          axisX="right"
          axisY="top"
          nameOrigin="Persian"
        />
      </MapButtonContainer>

      <MapButtonContainer bottom="13%" left="30%">
        <Popover
          id="Cool"
          isOpen={selected}
          setIsOpen={setSelected}
          name="Cool"
          title=""
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce interdum consectetur ligula eu condimentum. Curabitur pretium euismod bibendum."
          axisX="right"
          axisY="bottom"
          nameOrigin="Persian"
        />
        <Popover
          id="Ajeeb"
          isOpen={selected}
          setIsOpen={setSelected}
          name="Ajeeb"
          title=""
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce interdum consectetur ligula eu condimentum. Curabitur pretium euismod bibendum."
          axisX="right"
          axisY="bottom"
          nameOrigin="Persian"
        />
        <Popover
          id="Yalahwi"
          isOpen={selected}
          setIsOpen={setSelected}
          name="Yalahwi"
          title=""
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce interdum consectetur ligula eu condimentum. Curabitur pretium euismod bibendum."
          axisX="right"
          axisY="bottom"
          nameOrigin="Persian"
        />
      </MapButtonContainer>

      <MapButtonContainer top="18%" left="45%">
        <Popover
          id="Bunna"
          isOpen={selected}
          setIsOpen={setSelected}
          name="Bunna"
          title=""
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce interdum consectetur ligula eu condimentum. Curabitur pretium euismod bibendum."
          axisX="left"
          axisY="top"
          nameOrigin="Persian"
        />
        <Popover
          id="Sandigan"
          isOpen={selected}
          setIsOpen={setSelected}
          name="Sandigan"
          title=""
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce interdum consectetur ligula eu condimentum. Curabitur pretium euismod bibendum."
          axisX="left"
          axisY="top"
          nameOrigin="Persian"
        />
        <Popover
          id="Bahianihan"
          isOpen={selected}
          setIsOpen={setSelected}
          name="Bahianihan"
          title=""
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce interdum consectetur ligula eu condimentum. Curabitur pretium euismod bibendum."
          axisX="left"
          axisY="top"
          nameOrigin="Persian"
        />
      </MapButtonContainer>

      <MapButtonContainer top="40%" right="28%">
        <Popover
          id="Adera"
          isOpen={selected}
          setIsOpen={setSelected}
          name="Adera"
          title=""
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce interdum consectetur ligula eu condimentum. Curabitur pretium euismod bibendum."
          axisX="left"
          axisY="top"
          nameOrigin="Persian"
        />
        <Popover
          id="Ayzoh"
          isOpen={selected}
          setIsOpen={setSelected}
          name="Ayzoh"
          title=""
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce interdum consectetur ligula eu condimentum. Curabitur pretium euismod bibendum."
          axisX="left"
          axisY="top"
          nameOrigin="Persian"
        />
      </MapButtonContainer>

      <MapButtonContainer top="5%" right="5%">
        <Popover
          id="Kata Pata"
          isOpen={selected}
          setIsOpen={setSelected}
          name="Kata Pata"
          title=""
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce interdum consectetur ligula eu condimentum. Curabitur pretium euismod bibendum."
          axisX="left"
          axisY="top"
          nameOrigin="Persian"
        />
        <Popover
          id="Jugaad"
          isOpen={selected}
          setIsOpen={setSelected}
          name="Jugaad"
          title=""
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce interdum consectetur ligula eu condimentum. Curabitur pretium euismod bibendum."
          axisX="left"
          axisY="top"
          nameOrigin="Persian"
        />
        <Popover
          id="Tarof"
          isOpen={selected}
          setIsOpen={setSelected}
          name="Tarof"
          title=""
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce interdum consectetur ligula eu condimentum. Curabitur pretium euismod bibendum."
          axisX="left"
          axisY="top"
          nameOrigin="Persian"
        />
      </MapButtonContainer>

      <MapButtonContainer top="30%" right="3%">
        <Popover
          id="Abadai"
          isOpen={selected}
          setIsOpen={setSelected}
          name="Abadai"
          title=""
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce interdum consectetur ligula eu condimentum. Curabitur pretium euismod bibendum."
          axisX="left"
          axisY="top"
          nameOrigin="Persian"
        />
      </MapButtonContainer>

      <MapButtonContainer top="53%" right="3%" width="15rem">
        <Popover
          id="Chill"
          isOpen={selected}
          setIsOpen={setSelected}
          name="Chill"
          title=""
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce interdum consectetur ligula eu condimentum. Curabitur pretium euismod bibendum."
          axisX="left"
          axisY="top"
          nameOrigin="Persian"
        />
        <Popover
          id="Mahdoum"
          isOpen={selected}
          setIsOpen={setSelected}
          name="Mahdoum"
          title=""
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce interdum consectetur ligula eu condimentum. Curabitur pretium euismod bibendum."
          axisX="left"
          axisY="top"
          nameOrigin="Persian"
        />
        <Popover
          id="Sukoon"
          isOpen={selected}
          setIsOpen={setSelected}
          name="Sukoon"
          title=""
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce interdum consectetur ligula eu condimentum. Curabitur pretium euismod bibendum."
          axisX="left"
          axisY="top"
          nameOrigin="Persian"
        />
        <Popover
          id="Adda"
          isOpen={selected}
          setIsOpen={setSelected}
          name="Adda"
          title=""
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce interdum consectetur ligula eu condimentum. Curabitur pretium euismod bibendum."
          axisX="left"
          axisY="top"
          nameOrigin="Persian"
        />
      </MapButtonContainer>

      <MapButtonContainer bottom="13%" right="10%">
        <Popover
          id="Khiladi"
          isOpen={selected}
          setIsOpen={setSelected}
          name="Khiladi"
          title=""
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce interdum consectetur ligula eu condimentum. Curabitur pretium euismod bibendum."
          axisX="left"
          axisY="bottom"
          nameOrigin="Persian"
        />
        <Popover
          id="Achcharu"
          isOpen={selected}
          setIsOpen={setSelected}
          name="Achcharu"
          title=""
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce interdum consectetur ligula eu condimentum. Curabitur pretium euismod bibendum."
          axisX="left"
          axisY="bottom"
          nameOrigin="Persian"
        />
        <Popover
          id="Sajilo"
          isOpen={selected}
          setIsOpen={setSelected}
          name="Sajilo"
          title=""
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce interdum consectetur ligula eu condimentum. Curabitur pretium euismod bibendum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce interdum consectetur ligula eu condimentum. Curabitur pretium euismod bibendum."
          axisX="left"
          axisY="bottom"
          nameOrigin="Persian"
        />
      </MapButtonContainer>
      <BottomNavigation />
      <MapBackground />
    </MapContainer>
  );
}
