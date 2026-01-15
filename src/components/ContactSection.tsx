import { Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Холбоо барих
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Бидэнтэй холбогдож, асуулт асууж эсвэл санал хүсэлтээ илгээгээрэй
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Холбогдох мэдээлэл</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">И-мэйл</h4>
                  <a href="mailto:info@mongolians.ch" className="text-muted-foreground hover:text-primary transition-colors">
                    info@mongolians.ch
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Утас</h4>
                  <a href="tel:+41791234567" className="text-muted-foreground hover:text-primary transition-colors">
                    +41 79 123 45 67
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Хаяг</h4>
                  <p className="text-muted-foreground">
                    Zürich, Switzerland
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-8">
              <h4 className="font-medium mb-4">Сошиал хаягууд</h4>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card border rounded-xl p-6 md:p-8">
            <h3 className="text-xl font-semibold mb-6">Мессеж илгээх</h3>
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Нэр
                  </label>
                  <Input id="name" placeholder="Таны нэр" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    И-мэйл
                  </label>
                  <Input id="email" type="email" placeholder="email@example.com" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Гарчиг
                </label>
                <Input id="subject" placeholder="Мессежийн гарчиг" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Мессеж
                </label>
                <Textarea id="message" placeholder="Таны мессеж..." rows={4} />
              </div>
              <Button type="submit" size="lg" className="w-full">
                Илгээх
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
