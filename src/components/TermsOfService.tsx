import React from 'react';
import { Home, ArrowLeft, FileText, Scale, Shield, AlertTriangle, Users, Phone } from 'lucide-react';

interface TermsOfServiceProps {
  onBack: () => void;
}

function TermsOfService({ onBack }: TermsOfServiceProps) {
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
              <Scale className="h-12 w-12 text-blue-600" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-center">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed text-center">
              These terms govern your use of MyEstateAgent's services. Please read them carefully before using our platform.
            </p>
            <p className="text-sm text-gray-500 mt-4 text-center">
              Last updated: January 2025
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-sm p-8 space-y-8">
            
            {/* Acceptance of Terms */}
            <div className="text-center">
              <div className="bg-blue-100 p-3 rounded-lg w-fit mx-auto mb-4">
                <FileText className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Acceptance of Terms</h2>
              <div className="space-y-4 text-gray-600">
                <p className="text-center">
                  By accessing and using MyEstateAgent's website and services, you accept and agree to be bound by these Terms of Service.
                </p>
                <p className="text-center">
                  If you do not agree to these terms, please do not use our services. We reserve the right to modify these terms at any time, and your continued use constitutes acceptance of any changes.
                </p>
              </div>
            </div>

            {/* Our Services */}
            <div className="text-center">
              <div className="bg-green-100 p-3 rounded-lg w-fit mx-auto mb-4">
                <Home className="h-6 w-6 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Our Services</h2>
              <div className="space-y-4 text-gray-600">
                <p className="text-center">MyEstateAgent provides estate agency services including:</p>
                <ul className="space-y-2 text-center">
                  <li className="text-center">• Property buying and selling assistance</li>
                  <li className="text-center">• Property lettings and management</li>
                  <li className="text-center">• Property valuations and market analysis</li>
                  <li className="text-center">• Mortgage and financial advice coordination</li>
                  <li className="text-center">• Legal process support and guidance</li>
                </ul>
                <p className="text-center mt-4">
                  All services are provided in accordance with UK estate agency regulations and professional standards.
                </p>
              </div>
            </div>

            {/* User Responsibilities */}
            <div className="text-center">
              <div className="bg-purple-100 p-3 rounded-lg w-fit mx-auto mb-4">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">User Responsibilities</h2>
              <div className="space-y-4 text-gray-600">
                <p className="text-center">When using our services, you agree to:</p>
                <ul className="space-y-2 text-center">
                  <li className="text-center">• Provide accurate and truthful information</li>
                  <li className="text-center">• Comply with all applicable laws and regulations</li>
                  <li className="text-center">• Respect the rights and privacy of other users</li>
                  <li className="text-center">• Not use our services for fraudulent or illegal activities</li>
                  <li className="text-center">• Maintain the confidentiality of your account information</li>
                  <li className="text-center">• Notify us immediately of any unauthorised use</li>
                </ul>
              </div>
            </div>

            {/* Property Information */}
            <div className="text-center">
              <div className="bg-orange-100 p-3 rounded-lg w-fit mx-auto mb-4">
                <Shield className="h-6 w-6 text-orange-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Property Information</h2>
              <div className="space-y-4 text-gray-600">
                <p className="text-center">
                  We strive to provide accurate property information, but cannot guarantee completeness or accuracy of all details.
                </p>
                <ul className="space-y-2 text-center">
                  <li className="text-center">• Property descriptions are provided in good faith</li>
                  <li className="text-center">• Measurements and details should be verified independently</li>
                  <li className="text-center">• Property availability is subject to change</li>
                  <li className="text-center">• Prices are indicative and may be subject to negotiation</li>
                  <li className="text-center">• We recommend professional surveys and inspections</li>
                </ul>
              </div>
            </div>

            {/* Fees and Payments */}
            <div className="text-center">
              <div className="bg-red-100 p-3 rounded-lg w-fit mx-auto mb-4">
                <FileText className="h-6 w-6 text-red-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Fees and Payments</h2>
              <div className="space-y-4 text-gray-600">
                <p className="text-center">
                  Our fee structure is transparent and will be clearly communicated before any services are provided.
                </p>
                <ul className="space-y-2 text-center">
                  <li className="text-center">• Selling fees are typically payable upon completion</li>
                  <li className="text-center">• Letting fees are outlined in our letting agreements</li>
                  <li className="text-center">• Additional services may incur separate charges</li>
                  <li className="text-center">• All fees are subject to VAT where applicable</li>
                  <li className="text-center">• Payment terms will be specified in service agreements</li>
                </ul>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div className="text-center">
              <div className="bg-yellow-100 p-3 rounded-lg w-fit mx-auto mb-4">
                <AlertTriangle className="h-6 w-6 text-yellow-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Limitation of Liability</h2>
              <div className="space-y-4 text-gray-600">
                <p className="text-center">
                  While we strive to provide excellent service, our liability is limited as follows:
                </p>
                <ul className="space-y-2 text-center">
                  <li className="text-center">• We are not liable for decisions made based on property information</li>
                  <li className="text-center">• Third-party services are subject to their own terms</li>
                  <li className="text-center">• We cannot guarantee specific outcomes or timelines</li>
                  <li className="text-center">• Our liability is limited to the fees paid for our services</li>
                  <li className="text-center">• Professional indemnity insurance covers our regulated activities</li>
                </ul>
              </div>
            </div>

            {/* Termination */}
            <div className="text-center">
              <div className="bg-indigo-100 p-3 rounded-lg w-fit mx-auto mb-4">
                <Scale className="h-6 w-6 text-indigo-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Termination</h2>
              <div className="space-y-4 text-gray-600">
                <p className="text-center">
                  Either party may terminate our service agreement in accordance with the terms specified in individual contracts.
                </p>
                <ul className="space-y-2 text-center">
                  <li className="text-center">• Notice periods vary by service type</li>
                  <li className="text-center">• Some services may have minimum commitment periods</li>
                  <li className="text-center">• Termination does not affect accrued rights or obligations</li>
                  <li className="text-center">• We reserve the right to suspend services for breach of terms</li>
                </ul>
              </div>
            </div>

            {/* Governing Law */}
            <div className="text-center">
              <div className="bg-gray-100 p-3 rounded-lg w-fit mx-auto mb-4">
                <Shield className="h-6 w-6 text-gray-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Governing Law</h2>
              <div className="space-y-4 text-gray-600">
                <p className="text-center">
                  These terms are governed by English law and subject to the jurisdiction of English courts.
                </p>
                <p className="text-center">
                  We are regulated by RICS (Royal Institution of Chartered Surveyors) and are members of relevant property ombudsman schemes.
                </p>
                <p className="text-center mt-4">
                  For disputes, we encourage resolution through our internal complaints procedure before seeking external mediation.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="text-center">
              <div className="bg-blue-100 p-3 rounded-lg w-fit mx-auto mb-4">
                <Phone className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Contact Us</h2>
              <div className="space-y-4 text-gray-600">
                <p className="text-center">
                  If you have questions about these Terms of Service, please contact us:
                </p>
                <div className="space-y-2 text-center">
                  <p className="text-center"><strong>Email:</strong> legal@myestateagent.co.uk</p>
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

export default TermsOfService;