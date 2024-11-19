import clsx from "clsx";
import Motion from "../../components/Motion";

const allSkills = [
  {
    name: "HTML, CSS, JS",
    percent: "95%",
    w: "w-[95%]",
    delay: 0.3,
  },
  {
    name: "React",
    percent: "85%",
    w: "w-[85%]",
    delay: 0.6,
  },
  {
    name: "NextJS Stack",
    percent: "80%",
    w: "w-[80%]",
    delay: 0.9,
  },
  {
    name: "TypeScript",
    percent: "85%",
    w: "w-[85%]",
    delay: 0.9,
  },
  {
    name: "Tailwindcss",
    percent: "95%",
    w: "w-[95%]",
    delay: 1.2,
  },
  {
    name: "MongoDB",
    percent: "80%",
    w: "w-[80%]",
    delay: 1.5,
  },
  {
    name: "MERN Stack",
    percent: "75%",
    w: "w-[75%]",
    delay: 1.8,
  },
  {
    name: "React Native",
    percent: "65%",
    w: "w-[65%]",
    delay: 2.1,
  },
];

export default function AllSkills() {
  return (
    <>
      {allSkills.map((skill) => (
        <Motion
          key={skill.name}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ delay: skill.delay, duration: 1 }}
        >
          <div className="bg-white w-4/5 h-5 rounded-xl mx-auto mt-5">
            <div
              className={clsx(
                "h-full bg-red-500 rounded-xl flex relative items-center justify-around",
                skill.w
              )}
            >
              <p className="absolute left-3 text-white text-[0.6rem]">
                {skill.name}
              </p>
              <p className="absolute right-3 text-center text-white">
                {skill.percent}
              </p>
            </div>
          </div>
        </Motion>
      ))}
    </>
  );
}
