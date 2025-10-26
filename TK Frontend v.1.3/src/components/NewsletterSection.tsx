import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Send, Mail, CheckCircle } from 'lucide-react';
import { useLanguage } from './LanguageProvider';
import { toast } from 'sonner@2.0.3';

interface NewsletterSectionProps {
  hasEvents: boolean;
}

export function NewsletterSection({ hasEvents }: NewsletterSectionProps) {
  const { t, language } = useLanguage();
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error(language === 'sr' ? 'Unesite email adresu' : 'Please enter an email address');
      return;
    }
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error(language === 'sr' ? 'Unesite valjanu email adresu' : 'Please enter a valid email address');
      return;
    }

    // Simulate newsletter subscription
    setIsSubmitted(true);
    toast.success(language === 'sr' ? 'Uspješno ste se pretplatili na newsletter!' : 'Successfully subscribed to newsletter!');
    setEmail('');
  };

  return (
    <div className="bg-secondary/30 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <Mail className="h-8 w-8 text-primary" />
            </div>
            <h2 className="mb-3">
              {hasEvents 
                ? t('newsletter.stay_updated_title')
                : t('newsletter.title')
              }
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {hasEvents 
                ? t('newsletter.stay_updated_description')
                : t('newsletter.description')
              }
            </p>
          </div>

          {/* Newsletter Card */}
          <Card className="shadow-lg mb-8">
            <CardHeader>
              <CardTitle>{t('newsletter.card_title')}</CardTitle>
              <CardDescription>{t('newsletter.card_description')}</CardDescription>
            </CardHeader>
            <CardContent>
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm">
                      {t('newsletter.email_label')}
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder={t('newsletter.email_placeholder')}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full"
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    <Send className="mr-2 h-4 w-4" />
                    {t('newsletter.subscribe_button')}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center mt-4">
                    {t('newsletter.privacy_note')}
                  </p>
                </form>
              ) : (
                <div className="text-center py-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-3">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2">{t('newsletter.success_title')}</h3>
                  <p className="text-muted-foreground mb-4">
                    {t('newsletter.success_message')}
                  </p>
                  <Button 
                    onClick={() => setIsSubmitted(false)} 
                    variant="outline"
                    size="sm"
                  >
                    {language === 'sr' ? 'Pretplati drugu osobu' : 'Subscribe Another'}
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Benefits Section */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-3">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h4 className="mb-2">{t('newsletter.benefit1_title')}</h4>
              <p className="text-sm text-muted-foreground">
                {t('newsletter.benefit1_description')}
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-3">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                </svg>
              </div>
              <h4 className="mb-2">{t('newsletter.benefit2_title')}</h4>
              <p className="text-sm text-muted-foreground">
                {t('newsletter.benefit2_description')}
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-3">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="mb-2">{t('newsletter.benefit3_title')}</h4>
              <p className="text-sm text-muted-foreground">
                {t('newsletter.benefit3_description')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
