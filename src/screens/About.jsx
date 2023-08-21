function About() {
  return (
    <div id="about" className="flex justify-between p-32">
      <div className="">
        <img
          src="./assets/About.png"
          alt="A girl working on laptop with a cat"
        />
      </div>
      <div className="flex flex-col gap-16 justify-center">
        <p className="text-white text-2xl font-light">
          I'm a passionate frontend web developer in my pre-final year of
          B.Tech. Computer Science and Engineering, driven by a curiosity for
          creating seamless digital experiences. Proficient in HTML, CSS, and
          JavaScript, I blend technical skills with design sensibilities to
          build elegant and user-centric interfaces.
        </p>
        <p className="text-white text-2xl font-light">
          Beyond coding, I'm also the GDSC Lead on campus, where I foster a
          collaborative learning environment through workshops and hackathons.
          This role hones my leadership and project management skills, making me
          an adaptable contributor to the tech and design space.
        </p>
        <button className="w-4/12 py-3 px-8 bg-gray-400 text-white text-3xl font-medium">
          See my projects
        </button>
      </div>
    </div>
  );
}

export default About;
