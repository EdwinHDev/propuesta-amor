"use client";
import { useEffect, useState } from "react";
import Galaxy from "@/components/Galaxy";
import StartMessage from "@/components/start-mssage";
import FadeContent from "@/components/FadeContent";
import { ArrowRight, Heart, X } from "lucide-react";
import { MagicCard } from "@/components/ui/magic-card";
import FloatingHearts from "@/components/FloatingHearts";
import BlurText from "@/components/BlurText";
import RandomButton from "@/components/random-buttom";
import Confetti from "react-confetti";
import CircularGallery from "@/components/CircularGallery";

const defaultItems = [
  {
    image: `/images/17.jpg`,
    text: 'Al infinito y más allá'
  },
  {
    image: `/images/16.jpg`,
    text: 'Tu piloteas'
  },
  {
    image: `/images/15.jpg`,
    text: 'En el Salto Angel'
  },
  {
    image: `/images/14.jpg`,
    text: 'Comiendo en New York'
  },
  {
    image: `/images/13.jpg`,
    text: 'Otra vez comiendo (Japón)'
  },
  {
    image: `/images/12.jpg`,
    text: 'Fotito otaku'
  },
  {
    image: `/images/11.jpg`,
    text: 'Viaje a Francia'
  },
  {
    image: `/images/10.jpg`,
    text: 'Nuestra Boda'
  },
  {
    image: `/images/09.jpg`,
    text: 'Italia (¿Quién come más?)'
  },
  {
    image: `/images/08.jpg`,
    text: 'En Venecia'
  },
  {
    image: `/images/07.jpg`,
    text: 'Sabes que lo haré jijiji'
  },
  {
    image: `/images/06.jpg`,
    text: 'En el Amazonas'
  },
  {
    image: `/images/05.jpg`,
    text: 'En los Roques'
  },
  {
    image: `/images/04.jpg`,
    text: 'En Margarita'
  },
  {
    image: `/images/03.jpg`,
    text: 'En Canadá'
  },
  {
    image: `/images/02.jpg`,
    text: 'De viejitos'
  },
  {
    image: `/images/01.jpg`,
    text: 'En el cielo'
  },
];

