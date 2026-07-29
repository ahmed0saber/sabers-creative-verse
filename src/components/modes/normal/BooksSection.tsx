import { BookOpen, Star } from "lucide-react";
import { books } from "../../../data/books";

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => {
          const fillPercentage = Math.max(
            0,
            Math.min(100, (rating - star + 1) * 100),
          );
          return (
            <div
              key={star}
              className="relative text-muted-foreground w-3.5 h-3.5 md:w-4 md:h-4 mr-1"
            >
              <Star className="absolute top-0 left-0 w-3.5 h-3.5 md:w-4 md:h-4" />
              <div
                className="absolute top-0 left-0 h-full overflow-hidden text-yellow-500"
                style={{ width: `${fillPercentage}%` }}
              >
                <Star className="w-3.5 h-3.5 md:w-4 md:h-4 fill-current" />
              </div>
            </div>
          );
        })}
      </div>
      <span className="text-xs md:text-sm font-medium text-muted-foreground">
        {rating.toFixed(1)}/5
      </span>
    </div>
  );
};

const BooksSection = () => {
  return (
    <section id="books" className="py-20 bg-background relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Books I Enjoyed
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            These are not all the books I've read, but a curated selection of
            books I truly enjoyed and learned from on my software engineering
            journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map((book, idx) => (
            <div
              key={idx}
              className="group flex flex-row gap-4 p-5 rounded-2xl bg-secondary/50 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(var(--primary),0.15)]"
            >
              <div className="w-20 sm:w-24 lg:w-28 xl:w-32 flex-shrink-0 relative transition-all duration-300 group-hover:-translate-y-1">
                <img
                  src={book.coverUrl}
                  alt={book.title}
                  className="w-full h-auto object-contain rounded-md shadow-sm group-hover:shadow-md transition-shadow duration-300"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src =
                      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=400&auto=format&fit=crop";
                  }}
                />
              </div>
              <div className="flex flex-col flex-grow py-1">
                <h3 className="text-lg md:text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                  {book.title}
                </h3>
                <p className="text-sm text-primary mb-3 font-medium">
                  By {book.author}
                </p>
                <p
                  className="text-muted-foreground text-sm mb-4 line-clamp-3"
                  title={book.description}
                >
                  {book.description}
                </p>
                <div className="mt-auto">
                  <StarRating rating={book.rating} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BooksSection;
