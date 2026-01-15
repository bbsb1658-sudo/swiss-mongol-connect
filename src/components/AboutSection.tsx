import { Users, Heart, Globe, Award } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Нэгдмэл хамт олон",
    description: "Швейцарт амьдарч буй Монголчуудыг нэгтгэн, хамтын үйл ажиллагаа явуулна.",
  },
  {
    icon: Heart,
    title: "Соёл уламжлал",
    description: "Монголын соёл, уламжлалыг хадгалж, дараагийн үедээ дамжуулна.",
  },
  {
    icon: Globe,
    title: "Олон улсын холбоо",
    description: "Швейцарын нийгэмд Монголын соёлыг сурталчилж, харилцаа холбоог бэхжүүлнэ.",
  },
  {
    icon: Award,
    title: "Арга хэмжээ",
    description: "Жил бүр олон төрлийн соёлын арга хэмжээ, тэмцээн уралдаан зохион байгуулна.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Бидний тухай
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Швейцар дахь Монголчуудын холбоо нь 2008 онд үүсгэн байгуулагдсан, Швейцарт 
              амьдарч буй Монголчуудыг нэгтгэн, хамтын үйл ажиллагаа явуулдаг олон нийтийн 
              байгууллага юм.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Бид Монголын соёл, уламжлалыг хадгалж, дараагийн үедээ дамжуулах, Швейцарын 
              нийгэмд Монголын соёлыг сурталчилах, Монголчуудын хоорондын харилцаа холбоог 
              бэхжүүлэх зорилготой ажилладаг.
            </p>

            {/* Mission */}
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2 text-primary">Бидний зорилго</h3>
              <p className="text-muted-foreground">
                Швейцарт амьдарч буй Монголчуудад эх орныхоо соёл, уламжлалтай холбоо 
                тогтоох боломж олгож, хамтдаа хөгжин дэвших орчин бүрдүүлэх.
              </p>
            </div>
          </div>

          {/* Right Content - Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card border rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
