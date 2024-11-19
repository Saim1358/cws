import Motion from "../components/Motion";
import AllSkills from "./components/AllSkills";
import Image from "next/image";

const Skills = () => {
  return (
    <>
      <section
        className={
          "skill-section flex flex-col md:flex-row justify-center p-10 md:p-20"
        }
      >
        <div className="skill-image p-10 md:p-0">
          <Image
            src="/img/logoBGRemoved.png"
            alt="Logo"
            width={1000}
            height={1000}
          />
        </div>
        <div className="skill-content flex flex-col px-5 lg:justify-center lg:items-center">
          <Motion
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <h1 className="text-5xl text-center">My Skills</h1>
          </Motion>
          <Motion
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <h4 className="capitalize mt-5 text-center md:px-24">
              I have different kinds of knowledge in different fields of
              technlogy . In android , I know about Rooting Phone , custom roms
              , different kinds of mods , etc . In PC , I know some basics of MS
              word , MS exel , MS powerpoint , etc .
            </h4>
          </Motion>
          <h2 className="text-2xl text-center text-orange-500 mt-5">
            Programming Field
          </h2>

          <h4 className="capitalize mt-5 text-center text-2xl">I know :</h4>
          <div className="rounded-xl p-3 pb-10 my-5 dark:bg-slate-800 shadow-2xl bg-slate-300 lg:w-2/3">
            <AllSkills />
          </div>
          <h3 className="text-xl text-center text-orange-500 mt-5">
            More Coming ...
          </h3>
          <span className="block text-green-500 text-2xl my-10 font-bold text-center">
            I LOVE TO CODE !
          </span>
        </div>
      </section>
    </>
  );
};

export default Skills;
