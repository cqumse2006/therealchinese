import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const DailySentencePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Function to generate a stable random date within the last 2 months for each sentence
  const generateRandomDate = (sentenceId: number): string => {
    // Use sentence ID as seed for consistent date generation
    const seed = sentenceId * 12345;
    const now = new Date();
    const twoMonthsAgo = new Date(now.getFullYear(), now.getMonth() - 2, 1);

    // Generate a consistent random number based on the seed
    const random = seed % 10000 / 10000;

    const timeDiff = now.getTime() - twoMonthsAgo.getTime();
    const randomTime = twoMonthsAgo.getTime() + random * timeDiff;
    const randomDate = new Date(randomTime);

    // Format to English format like "June 15, 2025"
    return randomDate.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const sampleSentences = [
  {
    id: 1,
    title: "我很生气。(Wǒ hěn shēngqì) I am very angry。",
    textbook: "我很生气 (Wǒ hěn shēngqì)",
    realLife: "我气炸了 (Wǒ qì zhà le)",
    socialMedia: "我直接原地爆炸 (Wǒ zhíjiē yuándì bàozhà)",
    explanation: [
    "I'm so mad I could explode! This version is a meme-style phrase from social media.",
    "Commonly used to express emotional outbursts, often with exaggerated or humorous undertones, frequently appears in bullet comments and online comment sections."],

    tags: ['emotions', 'anger']
  },
  {
    id: 2,
    title: "我很高兴。(Wǒ hěn gāoxìng) I am very happy.",
    textbook: "我很高兴 (Wǒ hěn gāoxìng)",
    realLife: "我开心到飞起 (Wǒ kāixīn dào fēi qǐ)",
    socialMedia: "原地起飞 (Yuándì qǐfēi)",
    explanation: [
    "I'm so happy I could fly! This version is a humorous and exaggerated way to express joy.",
    "Commonly used to convey extreme happiness, often with a playful tone, frequently seen in social media posts and comments."],

    tags: ['emotions', 'happiness']
  },
  {
    id: 3,
    title: "我很累。(Wǒ hěn lèi) I am very tired.",
    textbook: "我很累 (Wǒ hěn lèi)",
    realLife: "我累得不行了 (Wǒ lèi dé bùxíng le)",
    socialMedia: "我累到怀疑人生 (Wǒ lèi dào huáiyí rénshēng)",
    explanation: [
    "I'm so tired I'm questioning my existence! This version is a dramatic expression of exhaustion.",
    "Commonly used to express overwhelming fatigue, often with a touch of humor or exaggeration, frequently appears in memes and social media posts."],

    tags: ['emotions', 'tiredness']
  },
  {
    id: 4,
    title: "我不明白。(Wǒ bù míngbái) I don't understand.",
    textbook: "我不明白 (Wǒ bù míngbái)",
    realLife: "我完全懵了 (Wǒ wánquán měng le)",
    socialMedia: "我直接被整不会了 (Wǒ zhíjiē bèi zhěng bù huì le)",
    explanation: [
    "I'm completely confused! This version is a humorous way to express a lack of understanding.",
    "Commonly used when someone is utterly baffled by something, often with a light-hearted tone, frequently seen in online discussions and comments."],

    tags: ['confusion', 'understanding']
  },
  {
    id: 5,
    title: "我很惊讶。(Wǒ hěn jīngyà) I am very surprised.",
    textbook: "我很惊讶 (Wǒ hěn jīngyà)",
    realLife: "我惊呆了 (Wǒ jīngdāi le)",
    socialMedia: "我直接被震惊到原地石化 (Wǒ zhíjiē bèi zhènjīng dào yuándì shíhuà)",
    explanation: [
    "I'm so shocked I'm petrified! This version is a meme-style phrase used to express extreme surprise.",
    "Commonly used to convey overwhelming astonishment, often with exaggerated or humorous undertones, frequently appears in social media comments and bullet comments."],

    tags: ['emotions', 'surprise']
  },
  {
    id: 6,
    title: "我很着急。(Wǒ hěn zhāojí) I am very anxious.",
    textbook: "我很着急 (Wǒ hěn zhāojí)",
    realLife: "我急死了 (Wǒ jísǐ le)",
    socialMedia: "我急到原地爆炸 (Wǒ jí dào yuándì bàozhà)",
    explanation: [
    "I'm so anxious I could explode! This version is a meme-style phrase used to express extreme anxiety.",
    "Commonly used to convey overwhelming impatience or worry, often with exaggerated or humorous undertones, frequently appears in social media comments and bullet comments."],

    tags: ['emotions', 'anxiety']
  },
  {
    id: 7,
    title: "我很喜欢。(Wǒ hěn xǐhuan) I like it very much.",
    textbook: "我很喜欢 (Wǒ hěn xǐhuan)",
    realLife: "我超喜欢 (Wǒ chāo xǐhuan)",
    socialMedia: "我爱到不行 (Wǒ ài dào bùxíng)",
    explanation: [
    "I like it so much I can't stand it! This version is a humorous way to express strong liking.",
    "Commonly used to convey intense enthusiasm or affection, often with a playful tone, frequently seen in social media posts and comments."],

    tags: ['emotions', 'liking']
  },
  {
    id: 8,
    title: "我很害怕。(Wǒ hěn hàipà) I am very scared.",
    textbook: "我很害怕 (Wǒ hěn hàipà)",
    realLife: "我吓死了 (Wǒ xiàsǐ le)",
    socialMedia: "我直接被吓到魂飞魄散 (Wǒ zhíjiē bèi xià dào húnfēipòsàn)",
    explanation: [
    "I'm so scared my soul has left my body! This version is a meme-style phrase used to express extreme fear.",
    "Commonly used to convey overwhelming fear, often with exaggerated or humorous undertones, frequently appears in social media comments and bullet comments."],

    tags: ['emotions', 'fear']
  },
  {
    id: 9,
    title: "我很尴尬。(Wǒ hěn gāngà) I am very embarrassed.",
    textbook: "我很尴尬 (Wǒ hěn gāngà)",
    realLife: "我尴尬到脚趾抠出三室一厅 (Wǒ gāngà dào jiǎozhǐ kōu chū sān shì yī tīng)",
    socialMedia: "我尴尬到直接隐身 (Wǒ gāngà dào zhíjiē yǐnshēn)",
    explanation: [
    "I'm so embarrassed I could dig a three-bedroom apartment with my toes! This version is a humorous exaggeration used to express embarrassment.",
    "Commonly used to convey extreme embarrassment, often with a playful or sarcastic tone, frequently seen in social media posts and comments."],

    tags: ['emotions', 'embarrassment']
  },
  {
    id: 10,
    title: "问候 (Wènhòu) Greetings",
    textbook: "你好吗？ (Nǐ hǎo ma?)",
    realLife: "最近怎么样？/ 吃了没？ (Zuìjìn zěnmeyàng?,/ Chī le méi?)",
    socialMedia: "在？ (Zài?)",
    explanation: [
    '"How are you?" is rarely used in Chinese daily talk, "最近怎么样?" (How\'s it going?) or "吃了没?" (Have you eaten?) show genuine care.',
    '"在？" (You there?) is a minimalist online opener, implying quick interaction needs (e.g., chats/DMs).'],

    tags: ['greetings', 'conversation']
  },
  {
    id: 11,
    title: "询问价格 (Xúnwèn jiàgé) Asking Price",
    textbook: "这个多少钱？ (Zhège duōshǎo qián?)",
    realLife: "这怎么卖？ (Zhè zěnme mài?)",
    socialMedia: "求链接！ (Qiú gè jià!)",
    explanation: [
    '"How much is this?" – Oral Chinese often omits measure words ("个") and uses "怎么卖?" (How to sell?) in markets.',
    '"求个价" (Begging for a price) common in second-hand trading apps, implying urgency.'],

    tags: ['shopping', 'price']
  },
  {
    id: 12,
    title: "表达同意 (Biǎo dá tóng yì) Agreement",
    textbook: "我同意。 (Wǒ tóng yì.)",
    realLife: "妥了！ (Tuǒ le!)",
    socialMedia: "+1 (Jiā yī)",
    explanation: [
    '"Agreed!" – "妥了" (Settled) confirms plans decisively, used in negotiations.',
    '"+1" originates from forum voting, now means "Same here" in group chats (e.g., "Dinner tonight? +1").'],

    tags: ['agreement', 'confirmation']
  },
  {
    id: 13,
    title: "表达便宜 (Biǎo dá pián yi) Cheapness",
    textbook: "这个很便宜。 (Zhè ge hěn pián yi.)",
    realLife: "白菜价啊！ (Bái cài jià a!)",
    socialMedia: "地板价速冲！ (Dìbǎn jià sù chōng!)",
    explanation: [
    '"This is cheap." – "白菜价" (Cabbage price) vividly implies "dirt-cheap", "啊" softens tone.',
    '"地板价速冲！" (Floor price, rush!) – "冲" (Charge) urges immediate buying, common in livestream sales.'],

    tags: ['shopping', 'cheap']
  },
  {
    id: 14,
    title: "表达惊讶 (Biǎo dá jīng yà) Surprise",
    textbook: "我很惊讶。 (Wǒ hěn jīng yà.)",
    realLife: "我天！ (Wǒ tiān!)",
    socialMedia: "天了噜！ (Hǎo jiā huo!)",
    explanation: [
    '"I\'m surprised." – "我天！" (My heavens!) is a shortened exclamation for shock/delight.'],

    tags: ['emotions', 'surprise']
  },
  {
    id: 15,
    title: "表达累 (Biǎo dá lèi) Tiredness",
    textbook: "我很累。 (Wǒ hěn lèi.)",
    realLife: "累趴了。 (Lèi pā le.)",
    socialMedia: "躺了。 (Tǎng le.)",
    explanation: [
    '"I\'m tired." – "累趴了" (So tired I collapsed) uses vivid imagery, common after work.',
    '"躺了" (Lying flat) – Youth slang symbolizing giving up effort, reflects anti-overwork culture.'],

    tags: ['emotions', 'tiredness']
  },
  {
    id: 16,
    title: "告别 (Gào bié) Farewell",
    textbook: "再见。 (Zài jiàn)",
    realLife: "先走了啊！ (Xiān zǒu le a)",
    socialMedia: "溜了溜了~ (Liū le liū le~)",
    explanation: [
    '"Goodbye." – "先走了啊" (I\'m off first!) with "啊" sounds friendly and natural.',
    '"溜了溜了" (Slipping away~) – Playful exit phrase in live streams/gaming, implying "I\'m outta here!".'],

    tags: ['farewell', 'goodbye']
  }];


  const filteredSentences = sampleSentences.filter((sentence) =>
  sentence.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
  sentence.textbook.toLowerCase().includes(searchTerm.toLowerCase()) ||
  sentence.realLife.toLowerCase().includes(searchTerm.toLowerCase()) ||
  sentence.socialMedia.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8" data-id="t5g7otjo5" data-path="src/pages/DailySentencePage.tsx">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto text-center mb-16" data-id="f2lnfe87f" data-path="src/pages/DailySentencePage.tsx">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent" data-id="9dc8h9hwy" data-path="src/pages/DailySentencePage.tsx">
          The Sentence in Textbook, Daily Use and Social Media
        </h1>
        <p className="text-lg text-gray-600 mb-8" data-id="1babcg2pg" data-path="src/pages/DailySentencePage.tsx">
          Learn how Chinese expressions evolve from textbook to real-life conversations and social media
        </p>
        
        {/* Search Box */}
        <div className="max-w-md mx-auto mt-8" data-id="8oozrlaau" data-path="src/pages/DailySentencePage.tsx">
          <div className="relative" data-id="3i91dnrbi" data-path="src/pages/DailySentencePage.tsx">
            <Input
              type="text"
              placeholder="Search Chinese words or phrases..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-3 rounded-full border-2 border-orange-200 focus:border-orange-400 bg-white/80 backdrop-blur-sm" data-id="7a0nf0ocd" data-path="src/pages/DailySentencePage.tsx" />

            <div className="absolute left-3 top-1/2 transform -translate-y-1/2" data-id="wklgz6q0j" data-path="src/pages/DailySentencePage.tsx">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-id="oia9ctx8p" data-path="src/pages/DailySentencePage.tsx">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" data-id="l5u2652ti" data-path="src/pages/DailySentencePage.tsx" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-6xl mx-auto" data-id="2v8pjo1pl" data-path="src/pages/DailySentencePage.tsx">
        <div className="grid gap-8" data-id="3wnvqcfos" data-path="src/pages/DailySentencePage.tsx">
          {filteredSentences.map((sentence) =>
          <Card key={sentence.id} className="bg-white/80 backdrop-blur-sm border-orange-200 hover:shadow-lg transition-all duration-300" data-id="m13esxymb" data-path="src/pages/DailySentencePage.tsx">
              <CardHeader data-id="0d2c02f2c" data-path="src/pages/DailySentencePage.tsx">
                <div className="flex flex-col gap-4" data-id="eu5pzljh0" data-path="src/pages/DailySentencePage.tsx">
                  <div className="flex justify-between items-start gap-4" data-id="we0iwnh1c" data-path="src/pages/DailySentencePage.tsx">
                    <CardTitle className="text-xl md:text-2xl font-bold text-gray-800 leading-relaxed flex-1" data-id="7213kfldk" data-path="src/pages/DailySentencePage.tsx">
                      {sentence.title}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full min-w-fit" data-id="juy34urry" data-path="src/pages/DailySentencePage.tsx">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-id="ttqgzr03w" data-path="src/pages/DailySentencePage.tsx">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" data-id="3p5oajoqt" data-path="src/pages/DailySentencePage.tsx" />
                      </svg>
                      <span className="font-medium" data-id="3ma2sw5ed" data-path="src/pages/DailySentencePage.tsx">{generateRandomDate(sentence.id)}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2" data-id="5qup72eh0" data-path="src/pages/DailySentencePage.tsx">
                    {sentence.tags.map((tag, index) =>
                  <Badge key={index} variant="secondary" className="bg-orange-100 text-orange-700" data-id="ge941liv6" data-path="src/pages/DailySentencePage.tsx">
                        {tag}
                      </Badge>
                  )}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6" data-id="xildg92h7" data-path="src/pages/DailySentencePage.tsx">
                <div className="grid md:grid-cols-3 gap-4" data-id="xgkl906vh" data-path="src/pages/DailySentencePage.tsx">
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200" data-id="bfop8km6i" data-path="src/pages/DailySentencePage.tsx">
                    <h4 className="font-semibold text-blue-700 mb-3 flex items-center gap-2" data-id="jgm55gofh" data-path="src/pages/DailySentencePage.tsx">
                      📘 Textbook
                    </h4>
                    <p className="text-gray-700 font-medium" data-id="5axdokm5c" data-path="src/pages/DailySentencePage.tsx">{sentence.textbook}</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200" data-id="djaen9sti" data-path="src/pages/DailySentencePage.tsx">
                    <h4 className="font-semibold text-green-700 mb-3 flex items-center gap-2" data-id="gufrvxrjp" data-path="src/pages/DailySentencePage.tsx">
                      🧑‍🤝‍🧑 Real Life
                    </h4>
                    <p className="text-gray-700 font-medium" data-id="0v9bi7ht3" data-path="src/pages/DailySentencePage.tsx">{sentence.realLife}</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg border border-purple-200" data-id="r2g1pp3g3" data-path="src/pages/DailySentencePage.tsx">
                    <h4 className="font-semibold text-purple-700 mb-3 flex items-center gap-2" data-id="o8pyripeh" data-path="src/pages/DailySentencePage.tsx">
                      📱 Social Media
                    </h4>
                    <p className="text-gray-700 font-medium" data-id="xqpeo85vf" data-path="src/pages/DailySentencePage.tsx">{sentence.socialMedia}</p>
                  </div>
                </div>
                
                {/* Explanation Section */}
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200" data-id="k1grqwjog" data-path="src/pages/DailySentencePage.tsx">
                  <h4 className="font-semibold text-yellow-700 mb-3 flex items-center gap-2" data-id="5bgwbvhv3" data-path="src/pages/DailySentencePage.tsx">
                    🧠 Explanation
                  </h4>
                  <div className="space-y-2" data-id="gflgbs2gn" data-path="src/pages/DailySentencePage.tsx">
                    {sentence.explanation.map((explanation, index) =>
                  <p key={index} className="text-gray-700 leading-relaxed flex items-start gap-2" data-id="jvzpk33ie" data-path="src/pages/DailySentencePage.tsx">
                        <span className="text-green-600 font-bold" data-id="li8u7npl7" data-path="src/pages/DailySentencePage.tsx">✅</span>
                        <span data-id="u4ov2qkfw" data-path="src/pages/DailySentencePage.tsx">{explanation}</span>
                      </p>
                  )}
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {filteredSentences.length === 0 &&
        <div className="text-center py-12" data-id="yuwsa7a3c" data-path="src/pages/DailySentencePage.tsx">
            <div className="text-6xl mb-4" data-id="o39qtma8m" data-path="src/pages/DailySentencePage.tsx">🔍</div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2" data-id="4d7f8ufoj" data-path="src/pages/DailySentencePage.tsx">No results found</h3>
            <p className="text-gray-500" data-id="q1i76sx8v" data-path="src/pages/DailySentencePage.tsx">Try searching for different Chinese words or phrases</p>
          </div>
        }
      </section>
    </div>);

};

export default DailySentencePage;