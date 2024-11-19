import Image from "next/image";
import Link from "next/link";
import Motion from "../components/Motion";

export default function contact() {
  return (
    <>
      <section className="flex flex-col md:flex-row justify-center items-center p-10 md:p-24">
        <div className="logo">
          <Image src="/img/logoBGRemoved.png" alt="" width={500} height={500} />
        </div>
        <div className="contact-content">
          <Motion
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <h1 className="text-3xl">Contacts</h1>
          </Motion>
          <Motion
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <h4 className="text-xl mt-5">
              You can contact me throgh Facebook , Messenger and E-Mail .
            </h4>
          </Motion>
          <div className="social-media ">
            <Motion
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <div className="facebook flex mt-10 items-center gap-5 relative">
                <p>My Facebook Profile</p>
                <Link
                  className={"btn btn-primary absolute right-3"}
                  href={"https://www.facebook.com/Saiful.Islam.Saim.1358"}
                  target="_blank"
                >
                  Facebook
                </Link>
              </div>
            </Motion>
            <Motion
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ delay: 1, duration: 1 }}
            >
              <div className="Telegram flex mt-10 items-center gap-5 relative">
                <p>My Telegram ID</p>
                <Link
                  className={"btn btn-primary absolute right-3"}
                  href={"https://www.facebook.com/Saiful.Islam.Saim.1358"}
                  target="_blank"
                >
                  Telegram
                </Link>
              </div>
            </Motion>
            <Motion
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              <div className="Linkedin flex mt-10 items-center gap-5 relative">
                <p>My LinkedIn Profile</p>
                <Link
                  className={"btn btn-primary absolute right-3"}
                  href={
                    "https://www.linkedin.com/mwlite/in/saiful-islam-saim-782773278"
                  }
                  target="_blank"
                >
                  LinkedIn
                </Link>
              </div>
            </Motion>
          </div>
          <Motion
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <div className="Email flex mt-10 items-center gap-5">
              <h4>E-Mail :</h4>
              <h4 className="text-orange-500">saifulislamsaim1358@gmail.com</h4>
            </div>
          </Motion>
        </div>
      </section>
    </>
  );
}