import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { ArrowLeft, HelpCircle, Mail, Phone } from 'lucide-react';
import { useLanguage } from './LanguageProvider';

interface FAQPageProps {
  onNavigate: (page: string) => void;
}

export function FAQPage({ onNavigate }: FAQPageProps) {
  const { language } = useLanguage();

  const faqData = [
    {
      id: 'booking',
      question: {
        sr: 'Kako mogu da rezervišem karte?',
        en: 'How can I book tickets?'
      },
      answer: {
        sr: 'Rezervacija karata je vrlo jednostavna. Odaberite željeni događaj, izaberite tip karte i broj karata, dodajte ih u korpu i završite proces plaćanja. Nakon uspješnog plaćanja, doći će vam potvrda na email.',
        en: 'Booking tickets is very simple. Select your desired event, choose ticket type and quantity, add them to cart and complete the payment process. After successful payment, you will receive a confirmation email.'
      }
    },
    {
      id: 'payment',
      question: {
        sr: 'Koje načine plaćanja prihvatate?',
        en: 'What payment methods do you accept?'
      },
      answer: {
        sr: 'Prihvatamo sve glavne kreditne i debitne kartice (Visa, MasterCard, American Express). Sva plaćanja su zaštićena SSL enkripcijom i obrađuju se putem sigurnih platnih sistema.',
        en: 'We accept all major credit and debit cards (Visa, MasterCard, American Express). All payments are protected by SSL encryption and processed through secure payment systems.'
      }
    },
    {
      id: 'tickets',
      question: {
        sr: 'Kako ću dobiti svoje karte?',
        en: 'How will I receive my tickets?'
      },
      answer: {
        sr: 'Nakon uspješnog plaćanja, karte će vam biti poslane na email adresu kao PDF prilog. Možete ih štampati ili pokazati na telefonu na ulazu u dvoranu.',
        en: 'After successful payment, tickets will be sent to your email address as a PDF attachment. You can print them or show them on your phone at the venue entrance.'
      }
    },
    {
      id: 'refund',
      question: {
        sr: 'Mogu li da dobijem povrat novca?',
        en: 'Can I get a refund?'
      },
      answer: {
        sr: 'Povrat novca je moguć do 48 sati prije početka događaja. Za povrat kontaktirajte našu korisničku podršku na email ili telefon. Refundacija se vrši na isti način plaćanja.',
        en: 'Refunds are possible up to 48 hours before the event start. For refunds, contact our customer support via email or phone. Refunds are processed to the original payment method.'
      }
    },
    {
      id: 'change',
      question: {
        sr: 'Mogu li da izmijenim ili prebacim karte?',
        en: 'Can I change or transfer tickets?'
      },
      answer: {
        sr: 'Izmjene karata su moguće ovisno o dostupnosti i tipу karte. Kontaktirajte našu podršku barem 24 sata prije događaja. Neke karte imaju ograničenja za prebacivanje.',
        en: 'Ticket changes are possible depending on availability and ticket type. Contact our support at least 24 hours before the event. Some tickets have transfer restrictions.'
      }
    },
    {
      id: 'age',
      question: {
        sr: 'Da li postoje ograničenja po godinama?',
        en: 'Are there age restrictions?'
      },
      answer: {
        sr: 'Ograničenja po godinama zavise od specifičnog događaja. Informacije o ograničenjima možete naći na stranici događaja.',
        en: 'Age restrictions depend on the specific event. You can find restriction information on the event page.'
      }
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            {language === 'sr' ? 'Nazad na početnu' : 'Back to Home'}
          </Button>
          <div>
            <h1 className="text-3xl flex items-center gap-3">
              <HelpCircle className="h-8 w-8 text-primary" />
              {language === 'sr' ? 'Često postavljana pitanja' : 'Frequently Asked Questions'}
            </h1>
            <p className="text-muted-foreground">
              {language === 'sr' 
                ? 'Pronađite odgovore na najčešća pitanja o rezervaciji karata'
                : 'Find answers to the most common questions about ticket booking'
              }
            </p>
          </div>
        </div>

        {/* FAQ Content */}
        <Card>
          <CardHeader>
            <CardTitle>
              {language === 'sr' ? 'Najčešća pitanja' : 'Most Common Questions'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="space-y-4">
              {faqData.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id} className="border rounded-lg px-4">
                  <AccordionTrigger className="text-left">
                    {faq.question[language]}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer[language]}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        {/* Contact Support */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>
              {language === 'sr' ? 'Potrebna vam je dodatna pomoć?' : 'Need Additional Help?'}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              {language === 'sr' 
                ? 'Ako niste pronašli odgovor na svoje pitanje, slobodno nas kontaktirajte:'
                : 'If you didn\'t find an answer to your question, feel free to contact us:'
              }
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 border rounded-lg">
                <Mail className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:podrska@tvojakarta.com" className="text-primary hover:underline">
                    podrska@tvojakarta.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-4 border rounded-lg">
                <Phone className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">{language === 'sr' ? 'Telefon' : 'Phone'}</p>
                  <a href="tel:+38766373666" className="text-primary hover:underline">
                    +387 66 373 666
                  </a>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
