import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger } from
'@/components/ui/accordion';

const HomePage: React.FC = () => {
  const contentSections = [
  {
    title: 'Daily Sentence',
    description: 'Chinese in textbook, daily life and online. Show you the difference and context.',
    emoji: '📚',
    link: '/daily-sentence',
    color: 'from-orange-400 to-orange-600'
  },
  {
    title: 'Subtext',
    description: 'Every micro-lesson comes with a compelling case, scene analysis, and cultural insights from the English-speaking world',
    emoji: '🔍',
    link: '/subtext',
    color: 'from-blue-400 to-blue-600'
  },
  {
    title: 'Social Media',
    description: 'The world of Chinese social media is a universe of its own — each platform, from Weibo, Douban, Rednote and Douyin, has its own distinct language and style.',
    emoji: '📱',
    link: '/social-media',
    color: 'from-purple-400 to-purple-600'
  }];


  const faqItems = [
  {
    id: 'item-1',
    question: 'What is this website about?',
    answer: 'This website helps Chinese learners go beyond textbooks and understand how Mandarin is actually spoken in real life and online. We explain common phrases, internet slang, cultural nuances, and hidden meanings behind everyday expressions.'
  },
  {
    id: 'item-2',
    question: 'Who is this site for?',
    answer: 'This site is designed for intermediate to advanced learners of Chinese who want to sound more natural, understand Chinese social media, or communicate better in informal settings.'
  },
  {
    id: 'item-3',
    question: 'How are the words and expressions selected?',
    answer: 'We track trending language from real-life conversations, Chinese social media, and popular forums. Some content is submitted by users or curated by native speakers.'
  },
  {
    id: 'item-4',
    question: 'How often is the content updated?',
    answer: 'The content will be updated weekly. You can also subscribe to our email newsletter to get new content automatically.'
  },
  {
    id: 'item-5',
    question: 'Do you explain grammar or just vocabulary?',
    answer: 'We focus on usage and context, not just vocabulary or grammar. We don\'t do formal grammar lessons, but we often explain why a certain word or phrase is used in a specific way.'
  },
  {
    id: 'item-6',
    question: 'Is the content suitable for beginners?',
    answer: 'Some content may be challenging for beginners, but we always provide clear explanations in English. If you\'re a beginner with strong curiosity about modern Chinese, you\'ll still find a lot of value here.'
  },
  {
    id: 'item-7',
    question: 'Can I contribute ideas or expressions?',
    answer: 'Absolutely! We welcome suggestions, user comments, and real-life examples from users. Contact me via email cqumse2006@gmail.com'
  },
  {
    id: 'item-8',
    question: 'What features will be added in the future?',
    answer: 'We plan to launch: A "how to use Chinese social media" guide, Short videos explaining trending language, Community forums and comment sections'
  }];


  return (
    <div data-id="td3qv3atj" data-path="src/pages/HomePage.tsx">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" data-id="pbcnpginq" data-path="src/pages/HomePage.tsx">
        <div className="max-w-4xl mx-auto text-center" data-id="ovz2mx9xt" data-path="src/pages/HomePage.tsx">
          <h1 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent leading-tight" data-id="ifm8xod9w" data-path="src/pages/HomePage.tsx">
            Beyond the textbook, Chinese is more indirect, complex and interesting
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed" data-id="17kk4voee" data-path="src/pages/HomePage.tsx">
            Bridges that gap between Real Chinese and Textbook Chinese, showing you the language people use in conversations, social media and everyday life. They are not grammatically correct, but culturally and emotionally real.
          </p>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" data-id="oo1dwean5" data-path="src/pages/HomePage.tsx">
        <div className="max-w-6xl mx-auto" data-id="r9sddxzpd" data-path="src/pages/HomePage.tsx">
          <div className="grid md:grid-cols-3 gap-8" data-id="xc3jx5rrm" data-path="src/pages/HomePage.tsx">
            {contentSections.map((section, index) =>
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm border-orange-200 hover:border-orange-300 flex flex-col h-full" data-id="kazaubp8z" data-path="src/pages/HomePage.tsx">
                <CardHeader className="text-center pb-4" data-id="mdno11rod" data-path="src/pages/HomePage.tsx">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300" data-id="a78l9bxun" data-path="src/pages/HomePage.tsx">
                    {section.emoji}
                  </div>
                  <CardTitle className={`text-2xl font-bold bg-gradient-to-r ${section.color} bg-clip-text text-transparent`} data-id="tz5y8y4il" data-path="src/pages/HomePage.tsx">
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-left flex-1 flex flex-col" data-id="vahb9f0io" data-path="src/pages/HomePage.tsx">
                  <CardDescription className="text-gray-600 mb-6 leading-relaxed flex-1" data-id="xxjhk2pf5" data-path="src/pages/HomePage.tsx">
                    {section.description}
                  </CardDescription>
                  <div className="mt-auto" data-id="b9hi0diq9" data-path="src/pages/HomePage.tsx">
                    <Link to={section.link} data-id="q4yq1xp0y" data-path="src/pages/HomePage.tsx">
                      <Button className={`w-full bg-gradient-to-r ${section.color} hover:opacity-90 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300`} data-id="v07y94tps" data-path="src/pages/HomePage.tsx">
                        Explore {section.title}
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq-section" className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50" data-id="dpu2uu9xf" data-path="src/pages/HomePage.tsx">
        <div className="max-w-4xl mx-auto" data-id="blrsgf8vq" data-path="src/pages/HomePage.tsx">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent" data-id="n31h2o8zl" data-path="src/pages/HomePage.tsx">
            FAQ
          </h2>
          <Accordion type="single" collapsible className="w-full" data-id="s7fe4lrvo" data-path="src/pages/HomePage.tsx">
            {faqItems.map((item) =>
            <AccordionItem key={item.id} value={item.id} className="bg-white/80 rounded-lg mb-4 border border-orange-200" data-id="5icel25cv" data-path="src/pages/HomePage.tsx">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-800 hover:text-orange-600" data-id="hohxauand" data-path="src/pages/HomePage.tsx">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed" data-id="tedzsah0p" data-path="src/pages/HomePage.tsx">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            )}
          </Accordion>
        </div>
      </section>
    </div>);

};

export default HomePage;