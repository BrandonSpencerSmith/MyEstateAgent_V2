import React from 'react';
import { Home, ArrowLeft, Shield, Eye, Lock, FileText, Users, Mail } from 'lucide-react';

interface PrivacyPolicyProps {
  onBack: () => void;
}

function PrivacyPolicy({ onBack }: PrivacyPolicyProps) {
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
              <Shield className="h-12 w-12 text-blue-600" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-center">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed text-center">
              Your privacy is important to us. This policy explains how MyEstateAgent collects, uses, and protects your personal information.
            </p>
            <p className="text-sm text-gray-500 mt-4 text-center">
              Last updated: January 2025
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-sm p-8 space-y-8">
            
            {/* Information We Collect */}
            <div className="text-center">
              <div className="bg-blue-100 p-3 rounded-lg w-fit mx-auto mb-4">
                <Eye className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Information We Collect</h2>
              <div className="space-y-4 text-gray-600">
                <p className="text-center">We collect information you provide directly to us, such as when you:</p>
                <ul className="space-y-2 text-center">
                  <li className="text-center">• Create an account or register for our services</li>
                  <li className="text-center">• Request property valuations or viewings</li>
                  <li className="text-center">• Contact us for support or inquiries</li>
                  <li className="text-center">• Subscribe to our newsletters or marketing communications</li>
                  <li className="text-center">• Participate in surveys or feedback forms</li>
                </ul>
                <p className="text-center mt-4">
                  This may include your name, email address, phone number, postal address, property preferences, and financial information relevant to property transactions.
                </p>
              </div>
            </div>

            {/* How We Use Your Information */}
            <div className="text-center">
              <div className="bg-green-100 p-3 rounded-lg w-fit mx-auto mb-4">
                <FileText className="h-6 w-6 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">How We Use Your Information</h2>
              <div className="space-y-4 text-gray-600">
                <p className="text-center">We use the information we collect to:</p>
                <ul className="space-y-2 text-center">
                  <li className="text-center">• Provide and improve our estate agency services</li>
                  <li className="text-center">• Match you with suitable properties</li>
                  <li className="text-center">• Communicate with you about your property requirements</li>
                  <li className="text-center">• Process transactions and manage your account</li>
                  <li className="text-center">• Send you relevant property updates and market information</li>
                  <li className="text-center">• Comply with legal and regulatory requirements</li>
                </ul>
              </div>
            </div>

            {/* Information Sharing */}
            <div className="text-center">
              <div className="bg-purple-100 p-3 rounded-lg w-fit mx-auto mb-4">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Information Sharing</h2>
              <div className="space-y-4 text-gray-600">
                <p className="text-center">We may share your information with:</p>
                <ul className="space-y-2 text-center">
                  <li className="text-center">• Property owners and landlords (when you express interest in their properties)</li>
                  <li className="text-center">• Mortgage brokers and financial advisors (with your consent)</li>
                  <li className="text-center">• Legal professionals and conveyancers</li>
                  <li className="text-center">• Third-party service providers who assist in our operations</li>
                  <li className="text-center">• Regulatory bodies when required by law</li>
                </ul>
                <p className="text-center mt-4">
                  We never sell your personal information to third parties for marketing purposes.
                </p>
              </div>
            </div>

            {/* Data Security */}
            <div className="text-center">
              <div className="bg-red-100 p-3 rounded-lg w-fit mx-auto mb-4">
                <Lock className="h-6 w-6 text-red-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Data Security</h2>
              <div className="space-y-4 text-gray-600">
                <p className="text-center">
                  We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction.
                </p>
                <ul className="space-y-2 text-center">
                  <li className="text-center">• SSL encryption for data transmission</li>
                  <li className="text-center">• Secure servers and databases</li>
                  <li className="text-center">• Regular security audits and updates</li>
                  <li className="text-center">• Staff training on data protection</li>
                  <li className="text-center">• Access controls and authentication measures</li>
                </ul>
              </div>
            </div>

            {/* Your Rights */}
            <div className="text-center">
              <div className="bg-orange-100 p-3 rounded-lg w-fit mx-auto mb-4">
                <Shield className="h-6 w-6 text-orange-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Your Rights</h2>
              <div className="space-y-4 text-gray-600">
                <p className="text-center">Under UK data protection law, you have the right to:</p>
                <ul className="space-y-2 text-center">
                  <li className="text-center">• Access your personal information</li>
                  <li className="text-center">• Correct inaccurate or incomplete information</li>
                  <li className="text-center">• Request deletion of your information</li>
                  <li className="text-center">• Object to processing of your information</li>
                  <li className="text-center">• Request restriction of processing</li>
                  <li className="text-center">• Data portability</li>
                  <li className="text-center">• Withdraw consent at any time</li>
                </ul>
              </div>
            </div>

            {/* Cookies */}
            <div className="text-center">
              <div className="bg-indigo-100 p-3 rounded-lg w-fit mx-auto mb-4">
                <FileText className="h-6 w-6 text-indigo-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Cookies and Tracking</h2>
              <div className="space-y-4 text-gray-600">
                <p className="text-center">
                  We use cookies and similar technologies to enhance your experience on our website. These help us:
                </p>
                <ul className="space-y-2 text-center">
                  <li className="text-center">• Remember your preferences and settings</li>
                  <li className="text-center">• Analyse website traffic and usage patterns</li>
                  <li className="text-center">• Provide personalised content and recommendations</li>
                  <li className="text-center">• Improve our website functionality</li>
                </ul>
                <p className="text-center mt-4">
                  You can control cookie settings through your browser preferences.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="text-center">
              <div className="bg-gray-100 p-3 rounded-lg w-fit mx-auto mb-4">
                <Mail className="h-6 w-6 text-gray-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Contact Us</h2>
              <div className="space-y-4 text-gray-600">
                <p className="text-center">
                  If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us:
                </p>
                <div className="space-y-2 text-center">
                  <p className="text-center"><strong>Email:</strong> privacy@myestateagent.co.uk</p>
                  <p className="text-center"><strong>Phone:</strong> 01234 567890</p>
                  <p className="text-center"><strong>Address:</strong> High Street, London, UK</p>
                </div>
                <p className="text-center mt-4">
                  We will respond to your request within 30 days as required by law.
                </p>
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

export default PrivacyPolicy;