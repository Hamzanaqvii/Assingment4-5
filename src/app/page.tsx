import Link from "next/link";

export default function Home() {
  return (
    <div className="parentContainer flex justify-center w-[100%] flex-wrap ">
      <div className="transition-transform transform scale-y-100 min-h-[400px] lg:min-w-[420px] lg:min-h-[350px] md:min-h-[420px] md:max-w-[340px] sm:max-w-[300px] sm:min-h-[440px] m-4 rounded-2xl bg-white shadow-lg p-4 hover:scale-y-105">
        <img
          src="blog01.webp"
          alt=""
          className=" w-[400px] h-[170px] bg-red-100"
        />
        <h1 className="text-xl font-bold mb-4">
          "The Future of Web Development: Key Trends Shaping 2024"
        </h1>
        <p className="overflow-hidden">
          <strong>Description</strong>: The blog explores key web development
          trends for 2024, including Jamstack, serverless architecture, and
          headless CMS.
        </p>
        <Link href="/Blog-1">
          <button className="custom-button w-[100px] h-[30px] font-semibold bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700 hover:scale-105 transition-transform duration-300">
            <span>Read More</span>
          </button>
        </Link>
      </div>
      <div className="transition-transform transform scale-y-100 min-h-[400px] lg:min-w-[420px] lg:min-h-[350px] md:min-h-[420px] md:max-w-[340px] sm:max-w-[300px] sm:min-h-[440px] m-4 rounded-2xl bg-white shadow-lg p-4 hover:scale-y-105">
        <img
          src="blog02.webp"
          alt=""
          className=" w-[400px] h-[170px] bg-red-100"
        />
        <h1 className="text-xl font-bold mb-4">
          "Understanding Candlestick Patterns in Crypto Trading: A Beginner’s
          Guide"
        </h1>
        <p>
          <strong>Description</strong>:This blog serves as a beginner's guide to
          understanding candlestick patterns in crypto trading, emphasizing
          their significance in technical analysis.
        </p>
        <Link href="/Blog-2">
          <button className="custom-button w-[100px] h-[30px] font-semibold bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700 hover:scale-105 transition-transform duration-300">
            <span>Read More</span>
          </button>
        </Link>
      </div>
      <div className="transition-transform transform scale-y-100 min-h-[400px] lg:min-w-[420px] lg:min-h-[350px] md:min-h-[420px] md:max-w-[340px] sm:max-w-[300px] sm:min-h-[440px] m-4 rounded-2xl bg-white shadow-lg p-4 hover:scale-y-105">
        {" "}
        <img
          src="blog03.webp"
          alt=""
          className=" w-[400px] h-[170px] bg-red-100"
        />
        <h1 className="text-xl font-bold mb-4">
          "How Artificial Intelligence is Transforming Businesses"
        </h1>
        <p>
          <strong>Description</strong>: This blog explores how Artificial
          Intelligence (AI) is transforming businesses across various
          industries. It highlights key use cases, such as chatbots in customer
          service, automated trading in finance, and diagnostic tools in
          healthcare.
        </p>
        <Link href="/Blog-3">
          <button className="custom-button w-[100px] h-[30px] font-semibold bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700 hover:scale-105 transition-transform duration-300">
            <span>Read More</span>
          </button>
        </Link>
      </div>
      <div className="transition-transform transform scale-y-100 min-h-[400px] lg:min-w-[420px] lg:min-h-[350px] md:min-h-[420px] md:max-w-[340px] sm:max-w-[300px] sm:min-h-[440px] m-4 rounded-2xl bg-white shadow-lg p-4 hover:scale-y-105">
        {" "}
        <img
          src="blog04.webp"
          alt=""
          className=" w-[400px] h-[170px] bg-red-100"
        />
        <h1 className="text-xl font-bold mb-4">
          "From Frontend to Backend: A Developer’s Guide to Full Stack
          Development"
        </h1>
        <p>
          <strong>Description</strong>: This blog serves as a comprehensive
          guide for developers transitioning from frontend to full stack
          development. It outlines the essential skills needed in both frontend
          and backend technologies, the importance of API integration and
          security practices, and provides useful tools and resources for
          mastering full stack development.
        </p>
        <Link href="/Blog-4">
          <button className="custom-button w-[100px] h-[30px] font-semibold bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700 hover:scale-105 transition-transform duration-300">
            <span>Read More</span>
          </button>
        </Link>
      </div>
      <div className="transition-transform transform scale-y-100 min-h-[400px] lg:min-w-[420px] lg:min-h-[350px] md:min-h-[420px] md:max-w-[340px] sm:max-w-[300px] sm:min-h-[440px] m-4 rounded-2xl bg-white shadow-lg p-4 hover:scale-y-105">
        {" "}
        <img
          src="blog05.webp"
          alt=""
          className=" w-[400px] h-[170px] bg-red-100"
        />
        <h1 className="text-xl font-bold mb-4">
          "Risk Management in Crypto Trading: How to Safeguard Your Investments"
        </h1>
        <p>
          <strong>Description</strong>:This blog delves into the importance of
          risk management in cryptocurrency trading, addressing the volatility
          of crypto markets and outlining essential strategies to safeguard
          investments.
        </p>
        <Link href="/Blog-5">
          <button className="custom-button w-[100px] h-[30px] font-semibold bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700 hover:scale-105 transition-transform duration-300">
            <span>Read More</span>
          </button>
        </Link>
      </div>
      <div className="transition-transform transform scale-y-100 min-h-[400px] lg:min-w-[420px] lg:min-h-[350px] md:min-h-[420px] md:max-w-[340px] sm:max-w-[300px] sm:min-h-[440px] m-4 rounded-2xl bg-white shadow-lg p-4 hover:scale-y-105">
        <img
          src="blog06.webp"
          alt=""
          className=" w-[400px] h-[170px] bg-red-100"
        />
        <h1 className="text-xl font-bold mb-4">
          "The Role of Automation in Software Development: Boosting Efficiency"
        </h1>
        <p>
          <strong>Description</strong>: This blog discusses the transformative
          role of automation in software development, highlighting its impact on
          efficiency through CI/CD pipelines and testing automation. It explores
          popular tools.
        </p>
        <Link href="/Blog-6">
          <button className="custom-button w-[100px] h-[30px] font-semibold bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700 hover:scale-105 transition-transform duration-300">
            <span>Read More</span>
          </button>
        </Link>
      </div>
    </div>
  );
}
