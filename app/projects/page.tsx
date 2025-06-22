import Image from "next/image";
import Link from "next/link";
import Motion from "../components/Motion";
import clsx from "clsx";

const projects = [
  {
    title: "ADDA - A Chat App Built With NextJS",
    href: "https://adda-cws.vercel.app/",
    logoUrl: "/img/chatLogo.png",
    className: "pointer-events-none btn-disabled",
  },
];

export default function Projects() {
  return (
    <>
      <section className="portfolio">
        <Motion
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <h2 className="text-3xl text-center my-5 mb-10">
            Latest <span className="text-red-500">Projects</span>
          </h2>
        </Motion>
        <div className="portfolio-container flex gap-8 p-24 justify-center md:justify-normal">
          {projects.map((item) => (
            <Motion
              key={item.href}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <div className="Adda rounded-3xl flex flex-col justify-center items-center">
                <Image
                  src={item.logoUrl}
                  alt="Logo"
                  width={80}
                  height={80}
                  className="rounded-3xl"
                />
                <h4 className="mt-5 uppercase text-center max-w-[15rem]">
                  {item.title}
                </h4>
                <Link
                  href={item.href}
                  className={clsx("btn btn-primary mt-5", item.className)}
                  target="_blank"
                  aria-disabled={item.className === "pointer-events-none btn-disabled"}
                >
                  Under Development
                </Link>
              </div>
            </Motion>
          ))}
        </div>
      </section>
    </>
  );
}
