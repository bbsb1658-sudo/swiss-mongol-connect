import { Facebook, Instagram, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">М</span>
              </div>
              <span className="font-semibold text-lg">ШДМХ</span>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Швейцар дахь Монголчуудын холбоо - Швейцарт амьдарч буй Монголчуудыг нэгтгэж, 
              соёл уламжлалаа хадгалан хөгжүүлэх зорилготой.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Холбоосууд</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-background/70 hover:text-primary transition-colors">
                  Нүүр
                </a>
              </li>
              <li>
                <a href="#news" className="text-background/70 hover:text-primary transition-colors">
                  Мэдээ
                </a>
              </li>
              <li>
                <a href="#about" className="text-background/70 hover:text-primary transition-colors">
                  Бидний тухай
                </a>
              </li>
              <li>
                <a href="#contact" className="text-background/70 hover:text-primary transition-colors">
                  Холбоо барих
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Холбоо барих</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>info@mongolians.ch</li>
              <li>+41 79 123 45 67</li>
              <li>Zürich, Switzerland</li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a
                href="#"
                className="w-8 h-8 bg-background/10 rounded flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-background/10 rounded flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="mailto:info@mongolians.ch"
                className="w-8 h-8 bg-background/10 rounded flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-background/10 pt-8 text-center text-sm text-background/50">
          <p>© {currentYear} Швейцар дахь Монголчуудын холбоо. Бүх эрх хуулиар хамгаалагдсан.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
