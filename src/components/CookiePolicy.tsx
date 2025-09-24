import React from 'react';
import { Home, ArrowLeft, Cookie, Settings, Eye, Shield, BarChart3, Target, Globe } from 'lucide-react';

interface CookiePolicyProps {
  onBack: () => void;
}

function CookiePolicy({ onBack }: CookiePolicyProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <button 
                onClick={onBack}
                className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <ArrowLeft className="h-5 w-5" />
                <span className="text-sm">Back to Home</span>
              </button>
              <div className="h-6 w-px bg-gray-300"></div>
              <div className="flex items-center space-x-2">
                <Home className="h-8 w-8 text-blue-600" />
                <span className="text-xl font-semibold text-gray-900">MyEstateAgent</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-12">
            <div className="bg-blue-100 p-4 rounded-lg w-fit mx-auto mb-6">
              <Cookie className="h-12 w-12 text-blue-600" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-center">
              Cookie Policy
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed text-center">
              This policy explains how MyEstateAgent uses cookies and similar technologies to enhance your browsing experience on our website.
            </p>
            <p className="text-sm text-gray-500 mt-4 text-center">
              Last updated: January 2025
            </p>
          </div>
        </div>
      </section>

      {/* Cookie Policy Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-sm p-8 space-y-8">
            
            {/* What Are Cookies */}
            <div className="text-center">
              <div className="bg-blue-100 p-3 rounded-lg w-fit mx-auto mb-4">
                <Cookie className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">What Are Cookies?</h2>
              <div className="space-y-4 text-gray-600">
                <p className="text-center">
                  Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better browsing experience by remembering your preferences and improving our services.
                </p>
                <p className="text-center">
                  Cookies cannot harm your device and do not contain any personal information that can identify you directly.
                </p>
              </div>
            </div>

            {/* Types of Cookies We Use */}
            <div className="text-center">
              <div className="bg-green-100 p-3 rounded-lg w-fit mx-auto mb-4">
                <Settings className="h-6 w-6 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Types of Cookies We Use</h2>
              <div className="space-y-6">
                
                {/* Essential Cookies */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="bg-red-100 p-2 rounded-lg w-fit mx-auto mb-3">
                    <Shield className="h-5 w-5 text-red-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 text-center">Essential Cookies</h3>
                  <p className="text-gray-600 text-center mb-3">
                    These cookies are necessary for our website to function properly and cannot be disabled.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="text-center">• Session management and security</li>
                    <li className="text-center">• Form submission and user authentication</li>
                    <li className="text-center">• Load balancing and website functionality</li>
                  </ul>
                </div>

                {/* Analytics Cookies */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="bg-blue-100 p-2 rounded-lg w-fit mx-auto mb-3">
                    <BarChart3 className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 text-center">Analytics Cookies</h3>
                  <p className="text-gray-600 text-center mb-3">
                    These cookies help us understand how visitors interact with our website.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="text-center">• Google Analytics for website traffic analysis</li>
                    <li className="text-center">• Page views and user journey tracking</li>
                    <li className="text-center">• Performance monitoring and optimization</li>
                  </ul>
                </div>

                {/* Functional Cookies */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="bg-purple-100 p-2 rounded-lg w-fit mx-auto mb-3">
                    <Eye className="h-5 w-5 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 text-center">Functional Cookies</h3>
                  <p className="text-gray-600 text-center mb-3">
                    These cookies enhance your experience by remembering your preferences.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="text-center">• Language and region preferences</li>
                    <li className="text-center">• Property search filters and saved searches</li>
                    <li className="text-center">• Contact form information</li>
                  </ul>
                </div>

                {/* Marketing Cookies */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="bg-orange-100 p-2 rounded-lg w-fit mx-auto mb-3">
                    <Target className="h-5 w-5 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 text-center">Marketing Cookies</h3>
                  <p className="text-gray-600 text-center mb-3">
                    These cookies help us show you relevant property advertisements.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="text-center">• Targeted property recommendations</li>
                    <li className="text-center">• Social media integration</li>
                    <li className="text-center">• Remarketing and advertising optimization</li>
                  </ul>
                </div>

              </div>
            </div>

            {/* Third-Party Cookies */}
            <div className="text-center">
              <div className="bg-indigo-100 p-3 rounded-lg w-fit mx-auto mb-4">
                <Globe className="h-6 w-6 text-indigo-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Third-Party Cookies</h2>
              <div className="space-y-4 text-gray-600">
                <p className="text-center">
                  We may use third-party services that set their own cookies on our website:
                </p>
                <ul className="space-y-2 text-center">
                  <li className="text-center">• <strong>Google Analytics:</strong> Website traffic and user behavior analysis</li>
                  <li className="text-center">• <strong>Google Maps:</strong> Property location services and mapping</li>
                  <li className="text-center">• <strong>Social Media:</strong> Facebook, Twitter, LinkedIn integration</li>
                  <li className="text-center">• <strong>Live Chat:</strong> Customer support and communication tools</li>
                </ul>
                <p className="text-center mt-4">
                  These third parties have their own privacy policies and cookie practices.
                </p>
              </div>
            </div>

            {/* Managing Your Cookie Preferences */}
            <div className="text-center">
              <div className="bg-green-100 p-3 rounded-lg w-fit mx-auto mb-4">
                <Settings className="h-6 w-6 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Managing Your Cookie Preferences</h2>
              <div className="space-y-4 text-gray-600">
                <p className="text-center">
                  You have control over the cookies we use on our website:
                </p>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 text-center">Browser Settings</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="text-center">• Most browsers allow you to control cookies through settings</li>
                    <li className="text-center">• You can block, delete, or receive notifications about cookies</li>
                    <li className="text-center">• Disabling cookies may affect website functionality</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 text-center">Opt-Out Options</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="text-center">• Google Analytics: Use Google's opt-out browser add-on</li>
                    <li className="text-center">• Marketing cookies: Adjust preferences in our cookie banner</li>
                    <li className="text-center">• Social media: Manage settings on respective platforms</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Cookie Retention */}
            <div className="text-center">
              <div className="bg-yellow-100 p-3 rounded-lg w-fit mx-auto mb-4">
                <Shield className="h-6 w-6 text-yellow-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Cookie Retention</h2>
              <div className="space-y-4 text-gray-600">
                <p className="text-center">
                  Different cookies have different lifespans:
                </p>
                <ul className="space-y-2 text-center">
                  <li className="text-center">• <strong>Session cookies:</strong> Deleted when you close your browser</li>
                  <li className="text-center">• <strong>Persistent cookies:</strong> Remain for a set period (typically 1-2 years)</li>
                  <li className="text-center">• <strong>Essential cookies:</strong> Retained only as long as necessary</li>
                  <li className="text-center">• <strong>Analytics cookies:</strong> Usually retained for 26 months</li>
                </ul>
              </div>
            </div>

            {/* Updates to This Policy */}
            <div className="text-center">
              <div className="bg-purple-100 p-3 rounded-lg w-fit mx-auto mb-4">
                <Settings className="h-6 w-6 text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Updates to This Policy</h2>
              <div className="space-y-4 text-gray-600">
                <p className="text-center">
                  We may update this Cookie Policy from time to time to reflect changes in our practices or for legal reasons.
                </p>
                <p className="text-center">
                  When we make significant changes, we will notify you by updating the "Last updated" date at the top of this policy.
                </p>
                <p className="text-center">
                  We encourage you to review this policy periodically to stay informed about our use of cookies.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="text-center">
              <div className="bg-gray-100 p-3 rounded-lg w-fit mx-auto mb-4">
                <Home className="h-6 w-6 text-gray-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Contact Us</h2>
              <div className="space-y-4 text-gray-600">
                <p className="text-center">
                  If you have questions about our use of cookies, please contact us:
                </p>
                <div className="space-y-2 text-center">
                  <p className="text-center"><strong>Email:</strong> cookies@myestateagent.co.uk</p>
                  <p className="text-center"><strong>Phone:</strong> 01234 567890</p>
                  <p className="text-center"><strong>Address:</strong> High Street, London, UK</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <button 
            onClick={onBack}
            className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors font-medium"
          >
            Back to Home
          </button>
        </div>
      </section>
    </div>
  );
}

export default CookiePolicy;