export default function Home() {

  const [viewMessage, setViewMessage] = useState(0);
  const [exitEffect, setExitEffect] = useState('');
  const [sizeMessage, setSizeMessage] = useState(20);

  const handleStart = () => {
    setViewMessage(1);

    setTimeout(() => {
      setViewMessage(2);
    }, 1000);

  };

  useEffect(() => {
    if (exitEffect) {
      setTimeout(() => {
        setExitEffect('');
        setViewMessage(viewMessage + 1);
      }, 1000);
    }
  }, [exitEffect]);



  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      <StartMessage isVisible={viewMessage === 0} handleStart={handleStart} />
      {
        viewMessage === 2 && (
          <FadeContent
            blur={true}
            delay={500}
            duration={500}
            easing="ease-out"
            initialOpacity={0}
            className="absolute z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <MagicCard className={`rounded-2xl overflow-hidden ${exitEffect} transition-all duration-1000 ease-in-out`}>
              <div className="p-6 flex flex-col gap-2 items-center justify-center">
                <BlurText
                  text="Era casi imposible que se alinearan los planetas, pero se alinearon..."
                  delay={250}
                  animateBy="words"
                  direction="top"
                  onAnimationComplete={() => { }}
                  className="text-4xl mb-8 flex justify-center"
                />
                <FadeContent blur={true} delay={1000} duration={500} easing="ease-out" initialOpacity={0}>
                  <button
                    className="text-xl font-normal flex items-center gap-2 px-6 py-2 rounded-full bg-pink-400/20 hover:bg-pink-400 text-white group transition-all duration-500 hover:scale-120"
                    onClick={() => setExitEffect('opacity-0 scale-0')}
                  >
                    Continuar
                    <ArrowRight className="text-pink-400 group-hover:text-white" />
                  </button>
                </FadeContent>
              </div>
            </MagicCard>
          </FadeContent>
        )
      }
      {
        viewMessage === 3 && (
          <FadeContent
            blur={true}
            delay={500}
            duration={500}
            easing="ease-out"
            initialOpacity={0}
            className="absolute z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <MagicCard className={`rounded-2xl overflow-hidden ${exitEffect} transition-all duration-1000 ease-in-out`}>
              <div className="p-6 flex flex-col gap-2 items-center justify-center">
                <BlurText
                  text="Y aun menos probable que dos niños que se conocieron jugando en el parque, se reencontraran!"
                  delay={250}
                  animateBy="words"
                  direction="top"
                  onAnimationComplete={() => { }}
                  className="text-4xl mb-8 flex justify-center"
                />
                <FadeContent blur={true} delay={1000} duration={500} easing="ease-out" initialOpacity={0}>
                  <button
                    className="text-xl font-normal flex items-center gap-2 px-6 py-2 rounded-full bg-pink-400/20 hover:bg-pink-400 text-white group transition-all duration-500 hover:scale-120"
                    onClick={() => setExitEffect('opacity-0 scale-0')}
                  >
                    Continuar
                    <ArrowRight className="text-pink-400 group-hover:text-white" />
                  </button>
                </FadeContent>
              </div>
            </MagicCard>
          </FadeContent>
        )
      }
      {
        viewMessage === 4 && (
          <FadeContent
            blur={true}
            delay={500}
            duration={500}
            easing="ease-out"
            initialOpacity={0}
            className="absolute z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <MagicCard className={`rounded-2xl overflow-hidden ${exitEffect} transition-all duration-1000 ease-in-out`}>
              <div className="p-6 flex flex-col gap-2 items-center justify-center">
                <BlurText
                  text="Pero en esta vida todos tenemos diferentes opciones, así que te invito a presionar la opción 'NO' 😜"
                  delay={250}
                  animateBy="words"
                  direction="top"
                  onAnimationComplete={() => { }}
                  className="text-4xl mb-8 flex justify-center"
                />
                <FadeContent blur={true} delay={1000} duration={500} easing="ease-out" initialOpacity={0}>
                  <button
                    className="text-xl font-normal flex items-center gap-2 px-6 py-2 rounded-full bg-pink-400/20 hover:bg-pink-400 text-white group transition-all duration-500 hover:scale-120"
                    onClick={() => setExitEffect('opacity-0 scale-0')}
                  >
                    Continuar
                    <ArrowRight className="text-pink-400 group-hover:text-white" />
                  </button>
                </FadeContent>
              </div>
            </MagicCard>
          </FadeContent>
        )
      }
      {
        viewMessage === 5 && (
          <>
            <FadeContent
              blur={true}
              delay={500}
              duration={500}
              easing="ease-out"
              initialOpacity={0}
              className="absolute z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <MagicCard className={`rounded-2xl overflow-hidden ${exitEffect} transition-all duration-1000 ease-in-out`}>
                <div className="p-6 flex flex-col gap-2 items-center justify-center">
                  <BlurText
                    text="¿Quieres ser mi novia?"
                    delay={250}
                    animateBy="words"
                    direction="top"
                    onAnimationComplete={() => { }}
                    className="text-5xl mb-8 flex justify-center"
                  />
                  <div className="flex gap-4">
                    <FadeContent blur={true} delay={1000} duration={500} easing="ease-out" initialOpacity={0}>
                      <button
                        className="text-xl font-normal flex items-center gap-2 px-6 py-2 rounded-full bg-pink-400/20 hover:bg-pink-400 text-white group transition-all duration-500 hover:scale-120"
                        onClick={() => setExitEffect('opacity-0 scale-0')}
                        style={{ fontSize: `${sizeMessage}px` }}
                      >
                        Si
                        {
                          sizeMessage > 20 ? (
                            <Heart className={`text-pink-400 group-hover:text-white size-[100px]`} />
                          ) : (
                            <Heart className="text-pink-400 group-hover:text-white" />
                          )
                        }
                      </button>
                    </FadeContent>
                    {
                      sizeMessage <= 20 && (
                        <FadeContent blur={true} delay={1000} duration={500} easing="ease-out" initialOpacity={0}>
                          <button
                            className="opacity-0 text-xl font-normal flex items-center gap-2 px-6 py-2 rounded-full bg-pink-400/20 hover:bg-pink-400 text-white group transition-all duration-500 hover:scale-120"
                            onClick={() => setExitEffect('opacity-0 scale-0')}
                          >
                            No
                            <X className="text-pink-400 group-hover:text-white" />
                          </button>
                        </FadeContent>
                      )
                    }
                  </div>
                </div>
              </MagicCard>
            </FadeContent>
            {
              sizeMessage <= 20 && viewMessage === 5 && (
                <RandomButton sizeMessage={sizeMessage} setSizeMessage={setSizeMessage} className={`${exitEffect} transition-all duration-1000 ease-in-out`} />
              )
            }
          </>
        )
      }
      {
        viewMessage === 6 && (
          <>
            <Confetti className="absolute inset-0 z-[1000] w-full h-full" />
            <FadeContent
              blur={true}
              delay={500}
              duration={500}
              easing="ease-out"
              initialOpacity={0}
              className="absolute z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <MagicCard className={`rounded-2xl overflow-hidden ${exitEffect} transition-all duration-1000 ease-in-out p-6`}>
                <div className="flex flex-col items-center gap-4">
                  <BlurText
                    text="¡No te imaginas lo feliz que me haces 🥹!"
                    delay={250}
                    animateBy="words"
                    direction="top"
                    onAnimationComplete={() => { }}
                    className="text-3xl mb-8 flex justify-center"
                  />
                  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="motion-preset-pulse size-[100px] text-pink-400">
                    <path d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z" />
                  </svg>
                </div>
                <div className="flex justify-center mt-6">
                  <FadeContent blur={true} delay={1000} duration={500} easing="ease-out" initialOpacity={0}>
                    <button
                      className="text-xl font-normal flex items-center gap-2 px-6 py-2 rounded-full bg-pink-400/20 hover:bg-pink-400 text-white group transition-all duration-500 hover:scale-120"
                      onClick={() => setExitEffect('opacity-0 scale-0')}
                    >
                      Continuar
                      <ArrowRight className="text-pink-400 group-hover:text-white" />
                    </button>
                  </FadeContent>
                </div>
              </MagicCard>
            </FadeContent>
          </>
        )
      }
      {
        viewMessage === 7 && (
          <FadeContent
            blur={true}
            delay={500}
            duration={500}
            easing="ease-out"
            initialOpacity={0}
            className="absolute inset-0 z-50 w-full h-screen"
          >
            <div className={`py-16 ${exitEffect} transition-all duration-1000 ease-in-out`}>
              <BlurText
                text="Ahora una pequeña historia de nuestras vidas 🍕🚀⛵✈️🏔️🏖️🗽⛩️"
                delay={250}
                animateBy="words"
                direction="top"
                onAnimationComplete={() => { }}
                className="text-5xl mb-8 flex justify-center"
              />
              <div className="flex justify-center mt-6">
                <button
                  className="text-xl font-normal flex items-center gap-2 px-6 py-2 rounded-full bg-pink-400/20 hover:bg-pink-400 text-white group transition-all duration-500 hover:scale-120"
                  onClick={() => setExitEffect('opacity-0 scale-0')}
                >
                  Continuar
                  <ArrowRight className="text-pink-400 group-hover:text-white" />
                </button>
              </div>
            </div>
            <div style={{ height: '600px', position: 'relative' }} className={`transition-all duration-1000 ease-in-out ${exitEffect}`}>
              <CircularGallery bend={1} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02} items={defaultItems} />
            </div>
          </FadeContent>
        )
      }

      {
        viewMessage === 8 && (
          <>
            <FloatingHearts 
              count={15}
              minSize={32}
              maxSize={64}
              minDuration={8}
              maxDuration={15}
              color="#f41a67"
              opacity={0.8}
            />
            <FadeContent
              blur={true}
              delay={500}
              duration={500}
              easing="ease-out"
              initialOpacity={0}
              className="absolute z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <MagicCard className={`rounded-2xl overflow-hidden ${exitEffect} transition-all duration-1000 ease-in-out p-6`}>
                <BlurText
                  text="Gracias por tanto amor y paciencia 😍"
                  delay={250}
                  animateBy="words"
                  direction="top"
                  onAnimationComplete={() => { }}
                  className="text-5xl mb-8 flex justify-center"
                />
              </MagicCard>
            </FadeContent>
          </>
        )
      }

      <Galaxy
        mouseRepulsion={viewMessage === 8 ? true : false}
        mouseInteraction={viewMessage === 8 ? true : false}
        speed={1}
        repulsionStrength={1}
        density={0.7}
        glowIntensity={0.3}
        hueShift={140}
      />
    </div>
  );
}
