import { Calendar, ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const newsItems = [
  {
    id: 1,
    title: "Цагаан сарын баяр 2025",
    description: "Швейцарт амьдарч буй Монголчууд нэгдэн Цагаан сарын баярыг тэмдэглэлээ. Уламжлалт тоглоом, дуу хөгжим, хүүхдийн тоглолт...",
    date: "2025-02-28",
    category: "Баяр",
    image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=400&h=250&fit=crop",
  },
  {
    id: 2,
    title: "Монгол хүүхдийн урлагийн тэмцээн",
    description: "Хүүхдүүдийн дунд зураг, уран бичлэг, дуу хөгжмийн тэмцээн амжилттай зохион байгуулагдлаа...",
    date: "2025-01-15",
    category: "Тэмцээн",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=250&fit=crop",
  },
  {
    id: 3,
    title: "Наадам 2024 тэмдэглэв",
    description: "Монголын үндэсний баяр Наадмыг Швейцарт амьдарч буй Монголчууд нийтээрээ тэмдэглэн өнгөрүүллээ...",
    date: "2024-07-11",
    category: "Баяр",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop",
  },
  {
    id: 4,
    title: "Монгол хэлний хичээл эхэллээ",
    description: "Швейцарт төрсөн өссөн Монгол хүүхдүүдэд зориулсан Монгол хэлний хичээл шинээр нээгдлээ...",
    date: "2024-09-01",
    category: "Боловсрол",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=250&fit=crop",
  },
];

const NewsSection = () => {
  return (
    <section id="news" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Мэдээ мэдээлэл
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Холбооны үйл ажиллагаа, арга хэмжээ, тэмцээн уралдааны талаарх сүүлийн үеийн мэдээллүүд
          </p>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsItems.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-3 left-3">{item.category}</Badge>
              </div>
              <CardHeader className="pb-2">
                <h3 className="font-semibold text-lg leading-tight line-clamp-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
              </CardHeader>
              <CardContent className="pb-2">
                <p className="text-muted-foreground text-sm line-clamp-2">
                  {item.description}
                </p>
              </CardContent>
              <CardFooter className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  <span>{new Date(item.date).toLocaleDateString("mn-MN")}</span>
                </div>
                <Button variant="ghost" size="sm" className="text-primary p-0 h-auto">
                  Дэлгэрэнгүй <ArrowRight className="h-3 w-3 ml-1" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <Button variant="outline" size="lg">
            Бүх мэдээг үзэх
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
