import React, { useState, useCallback } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { allEvents } from './data/eventsData';

interface EventsBannerProps {
  onNavigate: (page: string, eventId?: string) => void;
}

export function EventsBanner({ onNavigate }: EventsBannerProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const gridLayouts = [
    [
      { id: 0, gridArea: '1 / 1 / 3 / 3' },
      { id: 1, gridArea: '1 / 3 / 2 / 4' },
      { id: 2, gridArea: '2 / 3 / 3 / 4' },
      { id: 3, gridArea: '1 / 4 / 2 / 6' },
      { id: 4, gridArea: '2 / 4 / 3 / 5' },
      { id: 5, gridArea: '2 / 5 / 3 / 6' },
      { id: 6, gridArea: '3 / 1 / 4 / 2' },
      { id: 7, gridArea: '3 / 2 / 4 / 4' },
      { id: 8, gridArea: '3 / 4 / 4 / 6' }
    ],
    [
      { id: 0, gridArea: '1 / 1 / 2 / 3' },
      { id: 1, gridArea: '1 / 3 / 3 / 4' },
      { id: 2, gridArea: '1 / 4 / 2 / 6' },
      { id: 3, gridArea: '2 / 1 / 3 / 2' },
      { id: 4, gridArea: '2 / 2 / 3 / 3' },
      { id: 5, gridArea: '2 / 4 / 3 / 5' },
      { id: 6, gridArea: '2 / 5 / 3 / 6' },
      { id: 7, gridArea: '3 / 1 / 4 / 3' },
      { id: 8, gridArea: '3 / 3 / 4 / 6' }
    ],
    [
      { id: 0, gridArea: '1 / 1 / 2 / 2' },
      { id: 1, gridArea: '1 / 2 / 3 / 4' },
      { id: 2, gridArea: '1 / 4 / 2 / 5' },
      { id: 3, gridArea: '1 / 5 / 2 / 6' },
      { id: 4, gridArea: '2 / 1 / 3 / 2' },
      { id: 5, gridArea: '2 / 4 / 3 / 6' },
      { id: 6, gridArea: '3 / 1 / 4 / 3' },
      { id: 7, gridArea: '3 / 3 / 4 / 4' },
      { id: 8, gridArea: '3 / 4 / 4 / 6' }
    ]
  ];

  const eventsPerLayout = 9;
  const totalLayouts = Math.ceil(allEvents.length / eventsPerLayout);
  
  const getCurrentEvents = useCallback(() => {
    const startIndex = currentSlide * eventsPerLayout;
    return allEvents.slice(startIndex, startIndex + eventsPerLayout);
  }, [currentSlide]);

  const getCurrentLayout = useCallback(() => {
    return gridLayouts[currentSlide % gridLayouts.length];
  }, [currentSlide, gridLayouts]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalLayouts);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalLayouts) % totalLayouts);
  };

  const currentEvents = getCurrentEvents();
  const currentLayout = getCurrentLayout();

  return (
    <div className="relative w-full h-[500px] overflow-hidden bg-muted/20">
      <div 
        className="w-full h-full p-2 grid gap-2 transition-all duration-500 ease-in-out"
        style={{
          gridTemplateColumns: 'repeat(5, 1fr)',
          gridTemplateRows: 'repeat(3, 1fr)'
        }}
      >
        {currentEvents.map((event, index) => {
          const layoutItem = currentLayout[index];
          if (!layoutItem) return null;

          return (
            <div
              key={`${currentSlide}-${event.id}`}
              className="relative cursor-pointer group overflow-hidden rounded-lg bg-muted/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
              style={{ gridArea: layoutItem.gridArea }}
              onClick={() => onNavigate('event-detail', event.id)}
            >
              <ImageWithFallback
                src={event.image}
                alt=""
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          );
        })}
        
        {Array.from({ length: Math.max(0, eventsPerLayout - currentEvents.length) }).map((_, index) => {
          const layoutIndex = currentEvents.length + index;
          const layoutItem = currentLayout[layoutIndex];
          if (!layoutItem) return null;

          return (
            <div
              key={`placeholder-${index}`}
              className="bg-muted/20 rounded-lg"
              style={{ gridArea: layoutItem.gridArea }}
            />
          );
        })}
      </div>

      {totalLayouts > 1 && (
        <>
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/90 hover:bg-background border-border/50 shadow-lg backdrop-blur-sm"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/90 hover:bg-background border-border/50 shadow-lg backdrop-blur-sm"
            onClick={nextSlide}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </>
      )}

      {totalLayouts > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {Array.from({ length: totalLayouts }).map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentSlide 
                  ? 'bg-primary scale-125' 
                  : 'bg-foreground/30 hover:bg-foreground/50'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
}