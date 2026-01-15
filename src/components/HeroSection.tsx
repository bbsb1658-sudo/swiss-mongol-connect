import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
      style={{
        background: "linear-gradient(135deg, hsl(199 89% 48% / 0.1) 0%, hsl(199 89% 95%) 50%, hsl(45 93% 90% / 0.3) 100%)",
      }}
    >
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-8">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium">Швейцарт амьдарч буй Монголчуудын нэгдэл</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Швейцар дахь{" "}
            <span className="text-primary">Монголчуудын</span>{" "}
            холбоо
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Бид Швейцарт амьдарч буй Монголчуудыг нэгтгэн, соёл уламжлалаа хадгалж, 
            хамтын үйл ажиллагаа явуулдаг олон нийтийн байгууллага юм.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-base px-8">
              Бидэнтэй нэгдэх
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8">
              Дэлгэрэнгүй үзэх
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-lg mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground mt-1">Гишүүд</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">15+</div>
              <div className="text-sm text-muted-foreground mt-1">Жилийн туршлага</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground mt-1">Арга хэмжээ</div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <a
          href="#news"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-sm">Доош гүйлгэх</span>
          <ArrowDown className="h-5 w-5 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
