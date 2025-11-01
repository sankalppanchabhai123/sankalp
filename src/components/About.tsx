import profileImage from "@/assets/profile.jpg";
import skillsGraphic from "@/assets/skills-graphic.png";

const About = () => {
  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse-glow"></div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block relative mb-8">
            {/* Decorative rings around profile */}
            <div className="absolute inset-0 rounded-full border border-primary/20 animate-ping" style={{ animationDuration: '3s' }}></div>
            <div className="absolute -inset-4 rounded-full border border-primary/10"></div>

            <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-primary/50 glow-primary mx-auto relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img
                src={profileImage}
                alt="Sankalp Panchabhai - Full Stack Developer"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-3 tracking-tight">
            Sankalp <span className="text-gradient">Panchabhai</span>
          </h2>
          <p className="text-primary text-lg md:text-xl font-medium mb-6 tracking-wide">
            Full Stack Developer | Competitive Programmer
          </p>
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          </div>
        </div>

        <div className="space-y-12">
          <div className="card-glass rounded-2xl p-8 md:p-12 backdrop-blur-xl border-2 border-primary/10 hover:border-primary/30 transition-all duration-500 animate-fade-in">
            <div className="max-w-3xl mx-auto space-y-6">
              <p className="text-lg leading-relaxed text-foreground/90 first-letter:text-5xl first-letter:font-bold first-letter:text-primary first-letter:mr-2 first-letter:float-left">
                Hi. I am Sankalp Panchabhai, currently embarking on my engineering journey as a third-year
                Information Technology student. I am a passionate web developer with expertise in <span className="text-primary font-semibold">fullstack
                  development</span>. I dive deep into the world of competitive programming and problem-solving.
                Logical reasoning, brainstorming, and algorithmic thinking have always been my cup of tea.
              </p>

              <p className="text-lg leading-relaxed text-foreground/85 pl-4 border-l-4 border-primary/50">
                As the <span className="text-primary font-semibold text-xl">Web Lead at GDGC</span> (Google Developer
                Groups on Campus), I lead a talented team in building innovative web applications, organizing
                tech workshops, and fostering a vibrant developer community on campus. I keep enhancing my
                tech skills by working on real-world projects and mentoring fellow students.
              </p>

              <p className="text-lg leading-relaxed text-foreground/80 italic">
                Apart from technical skills, I am passionate about continuous learning, open-source contribution,
                and staying updated with the latest web technologies. I believe in writing clean, maintainable
                code and following best practices in software development.
              </p>
            </div>
          </div>

          <div className="flex justify-center animate-fade-in">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-50 group-hover:opacity-75"></div>
              <img
                src={skillsGraphic}
                alt="Technical Skills and Technologies"
                className="rounded-2xl max-w-full h-auto relative shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
