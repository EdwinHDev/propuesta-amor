import { Heart } from "lucide-react";
import BlurText from "./BlurText";
import FadeContent from "./FadeContent";
import { MagicCard } from "./ui/magic-card";

interface StartMessageProps {
  isVisible: boolean;
  handleStart: () => void;
}

const StartMessage = ({ isVisible, handleStart }: StartMessageProps) => {
  return (
    <div
      className={`px-4 max-w-lg w-full absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] z-50 transition-all duration-500 ease-in-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'
        }`}
    >
      <MagicCard className="rounded-2xl overflow-hidden">
        <div className="p-6 flex flex-col gap-2 items-center justify-center">
          <BlurText
            text="¿Estas lista para empezar Day?"
            delay={250}
            animateBy="words"
            direction="top"
            onAnimationComplete={() => { }}
            className="text-4xl mb-8 flex justify-center"
          />
          <FadeContent blur={true} delay={1000} duration={500} easing="ease-out" initialOpacity={0}>
            <button
              className="text-xl font-normal flex items-center gap-2 px-6 py-2 rounded-full bg-pink-400/20 hover:bg-pink-400 text-white group transition-all duration-500 hover:scale-120"
              onClick={handleStart}
            >
              Si
              <Heart className="text-pink-400 group-hover:text-white" />
            </button>
          </FadeContent>

        </div>
      </MagicCard>
    </div>
  );
};

export default StartMessage;
