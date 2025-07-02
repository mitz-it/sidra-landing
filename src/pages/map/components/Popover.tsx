import { useEffect, useRef } from "react";
import {
  MapPopover,
  MapPopoverButton,
  MapPopoverDivider,
  MapPopoverHeader,
  MapPopoverSubTitle,
  MapPopoverText,
  MapPopoverTitle,
  SVGWrapper,
} from "./Popover.styles";
import { AudioIcon } from "../../../assets/svg/AudioIcon";

type PopoverProps = {
  id: string;
  name: string;
  axisX: "left" | "right";
  axisY: "top" | "bottom";
  nameOrigin: string;
  title: string;
  text: string;
  isOpen: string;
  setIsOpen: (value: string) => void;
  hasName?: boolean;
  audio?: string;
};

const Popover: React.FC<PopoverProps> = ({
  id,
  name,
  axisX,
  axisY,
  nameOrigin,
  title,
  text,
  isOpen,
  setIsOpen,
  hasName = true,
  audio,
}) => {
  const open = !!(isOpen === id);

  const popoverRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popoverRef.current &&
        event.target instanceof Node &&
        !popoverRef.current.contains(event.target)
      ) {
        setIsOpen("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsOpen]);

  return (
    <div style={{ position: "relative" }}>
      <MapPopoverButton isActive={open} onClick={() => setIsOpen(id)}>
        {name}
      </MapPopoverButton>

      {open && (
        <MapPopover ref={popoverRef} axisX={axisX} axisY={axisY}>
          <MapPopoverHeader>
            <MapPopoverTitle>
              {title}
              {audio && (
                <SVGWrapper onClick={() => audioRef.current?.play()}>
                  <AudioIcon />
                </SVGWrapper>
              )}
            </MapPopoverTitle>
            <svg
              onClick={() => setIsOpen("")}
              style={{ height: "1.5rem", width: "1.5rem" }}
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25 4.1859L21.8141 1L13.0005 9.81358L4.1859 1L1 4.1859L9.81358 13.0005L1 21.8141L4.1859 25L13.0005 16.1864L21.8141 25L25 21.8141L16.1864 13.0005L25 4.1859Z"
                fill="#FC9918"
                stroke="#00171F"
              />
            </svg>
          </MapPopoverHeader>

          {hasName ? (
            <MapPopoverSubTitle>
              <b>“{name}”</b> - {nameOrigin}
            </MapPopoverSubTitle>
          ) : null}
          <MapPopoverDivider />
          <MapPopoverText>{text}</MapPopoverText>
        </MapPopover>
      )}
      <audio ref={audioRef} src={""} style={{ display: "none" }} />
    </div>
  );
};

export default Popover;
