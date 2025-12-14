const Hero = () => {
  return (
    <div
      id="hero-section"
      className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 lg:min-h-screen px-6 md:px-24 py-12 md:py-24">
      <div className="w-full md:w-1/2 text-center md:text-left grid gap-4">
        <div className="text-5xl grid font-semibold gap-3 ">
          <div className="text-3xl">Hi, I am</div>
          <div className="text-lime-700 font-bold text-nowrap">Sarina Shrestha</div>
          <div className="text-4xl">A Web Developer</div>
        </div>
        <div className="grid gap-2 ">
          <p className=" text-gray-600 ">
            Passionate about creating beautiful, functional, and user-friendly
            websites. Let's bring your digital vision to life with clean code
            and creative solutions.
          </p>
          <div>
            <a href="mailto:sarinashrestha43@gmail.com">
              <button className="bg-lime-500 text-white rounded-2xl px-4 cursor-pointer w-fit text-lg font-semibold py-2">
                Hire Me
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 flex justify-center">
        <img
          src="/sarina.jpg"
          alt="Sarina Shrestha"
          className="w-72 h-72 lg:w-[420px] lg:h-[420px] object-cover rounded-full shadow-lg"
        />
      </div>
    </div>
  );
};

export default Hero;