import Image from "next/image";
import aboutImg from "../../../public/images/about-img.webp";

function About() {
  return (
    <section
      id="About"
      className="h-max my-5 flex justify-center items-center w-full flex-col sm:flex-row"
    >
      <div className="flex-1">
        <Image src={aboutImg} alt="" className="" />
      </div>
      <div className="flex-1 text-white p-10">
        <div >
          <h2 className="text-2xl sm:text-4xl">About Form Fit Studio</h2>
          <p className="max-w-40 overflow-hidden pt-3 text-sm sm:text-base">
            FORM is a personal fitness platform that offers exceptional
            personal coaching, customized for each individual1. They provide
            weekly live 1-on-1 sessions with a trainer, a custom workout plan
            each week, and amazing on-demand classes1.
          </p>
          <button className="btn-primary mt-4 hover:brightness-125">Read More</button>
        </div>
      </div>
    </section>
  );
}

export default About;
