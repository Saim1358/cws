import Image from "next/image";
import Link from "next/link";
import Motion from "@/app/components/Motion";

const projects = [
  {
    title: "ADDA - A Chat App Built With NextJS",
    href: "https://adda-cws.vercel.app/",
    logoUrl: "/img/chatLogo.png",
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
            Leteast <span className="text-red-500">Projects</span>
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
                  className="btn btn-primary mt-5"
                  target="_blank"
                >
                  Visit
                </Link>
              </div>
            </Motion>
          ))}
        </div>
      </section>
    </>
  );
}
