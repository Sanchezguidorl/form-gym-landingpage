import Image from "next/image";
import imgAppStore from "../../../public/images/appstore.webp";
import imgPlayStore from "../../../public/images/playstore.webp";

function DownloadApp() {
  return (
    <section id="DownloadApp" className="mt-6 relative overflow-hidden flex justify-center bg-gradient-to-bl">

      <div className="absolute w-full h-full flex justify-center items-center text-white download-app-overlay">
        <div className="text-center max-w-xs sm:max-w-lg font-mono">
          <h1 className="text-4xl capitalize">Join us in mobile</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            hic ipsa sunt sed commodi eos quo dolores ducimus perferendis.
          </p>
          <div className="flex justify-between gap-2 mt-5">
            <a href="#" className=" saturate-50 brightness-75 hover:brightness-125 hover:saturate-100">
            <Image src={imgPlayStore} alt="Button app play store"/>
            </a>
            <a href="#" className="saturate-50 brightness-75 hover:brightness-125 hover:saturate-100">
            <Image src={imgAppStore} alt="Button app app store"/>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DownloadApp;
