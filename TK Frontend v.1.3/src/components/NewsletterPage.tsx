import React from 'react';
import { NewsletterSection } from './NewsletterSection';
import { allEvents } from './data/eventsData';

interface NewsletterPageProps {
  onNavigate: (page: string) => void;
}

export function NewsletterPage({ onNavigate }: NewsletterPageProps) {
  return (
    <div className="min-h-screen bg-background">
      <NewsletterSection hasEvents={allEvents.length > 0} />
    </div>
  );
}
