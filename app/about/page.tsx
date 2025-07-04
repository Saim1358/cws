import Image from "next/image";
import Motion from "../components/Motion";

export default function About() {
  return (
    <>
      <section className="about flex flex-col md:flex-row justify-center items-center gap-8 p-10 md:p-28">
        <div className="about-img p-5 md:p-15">
          <Image src="/img/mypic.png" alt="Logo" width={400} height={400} />
        </div>
        <div className="about-content md:w-3/4">
          <Motion
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <h2 className="heading text-5xl ">
              About <span className="text-red-500">Me</span>
            </h2>
          </Motion>
          <Motion
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <h3 className="text-2xl mt-5">Full Stack Web Developer</h3>
          </Motion>
          <Motion
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <p className="text-lg my-5">
              Hey! I am Saiful Islam Saim . Yah ! I don&apos;t have an written
              certificate to show. I don&apos;t have the opportunity to gather
              that. I don&apos;t believe that a damn certificate can prove
              anyone&apos;s ability. I believe that using computer is more
              important than knowing its father&apos;s name or mother&apos;s
              name. You can judge me after going through my projects.
            </p>
            <p className="text-lg my-5">
              I am a Full Stack Web Developer . I started coding at the age of
              14 . I like to learn about technology . I spend most of the time
              to learn about something new in the catagory of technology . You
              can call me an insect of computer , mobile , etc 😆.
            </p>
          </Motion>
        </div>
      </section>
    </>
  );
}
