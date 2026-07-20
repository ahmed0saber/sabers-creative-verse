import { Button } from "@/components/ui/button";
import developerDetails from "@/data/developer-details";
import { Github, Linkedin, Youtube, Mail, ExternalLink } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const HeroSection = () => {
  const { theme } = useTheme();

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/ahmed0saber",
      label: "GitHub",
      darkColor: "hover:text-violet-500",
      lightColor: "hover:text-[#1D2770]",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://linkedin.com/in/ahmed0saber",
      label: "LinkedIn",
      darkColor: "hover:text-emerald-500",
      lightColor: "hover:text-[#2837AA]",
    },
    {
      icon: <Youtube className="h-5 w-5" />,
      href: "https://youtube.com/@ahmed0saber",
      label: "YouTube",
      darkColor: "hover:text-red-500",
      lightColor: "hover:text-red-600",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      href: "mailto:ahmed0saber33@gmail.com",
      label: "Email",
      darkColor: "hover:text-amber-500",
      lightColor: "hover:text-[#2837AA]",
    },
  ];

  return (
    <section
      id="hero"
      style={{ minHeight: "calc(100svh - 90px)" }}
      className={`flex items-center justify-center relative overflow-hidden ${
        theme === "light" ? "hero-gradient-light" : ""
      }`}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-subtle opacity-50"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-muted/5 rounded-full blur-3xl animate-float"></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-muted/5 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Content */}
          <div
            className="animate-fade-up"
            style={{ animationDuration: "0.4s" }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-3 sm:mb-6 mt-0 sm:mt-3 md:mt-6">
              <span className="text-foreground">{developerDetails.name}</span>
            </h1>

            <h2 className="text-xl md:text-2xl opacity-85 font-semibold mb-3 sm:mb-6 md:mb-8">
              {developerDetails.title}
            </h2>

            <p className="text-lg md:text-lg opacity-70 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
              {developerDetails.description}
            </p>
          </div>

          {/* Social Links */}
          <div
            className="animate-fade-up mb-8 sm:mb-12"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="flex items-center justify-center space-x-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 border rounded-full transition-fast group ${
                    theme === "light"
                      ? `border-[#D2D8FE] bg-[#CDD2FF1A] text-[#2837AA] ${link.lightColor}`
                      : `bg-secondary/50 border-border ${link.darkColor}`
                  }`}
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div
            className="animate-fade-up flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
            style={{ animationDelay: "0.4s" }}
          >
            <Button
              size="lg"
              className={`transition-fast px-8 py-6 text-lg ${
                theme === "light"
                  ? "bg-[#1D2770] text-white border border-[#1E2770] hover:bg-[#162060] shadow-md"
                  : "shadow-md"
              }`}
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View My Work
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>

            <Button
              variant={theme === "light" ? "default" : "outline"}
              size="lg"
              className={`transition-fast px-8 py-6 text-lg ${
                theme === "light"
                  ? "bg-white text-[#1D2770] border-none shadow-[0_4px_20px_-4px_rgba(29,39,112,0.15)] hover:shadow-[0_6px_24px_-4px_rgba(29,39,112,0.25)] hover:bg-white"
                  : ""
              }`}
              onClick={() =>
                document
                  .getElementById("connect")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
