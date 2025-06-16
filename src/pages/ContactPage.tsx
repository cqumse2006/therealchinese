import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ContactPage: React.FC = () => {
  const contactInfo = [
  {
    email: 'guies@126.com',
    label: 'General Inquiries',
    description: 'For general questions, suggestions, or collaboration opportunities',
    icon: '📧'
  },
  {
    email: 'cqumse2006@gmail.com',
    label: 'Content Contributions',
    description: 'Submit your own examples, corrections, or ideas for new content',
    icon: '✉️'
  }];


  const handleEmailClick = (email: string) => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8" data-id="93u1xbf7m" data-path="src/pages/ContactPage.tsx">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto text-center mb-16" data-id="ohq23tx5l" data-path="src/pages/ContactPage.tsx">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent" data-id="e0yimfh8y" data-path="src/pages/ContactPage.tsx">
          Contact Us
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed" data-id="zawod4fgy" data-path="src/pages/ContactPage.tsx">
          Have questions, suggestions, or want to contribute to our content? We'd love to hear from you!
        </p>
      </section>

      {/* Contact Information */}
      <div className="max-w-4xl mx-auto" data-id="5u7kepl9h" data-path="src/pages/ContactPage.tsx">
        <div className="grid md:grid-cols-2 gap-8 mb-12" data-id="7oltau4lr" data-path="src/pages/ContactPage.tsx">
          {contactInfo.map((contact, index) =>
          <Card key={index} className="bg-white/80 backdrop-blur-sm border-orange-200 hover:shadow-lg transition-all duration-300" data-id="zskxqdgcr" data-path="src/pages/ContactPage.tsx">
              <CardHeader data-id="kpjquznu6" data-path="src/pages/ContactPage.tsx">
                <CardTitle className="text-xl font-bold text-gray-800 flex items-center gap-3" data-id="9opy60skz" data-path="src/pages/ContactPage.tsx">
                  <span className="text-3xl" data-id="e8i5a4k2l" data-path="src/pages/ContactPage.tsx">{contact.icon}</span>
                  {contact.label}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4" data-id="56rhegbvp" data-path="src/pages/ContactPage.tsx">
                <p className="text-gray-600 text-sm leading-relaxed" data-id="sizs3estq" data-path="src/pages/ContactPage.tsx">
                  {contact.description}
                </p>
                <div className="bg-gradient-to-r from-orange-50 to-blue-50 p-4 rounded-lg" data-id="vbgphfkfl" data-path="src/pages/ContactPage.tsx">
                  <p className="text-2xl font-mono font-semibold text-gray-800 mb-3" data-id="mr1vz2gfh" data-path="src/pages/ContactPage.tsx">
                    {contact.email}
                  </p>
                  <Button
                  onClick={() => handleEmailClick(contact.email)}
                  className="w-full bg-gradient-to-r from-orange-500 to-blue-500 hover:opacity-90 text-white font-semibold" data-id="o9z4oicax" data-path="src/pages/ContactPage.tsx">

                    Send Email 📨
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* What to Include */}
        <Card className="bg-white/80 backdrop-blur-sm border-orange-200 mb-12" data-id="3uy7bomul" data-path="src/pages/ContactPage.tsx">
          <CardHeader data-id="8p950013b" data-path="src/pages/ContactPage.tsx">
            <CardTitle className="text-2xl font-bold text-gray-800 flex items-center gap-3" data-id="56bey33ee" data-path="src/pages/ContactPage.tsx">
              💡 What to Include in Your Message
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6" data-id="31wj9c0lp" data-path="src/pages/ContactPage.tsx">
            <div className="grid md:grid-cols-2 gap-6" data-id="nx8ttt4hx" data-path="src/pages/ContactPage.tsx">
              <div className="space-y-4" data-id="01ywmn169" data-path="src/pages/ContactPage.tsx">
                <div className="bg-orange-50 p-4 rounded-lg" data-id="h2cj6avx0" data-path="src/pages/ContactPage.tsx">
                  <h4 className="font-semibold text-orange-700 mb-2 flex items-center gap-2" data-id="8rgxdy9gr" data-path="src/pages/ContactPage.tsx">
                    🤔 Questions & Feedback
                  </h4>
                  <ul className="text-sm text-gray-700 space-y-1" data-id="y0qvznbnx" data-path="src/pages/ContactPage.tsx">
                    <li data-id="h8u91ho06" data-path="src/pages/ContactPage.tsx">• Specific expressions you'd like explained</li>
                    <li data-id="pyzw5hf64" data-path="src/pages/ContactPage.tsx">• Corrections or improvements to existing content</li>
                    <li data-id="pvdi3xycp" data-path="src/pages/ContactPage.tsx">• General feedback about the site</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg" data-id="9cad7znk8" data-path="src/pages/ContactPage.tsx">
                  <h4 className="font-semibold text-blue-700 mb-2 flex items-center gap-2" data-id="fdomgdnls" data-path="src/pages/ContactPage.tsx">
                    📝 Content Contributions
                  </h4>
                  <ul className="text-sm text-gray-700 space-y-1" data-id="5e6gufhdl" data-path="src/pages/ContactPage.tsx">
                    <li data-id="wq8xemrwp" data-path="src/pages/ContactPage.tsx">• Real-life examples you've encountered</li>
                    <li data-id="rrsy91mnq" data-path="src/pages/ContactPage.tsx">• Trending expressions on social media</li>
                    <li data-id="0m2pwfnd2" data-path="src/pages/ContactPage.tsx">• Cultural contexts you'd like explored</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-4" data-id="ravhwciqb" data-path="src/pages/ContactPage.tsx">
                <div className="bg-purple-50 p-4 rounded-lg" data-id="033cocza6" data-path="src/pages/ContactPage.tsx">
                  <h4 className="font-semibold text-purple-700 mb-2 flex items-center gap-2" data-id="tbv77d09i" data-path="src/pages/ContactPage.tsx">
                    🤝 Collaboration Ideas
                  </h4>
                  <ul className="text-sm text-gray-700 space-y-1" data-id="2w5ezraxe" data-path="src/pages/ContactPage.tsx">
                    <li data-id="k1lpslxvx" data-path="src/pages/ContactPage.tsx">• Partnership opportunities</li>
                    <li data-id="uedvrtrxd" data-path="src/pages/ContactPage.tsx">• Guest content contributions</li>
                    <li data-id="l25krowzj" data-path="src/pages/ContactPage.tsx">• Educational collaborations</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg" data-id="gsmoumuh2" data-path="src/pages/ContactPage.tsx">
                  <h4 className="font-semibold text-green-700 mb-2 flex items-center gap-2" data-id="hzesgme07" data-path="src/pages/ContactPage.tsx">
                    🌐 Community Building
                  </h4>
                  <ul className="text-sm text-gray-700 space-y-1" data-id="53sow9j8x" data-path="src/pages/ContactPage.tsx">
                    <li data-id="9tiqdhelp" data-path="src/pages/ContactPage.tsx">• Join our contributor network</li>
                    <li data-id="gi347jfxu" data-path="src/pages/ContactPage.tsx">• Suggest new features or content types</li>
                    <li data-id="omc2i7xa3" data-path="src/pages/ContactPage.tsx">• Share your learning journey</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Response Time */}
        <Card className="bg-white/80 backdrop-blur-sm border-orange-200" data-id="ixci0m7yl" data-path="src/pages/ContactPage.tsx">
          <CardContent className="py-8 text-center" data-id="gy36naebc" data-path="src/pages/ContactPage.tsx">
            <div className="text-4xl mb-4" data-id="hx8fghrp3" data-path="src/pages/ContactPage.tsx">⏰</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2" data-id="hsm43ka8l" data-path="src/pages/ContactPage.tsx">Response Time</h3>
            <p className="text-gray-600" data-id="ic1eat6ta" data-path="src/pages/ContactPage.tsx">
              We typically respond within 24-48 hours. Thank you for your patience!
            </p>
          </CardContent>
        </Card>

        {/* Encouragement */}
        <div className="text-center mt-12 bg-gradient-to-r from-orange-100 to-blue-100 p-8 rounded-xl" data-id="0lxtgp237" data-path="src/pages/ContactPage.tsx">
          <h3 className="text-2xl font-bold text-gray-800 mb-4" data-id="807h8asbi" data-path="src/pages/ContactPage.tsx">We Value Your Input! 🙏</h3>
          <p className="text-gray-600 mb-6" data-id="6fnpfodr0" data-path="src/pages/ContactPage.tsx">
            Every message helps us create better content and serve the Chinese learning community more effectively. Don't hesitate to reach out!
          </p>
          <div className="flex justify-center gap-4 text-3xl" data-id="99l0h3lsk" data-path="src/pages/ContactPage.tsx">
            <span data-id="w45pp2nfo" data-path="src/pages/ContactPage.tsx">💌</span>
            <span data-id="f6ia7groh" data-path="src/pages/ContactPage.tsx">🤝</span>
            <span data-id="h108n3u20" data-path="src/pages/ContactPage.tsx">🎯</span>
            <span data-id="ctupymm0j" data-path="src/pages/ContactPage.tsx">🌟</span>
          </div>
        </div>
      </div>
    </div>);

};

export default ContactPage;