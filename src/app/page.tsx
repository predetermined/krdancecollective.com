"use client";
import Image from "next/image";
import { useState } from "react";
import TeamMember from "../components/TeamMember";

const teamMembers = [
  {
    name: "Nicholas",
    role: "Founder",
    image: "/team/nicholas.png",
    description:
      "To Nicholas, the founder of KRDC, dance is a constant dialogue between discipline and grace – a balance that requires strength and resilience.",
  },
  {
    name: "Ivonne",
    role: "Member",
    image: "/team/ivonne.jpg",
    description:
      "For Ivonne, dance is more than movement – it's an existential expression that connects her to her inner truth.",
  },
  {
    name: "Caro",
    role: "Member",
    image: "/team/caro.jpg",
    description:
      "For Caro, dance is a language that speaks deeply from within – a way to express emotions and stories beyond words.",
  },
  {
    name: "Kyttiara",
    role: "Member",
    image: "/team/kyttiara.jpg",
    description:
      "Through dance, Kyttiara discovers the magic of creativity, which never exists in isolation but connects everything she loves.",
  },
];

export default function Home() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleVideoLoaded = () => {
    setVideoLoaded(true);
  };

  return (
    <>
      <section className="flex items-center h-[100dvh] overflow-hidden w-full relative">
        {!videoLoaded && (
          <div className="absolute inset-0 z-20 flex items-center justify-center bg-black text-white">
            Loading…
          </div>
        )}

        <div className="absolute bottom-0 left-0 right-0 top-0 flex px-4 md:px-16 items-center">
          <div className="z-10 max-w-64 flex-col flex md:flex-row md:items-center space-x-4">
            <Image
              className="m-4 md:m-0 absolute bottom-0 left-0 md:sticky md:block w-10 md:h-32 md:w-auto"
              alt="logo"
              width={848}
              height={1037}
              src="/logo-white.png"
            />
            <div className="ml-4 w-px h-12 shrink-0 bg-[#F7F7F7] hidden md:block" />
            <h1 className="mt-2 md:mt-0 text-4xl md:text-5xl text-[#F7F7F7] z-10">
              Berlins Movement for Radical Representation
            </h1>
          </div>
        </div>

        <video
          id="intro"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onCanPlay={handleVideoLoaded}
          className="absolute inset-0 h-screen w-full object-cover"
        >
          <source src="/dance.mp4" type="video/mp4" />
        </video>
      </section>

      <section className="bg-black px-4 md:px-16 py-8 md:py-32">
        <p className="text-xl md:text-2xl">
          Founded by{" "}
          <a href="https://www.instagram.com/nicholaskrose/" target="_blank">
            Nicholas Isaiah King Rose
          </a>
          , King Rose Dance Collective is Germany&apos;s pioneering
          BIPOC/QUEER/FLINTA dance troupe, redefining dance as we know it by
          blending ballet, contemporary styles, and everything in between. This
          is more than just performance; it's about empowerment and celebrating
          diverse voices. Join us as we embrace this dream come true!
        </p>
      </section>

      <section className="bg-[#151515] px-4 md:px-16 py-8 md:py-32">
        <h2 className="text-2xl md:text-4xl">The team behind</h2>
        <p className="md:text-xl mb-8 text-neutral-300">
          Get to know the passionate, creative, and committed dancers of KRDC.
        </p>

        <div className="grid md:grid-cols-4 gap-4">
          {teamMembers.map((member) => (
            <TeamMember
              key={member.name}
              name={member.name}
              role={member.role}
              image={member.image}
              description={member.description}
            />
          ))}
        </div>
      </section>

      <section className="bg-black px-4 md:px-16 pt-8 md:pt-32 pb-4">
        <p className="text-center italic">
          Reaching high isn&apos;t just about ambition—it&apos;s about breaking
          barriers, redefining norms, and creating space for bold, authentic
          artistry. At KRDC, we&apos;re reaching for more: more connection, more
          creativity, and more impact.
        </p>

        {/* <div className="w-px h-12 shrink-0 bg-[#F7F7F7] block" /> */}

        <div className="text-center mt-4">
          <a
            href="mailto:KRDANCECO@GMAIL.COM"
            className="text-xl lg:text-5xl text-center no-underline!"
          >
            KRDANCECO@GMAIL.COM
          </a>
        </div>

        <div className="mt-16 text-right space-x-4 text-sm text-neutral-300">
          <a href="/legal" target="_blank">
            Imprint
          </a>
          <a href="/legal" target="_blank">
            Privacy Policy
          </a>
        </div>
      </section>
    </>
  );
}
