import imgComunity from "../../../public/images/comunity.jpg";
import imgResults from "../../../public/images/results.jpg";
import imgMotivation from "../../../public/images/motivation.jpg";
import Image from "next/image";

function Profits() {
  return (
    <section id="Profits" className="mt-32">
      <h2 className="text-primary-color text-3xl sm:text-5xl font-bold text-center mb-16 capitalize max-w-2xl mx-auto p-2">
        Join base and transform your body and mind
      </h2>
      <div className="">
        <div className=" grid grid-cols-1 sm:grid-cols-2  ">
          <div className="flex items-center">
            <Image
              className="saturate-50"
              src={imgComunity}
              alt="Comunity image"
            />
          </div>
          <div className="p-4 py-8 sm:py-4 max-w-sm mx-auto my-auto">
            <h3 className="text-primary-color text-3xl font-bold mb-4">Comunity</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem labore, placeat necessitatibus expedita recusandae
              doloribus iste numquam quam?
            </p>
          </div>
        </div>
        <div className=" grid grid-cols-1  sm:grid-cols-2">
          <div className="flex items-center sm:order-2">
            <Image
              className="saturate-50"
              src={imgMotivation}
              alt="Motivation image"
            />
          </div>
          <div className="p-4 py-8 sm:py-0 max-w-sm mx-auto my-auto sm:order-1">
            <h3 className="text-primary-color text-3xl font-bold mb-4">Motivation</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem labore, placeat necessitatibus expedita recusandae
              doloribus iste numquam quam?
            </p>
          </div>
        </div>
        <div className=" grid grid-cols-1 sm:grid-cols-2  ">
          <div className="flex items-center">
            <Image
              className="saturate-50"
              src={imgResults}
              alt="Results image"
            />
          </div>
          <div className="p-4 py-8 sm:py-4 max-w-sm mx-auto my-auto">
            <h3 className="text-primary-color text-3xl font-bold mb-4">Results</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem labore, placeat necessitatibus expedita recusandae
              doloribus iste numquam quam?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profits;
