
const About = () => {
  return (
    <section className="py-24 lg:px-20 dark:bg-white md:px-5">
        <div className="about-title w-32 flex justify-center items-center m-auto">
        <h1 className="text-base">About me </h1>
        </div>
        <div className=" lg:flex md:flex sm:flex  lg:items-start md:items-start sm:items-start  lg:w-[100%] lg:gap-32 mt-4 md:w-[100%] md:gap-6 sm:gap-4 sm:px-5">
            <img className="lg:ml-0 md:ml-0 sm:ml-0 ml-4 mt-10 object-contain md:w-[42%] sm:w-[50%]" src="/public/images/about.png" alt="about-pic" />
            <div className="mt-14 lg:ml-8 md:ml-4 sm:p-0 p-10">
                <h1 className="h1 lg:text-3xl  font-bold dark:text-black md:text-lg sm:text-lg text-3xl ">Curious about me? Here you have it</h1>
                <p className="mt-8 dark:text-black">I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.</p>
                <p className="mt-5 dark:text-black">I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 7 years after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.</p>
                <p className="mt-5 dark:text-black">
                I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development.
                </p>
                <p className="mt-5 dark:text-black">
                When I'm not in full-on developer mode, you can find me hovering around on twitter or on indie hacker, witnessing the journey of early startups or enjoying some free time. You can follow me on Twitter where I share tech-related bites and build in public, or you can follow me on GitHub.
                </p>
                <p className="mt-5 dark:text-black">Finally, some quick bits about me.</p>
                <div className="mt-5 flex flex-col gap-3 ">
                    <div className="lg:flex lg:gap-10 md:gap-10 sm:gap-0 sm:block">
                    <li className="dark:text-black">B.E. in Computer Engineering</li>
                    <li className="dark:text-black">Avid learner</li>
                 </div>
                   <div className="lg:flex lg:gap-24 md:gap-20 sm:gap-0 sm:block">
                   <li className="dark:text-black">Full time freelancer</li>
                   <li className="lg:ml-5  dark:text-black">Aspiring indie hacker</li>
                   </div>
                  
                   
                </div>
                <p className="mt-10 dark:text-black">One last thing, I'm available for freelance work, so feel free to reach out and say hello! I promise I don't bite 😉</p>
            </div>
        </div>
    </section>
  );
}

export default About