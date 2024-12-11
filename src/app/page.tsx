/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { IconType } from "react-icons";
import { GiStumpRegrowth } from "react-icons/gi";
import { FaLocationDot } from "react-icons/fa6";
import { HiMiniCheckBadge } from "react-icons/hi2";
import { MdSavings } from "react-icons/md";

export default function Home() {
  const SocialProof = (props: { num: number; activity: string }) => {
    return (
      <div className="flex flex-col justify-center items-start">
        <span className="lg:text-3xl text-lg">{props.num}+</span>
        <span className="font-extralight lg:w-5/6 w-full lg:text-sm text-xs">
          {props.activity}
        </span>
      </div>
    );
  };

  const HowWeAreDifferent = (props: {
    icon: IconType;
    h1: string;
    text: string;
  }) => {
    return (
      <div className="flex justify-center items-center lg:gap-5 gap-2.5">
        <div className=" rounded-full text-primary lg:p-2 p-1 flex justify-center items-center">
          <props.icon className="h-8 w-8" />
        </div>

        <div className="flex flex-col lg:gap-2 gap-1">
          <p className="font-bold">{props.h1}</p>

          <p className="font-extralight text-sm">{props.text}</p>
        </div>
      </div>
    );
  };

  return (
    <main className="w-full scroll-smooth m-auto z-10">
      {/* Hero Image Section */}
      <div className="w-full h-screen flex lg:flex-row flex-col items-center">
        {/* Heading */}
        <div className="flex flex-col lg:gap-y-6 gap-y-3 lg:w-2/5 w-full z-10">
          <p className="md:text-6xl text-4xl">
            Stunning,{" "}
            <span className="font-bold text-primary">
              budget-friendly websites
            </span>{" "}
            for your business
          </p>

          <p className="font-extralight md:text-base text-sm">
            Without a website, you're just a{" "}
            <span className="text-primary">want-repreneur</span>. Get a website
            and become an entrepreneur today.
          </p>

          <a href="contact">
            <button className="text-[#453A34] bg-primary md:px-10 px-5 md:py-3 py-1.5 font-bold w-max uppercase md:text-base text-sm">
              Yes, I want this!
            </button>
          </a>
        </div>

        <div className="lg:absolute right-0 flex lg:flex-row flex-col justify-center items-center lg:mt-0 mt-4 lg:w-max w-[80%]">
          <Image
            src={"/images/office hero img.jpg"}
            alt="Alex Web Tech"
            width={500}
            height={500}
            className="object-cover lg:w-[500px] w-[500px] lg:h-fit h-48"
          />

          <div className="lg:py-14 py-5 bg-[#252836] w-max lg:px-14 px-5 flex flex-col justify-center items-start lg:gap-10 gap-6">
            <SocialProof num={4} activity="Years of experience" />
            <SocialProof num={100} activity="Complete projects and portfolio" />
            <SocialProof num={50} activity="Happy clients" />
          </div>
        </div>
      </div>

      {/* Brand associations section */}
      <div className="w-full lg:py-5 py-2.5 flex justify-between items-center flex-wrap">
        {/* <Image
          src={"/images/apple-logo.png"}
          height={100}
          width={100}
          alt="alex-web-tech-brand-association"
        /> */}

        <Image
          src={"/images/google-logo.png"}
          height={100}
          width={100}
          alt="alex-web-tech-brand-association"
        />

        <Image
          src={"/images/netflix-logo.png"}
          height={100}
          width={100}
          alt="alex-web-tech-brand-association"
        />

        {/* <Image
          src={"/images/slack-logo.png"}
          height={100}
          width={100}
          alt="alex-web-tech-brand-association"
        /> */}

        <Image
          src={"/images/facebook-logo.png"}
          height={100}
          width={100}
          alt="alex-web-tech-brand-association"
        />

        {/* <Image
          src={"/images/amazon-logo.png"}
          height={100}
          width={100}
          alt="alex-web-tech-brand-association"
        /> */}

        <Image
          src={"/images/microsoft-logo.png"}
          height={100}
          width={100}
          alt="alex-web-tech-brand-association"
        />

        <Image
          src={"/images/facebook-logo.png"}
          height={100}
          width={100}
          alt="alex-web-tech-brand-association"
        />
      </div>

      {/* Why a website? */}
      <div className="w-full lg:py-10 py-5 flex flex-col items-center justify-center">
        <h1 className="lg:text-5xl text-2xl text-center font-bold">
          Why do I need a website?
        </h1>

        <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-20 gap-10 lg:mt-10 mt-5 lg:max-w-5xl max-w-sm m-auto">
          <div className="flex flex-col lg:gap-2 gap-1 w-full justify-center items-center">
            <Image
              src={"/images/undraw_stand_out_-1-oag.svg"}
              width={500}
              height={500}
              alt="why do I need a website?"
              className="h-36 w-36"
            />

            <div className="flex flex-col lg:gap-3 gap-1.5 text-center">
              <p className="capitalize text-lg text-primary">
                where are you among the millions?
              </p>

              <div className="space-y-4">
                <p className="font-extralight text-sm">
                  A social media account is nice and all, but…
                </p>
                <p className="font-extralight text-sm">
                  That's all you are. An account amongst billions
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:gap-2 gap-1 w-full justify-center items-center">
            <Image
              src={"/images/undraw_both_sides_hbv3.svg"}
              width={500}
              height={500}
              alt="why do I need a website?"
              className="h-36 w-36"
            />

            <div className="flex flex-col lg:gap-3 gap-1.5 text-center">
              <p className="capitalize text-lg text-primary">
                Are you just playing with online trends?
              </p>

              <div className="space-y-4">
                <p className="font-extralight text-sm">
                  Where do your clients draw the line between you and the little
                  kids playing around on the internet?
                </p>
                <p className="font-extralight text-sm">
                  Sure you can post the nice reels or shorts but they like your
                  post and forget about you
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:gap-2 gap-1 w-full justify-center items-center">
            <Image
              src={"/images/undraw_website_ij0l.svg"}
              width={500}
              height={500}
              alt="why do I need a website?"
              className="h-36 w-36"
            />

            <div className="flex flex-col lg:gap-3 gap-1.5 text-center">
              <p className="capitalize text-lg text-primary">
                Look the part with the right tools
              </p>

              <div className="space-y-4">
                <p className="font-extralight text-sm">
                  Potential clients will able to tell you're the real deal if
                  you can say...
                </p>
                <p className="font-extralight text-sm">
                  Check out our website @{" "}
                  <span className="text-primary">www.youbrand.com</span>
                </p>
              </div>
            </div>
          </div>

          {/* <ReasonForAWebsite
            img="/images/find-online.jpeg"
            text="Where do your clients draw the line between you and the little kids playing around on the internet?"
          />
          <ReasonForAWebsite
            img="/images/website.jpg"
            text="They do that when you can say “Check out our website, www.youbrand.com”"
          /> */}
        </div>

        <a href="contact" className="lg:mt-10 mt-5">
          <button className="text-[#453A34] bg-primary md:px-10 px-5 md:py-3 py-1.5 font-bold w-max uppercase md:text-base text-sm">
            Yes, I want this!
          </button>
        </a>
      </div>

      {/* How are we different? */}
      <div
        id="why"
        className="w-full lg:py-10 py-5 flex flex-col items-center justify-center"
      >
        <h1 className="lg:text-5xl text-xl lg:mt-10 mt-5 text-center font-bold">
          How are we different?
        </h1>

        <div className="flex lg:flex-row flex-col lg:gap-20 md:10 gap-2.5 lg:mt-10 mt-5 lg:max-w-5xl max-w-sm m-auto justify-center items-center">
          <Image
            src={"/images/blue-figure-stands-out-crowd-red-men.jpg"}
            width={500}
            height={500}
            alt="How is alex web tech different?"
            className="lg:h-[550px] h-56 bg-cover rounded-xl"
          />

          <div className="w-full">
            <p className="text- font-extralight">
              We've told you why you need a website, but why get one from us and
              not the others?
            </p>

            <div className="lg:mt-5 mt-2.5 lg:space-y-8 space-y-4">
              <HowWeAreDifferent
                icon={GiStumpRegrowth}
                h1="We Get the Entrepreneur Hustle"
                text="We know you're hustling to build something great, and we're here to
            help you look the part with your website."
              />

              <HowWeAreDifferent
                icon={FaLocationDot}
                h1="We're Local"
                text="We're nearby, not in some distant call center. So you'll be able to reach us when you need us."
              />

              <HowWeAreDifferent
                icon={HiMiniCheckBadge}
                h1="We Stick to What We Know"
                text="We stick to industries we understand, so we can deliver the results you need."
              />

              <HowWeAreDifferent
                icon={MdSavings}
                h1="No Crazy cost"
                text="We know you’re not a huge corporation with money to burn, so we keep our prices fair, letting you invest more in growing your business."
              />
            </div>
          </div>
        </div>
      </div>

      {/* Free consult */}
      <div className="w-full lg:pt-10 pt-5 flex flex-col justify-between items-center">
        <h1 className="lg:text-5xl md:text-3xl text-xl text-center font-bold w-1/2">
          Contact us for a free consultation
        </h1>

        <a href="contact">
          <button className="text-[#453A34] rounded-md bg-primary lg:px-10 px-5 lg:mt-10 mt-5 lg:py-3 py-1.5 font-bold w-max uppercase lg:text-base text-sm">
            Get the free consultation
          </button>
        </a>
      </div>
    </main>
  );
}
