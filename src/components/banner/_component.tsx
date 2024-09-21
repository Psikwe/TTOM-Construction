import banner from "../../assets/images/bg.jpeg";

type Props = {};

const Banner = (props: Props) => {
  return (
    <section>
      <div className="relative">
        <div>
          <img
            className="brightness-50 h-[30rem] w-full object-cover"
            src={banner}
          />
        </div>
        <div className="absolute bottom-0 text-white mobile:mx-8 mx-80">
          <h1 className="text-4xl">Welcome to TTOM Construction</h1>
          <p className="my-8">You dream, we build</p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
