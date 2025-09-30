"use client";

import { messagesList } from "@/data/messaje-list";
import { randomPosition } from "@/utils/random-position";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import FadeContent from "./FadeContent";
import { toast } from "sonner";
import { X } from "lucide-react";

interface RandomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  sizeMessage: number;
  setSizeMessage: Dispatch<SetStateAction<number>>;
}

const RandomButton = ({ sizeMessage, setSizeMessage, className, ...props }: RandomButtonProps) => {
  const [styles, setStyles] = useState<React.CSSProperties>({ top: '52.2%', left: '49.5%' });
  const [mounted, setMounted] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);

  const handleRandom = () => {
    setStyles(randomPosition());
  }

  // No se debe repetir 2 veces seguidas
  const randomMessage = () => {
    if (messageIndex === messagesList.length) return;

    const message = messagesList[messageIndex];
    setMessageIndex(messageIndex + 1);
    return message;
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (

    <FadeContent
      blur={true}
      delay={1000}
      duration={500}
      easing="ease-out"
      initialOpacity={0}
      style={{
        position: 'absolute',
        transition: 'all 0.5s',
        zIndex: 1000,
        top: styles.top,
        left: styles.left
      }}

    >
      <button
        className={`text-xl font-normal flex items-center gap-2 px-6 py-2 rounded-full bg-pink-400/20 hover:bg-pink-400 text-white group transition-all duration-500 hover:scale-120 ${className}`}
        onClick={() => {
          if (messageIndex === messagesList.length) {
            toast("ah bueno pues, ya no abuses, di que si 🤣", { style: { fontSize: '1.3rem' }, duration: 15000 });
            setSizeMessage(sizeMessage + 80);
            return;
          };
          handleRandom();
          toast(randomMessage(), { style: { fontSize: '1.3rem' } });
        }}
        {...props}
      >
        No
        <X className="text-pink-400 group-hover:text-white" />
      </button>
    </FadeContent>
  )
}

export default RandomButton;