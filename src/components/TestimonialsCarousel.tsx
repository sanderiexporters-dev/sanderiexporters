import { useEffect, useState } from "react";
import TestimonialCard, { type TestimonialProps } from "./TestimonialCard";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface TestimonialsCarouselProps {
  testimonials: TestimonialProps[];
}

const TestimonialsCarousel = ({ testimonials }: TestimonialsCarouselProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    const updateSelection = () => {
      setCount(api.scrollSnapList().length);
      setCurrent(api.selectedScrollSnap());
    };

    updateSelection();
    api.on("select", updateSelection);
    api.on("reInit", updateSelection);

    return () => {
      api.off("select", updateSelection);
      api.off("reInit", updateSelection);
    };
  }, [api]);

  useEffect(() => {
    if (!api) {
      return;
    }

    const autoplay = window.setInterval(() => {
      api.scrollNext();
    }, 4800);

    return () => window.clearInterval(autoplay);
  }, [api]);

  return (
    <div className="relative">
      <Carousel
        setApi={setApi}
        opts={{ align: "start", loop: true }}
        className="w-full"
      >
        <CarouselContent className="-ml-6">
          {testimonials.map((testimonial) => (
            <CarouselItem key={`${testimonial.name}-${testimonial.company}`} className="pl-6 md:basis-1/2 xl:basis-1/3">
              <div className="h-full">
                <TestimonialCard {...testimonial} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="left-auto right-16 top-[-5.5rem] hidden h-11 w-11 translate-y-0 border-[#121826]/10 bg-white/88 text-[#121826] shadow-sm hover:bg-white lg:inline-flex" />
        <CarouselNext className="right-0 top-[-5.5rem] hidden h-11 w-11 translate-y-0 border-[#121826]/10 bg-white/88 text-[#121826] shadow-sm hover:bg-white lg:inline-flex" />
      </Carousel>

      {count > 1 && (
        <div className="mt-8 flex justify-center gap-2">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to testimonial ${index + 1}`}
              onClick={() => api?.scrollTo(index)}
              className="h-2.5 rounded-full transition-all duration-300"
              style={{
                width: current === index ? "2.5rem" : "0.65rem",
                background: current === index ? "#0a8f9c" : "rgba(18,24,38,0.18)",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TestimonialsCarousel;
