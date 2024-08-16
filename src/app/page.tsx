/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { IconType } from "react-icons";
import { GiStumpRegrowth } from "react-icons/gi";
import { FaLocationDot } from "react-icons/fa6";
import { HiMiniCheckBadge } from "react-icons/hi2";
import { MdSavings } from "react-icons/md";

// TODO: Add CTA buttons to each section

export default function Home() {
  const SocialProof = (props: { num: number; activity: string }) => {
    return (
      <div className="flex flex-col justify-center items-start">
        <span className="text-3xl">{props.num}+</span>
        <span className="font-extralight w-5/6 text-sm">{props.activity}</span>
      </div>
    );
  };

  const HowWeAreDifferent = (props: {
    icon: IconType;
    h1: string;
    text: string;
  }) => {
    return (
      <div className="flex justify-center items-center gap-5">
        <div className=" rounded-full text-primary p-2 flex justify-center items-center">
          <props.icon className="h-8 w-8" />
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-bold">{props.h1}</p>

          <p className="font-extralight text-sm">{props.text}</p>
        </div>
      </div>
    );
  };

  return (
    <main className="w-full scroll-smooth">
      {/* Hero Image Section */}
      <div className="w-full h-screen flex items-center">
        {/* Heading */}
        <div className="flex flex-col gap-y-6 w-2/5">
          <p className="text-6xl">
            Stunning,{" "}
            <span className="font-bold text-primary">
              budget-friendly websites
            </span>{" "}
            for your business
          </p>

          <p className="font-extralight">
            Without a website, you're just a{" "}
            <span className="text-primary">want-repreneur</span>. Get a website
            and become an entrepreneur today.
          </p>

          <a href="contact">
            <button className="text-[#453A34] bg-primary px-10 py-3 font-bold w-max uppercase">
              Yes, I want this!
            </button>
          </a>
        </div>

        <div className="absolute right-0 flex justify-center items-center">
          <Image
            src={"/images/office hero img.jpg"}
            alt="Alex Web Tech"
            width={500}
            height={500}
            className="object-cover"
          />

          <div className="py-14 bg-[#252836] w-max px-14 flex flex-col justify-center items-start gap-10">
            <SocialProof num={4} activity="Years of experience" />
            <SocialProof num={100} activity="Complete projects and portfolio" />
            <SocialProof num={50} activity="Happy clients" />
          </div>
        </div>
      </div>

      {/* Brand associations section */}
      <div className="w-full py-5 flex justify-between items-center">
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
      <div className="w-full py-10 flex flex-col items-center justify-center">
        <h1 className="text-5xl text-center font-bold">
          Why do I need a website?
        </h1>

        <div className="grid grid-cols-3 gap-20 mt-10 max-w-5xl m-auto">
          <div className="flex flex-col gap-2 w-full justify-center items-center">
            <Image
              src={"/images/undraw_stand_out_-1-oag.svg"}
              width={500}
              height={500}
              alt="why do I need a website?"
              className="h-52 w-52"
            />

            <div className="flex flex-col gap-3 text-center">
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

          <div className="flex flex-col gap-2 w-full justify-center items-center">
            <Image
              src={"/images/undraw_both_sides_hbv3.svg"}
              width={500}
              height={500}
              alt="why do I need a website?"
              className="h-52 w-52"
            />

            <div className="flex flex-col gap-3 text-center">
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

          <div className="flex flex-col gap-2 w-full justify-center items-center">
            <Image
              src={"/images/undraw_website_ij0l.svg"}
              width={500}
              height={500}
              alt="why do I need a website?"
              className="h-52 w-52"
            />

            <div className="flex flex-col gap-3 text-center">
              <p className="capitalize text-lg text-primary">
                Are you just playing with online trends?
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

        <a href="contact">
          <button className="text-[#453A34] bg-primary px-10 py-3 font-bold w-max uppercase mt-10">
            Yes, I want one!
          </button>
        </a>
      </div>

      {/* How are we different? */}
      <div
        id="why"
        className="w-full py-10 flex flex-col items-center justify-center"
      >
        <h1 className="text-5xl mt-10 text-center font-bold">
          How are we different?
        </h1>

        <div className="flex gap-20 mt-10 max-w-5xl m-auto justify-center items-center">
          <Image
            src={"/images/blue-figure-stands-out-crowd-red-men.jpg"}
            width={500}
            height={500}
            alt="How is alex web tech different?"
            className="h-[550px] bg-cover rounded-xl"
          />

          <div className="w-full">
            <p className="text- font-extralight">
              We've told you why you need a website, but why get one from us and
              not the others?
            </p>

            <div className="mt-5 space-y-8">
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

      {/* Contact Us */}

      <div className="w-full pt-10 mb-40 flex flex-col justify-between items-center">
        <h1 className="text-5xl text-center font-bold w-1/2">
          Contact us for a free consultation
        </h1>

        <a href="contact">
          <button className="text-[#453A34] rounded-md bg-primary px-10 mt-10 py-3 font-bold w-max uppercase">
            Get the free consultation
          </button>
        </a>
      </div>
    </main>
  );
}
