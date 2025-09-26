import React, { useState } from 'react';
import { Home, ArrowLeft, Key, Users, Shield, Clock, CheckCircle, Calendar, Star, Phone, Mail, MapPin, Target, Award, TrendingUp, FileText, AlertCircle, ChevronDown, ChevronUp } from 'lucide-react';

interface LandlordProps {
  onBack: () => void;
}

function Landlord({ onBack }: LandlordProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "What are your management fees and how are they structured?",
      answer: "Our management fees range from 8-12% of monthly rental income depending on the service package. Essential package is 12%, Professional is 10%, and Premium is 8%. All fees are only charged when rent is collected, so if there's no rental income, there's no management fee."
    },
    {
      question: "How do you screen potential tenants?",
      answer: "We conduct comprehensive tenant screening including credit checks, employment verification, previous landlord references, right-to-rent checks, and affordability assessments. We only recommend tenants who meet our strict criteria and can demonstrate they earn at least 2.5 times the monthly rent."
    },
    {
      question: "Who is responsible for property maintenance and repairs?",
      answer: "We coordinate all maintenance and repairs on your behalf. For our Professional and Premium packages, we have a network of vetted contractors and can authorize emergency repairs up to agreed limits. You'll receive detailed reports and invoices for all work completed."
    },
    {
      question: "How do you ensure legal compliance with rental regulations?",
      answer: "We stay current with all rental legislation including safety certificates, deposit protection, right-to-rent checks, and energy efficiency requirements. Our team handles all compliance documentation and ensures your property meets current legal standards."
    },
    {
      question: "How often will I receive updates about my property?",
      answer: "You'll receive monthly rental statements, quarterly property reports, and immediate notifications for any significant issues. Our Premium package includes detailed annual property condition reports with recommendations for improvements."
    },
    {
      question: "What happens if a tenant doesn't pay rent?",
      answer: "We have a structured rent collection process including immediate follow-up on late payments, formal notices, and legal proceedings if necessary. Our Professional and Premium packages include rent guarantee insurance options for additional protection."
    },
    {
      question: "Can I terminate the management agreement if I'm not satisfied?",
      answer: "Yes, all our agreements include a 30-day notice period for termination. There are no long-term contracts or exit fees. We're confident in our service quality and want you to stay because you're satisfied, not because you're locked in."
    },
    {
      question: "How quickly can you find new tenants for my property?",
      answer: "On average, we find suitable tenants within 2-3 weeks of marketing launch. Our extensive marketing reach across 15+ platforms and database of pre-qualified tenants helps minimize void periods and maximize your rental income."
    },
    {
      question: "Do you handle property inspections and condition reports?",
      answer: "Yes, we conduct thorough check-in and check-out inspections with detailed condition reports and photography. Regular interim inspections are included in Professional and Premium packages to ensure your property is well-maintained."
    },
    {
      question: "What areas do you cover for property management services?",
      answer: "We provide comprehensive property management services across Leicestershire and surrounding areas including Leicester, Hinckley, Market Harborough, Loughborough, and Melton Mowbray. Contact us to confirm coverage for your specific location."
    }
  ];

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 mx-auto max-w-4xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Stress-Free Property Management with <span className="text-blue-600">Complete Peace of Mind</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Take the stress out of being a landlord with our comprehensive property management services. 
              From tenant screening to maintenance coordination, we handle everything so you can enjoy 
              the benefits of property ownership without the daily hassles.
            </p>
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg">
              Get Your Free Property Assessment
            </button>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-xl max-w-sm mx-auto">
              <div className="flex items-center justify-center space-x-3">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Key className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Properties Managed</p>
                  <p className="text-2xl font-bold text-gray-900">800+</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-xl max-w-sm mx-auto">
              <div className="flex items-center justify-center space-x-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Satisfied Landlords</p>
                  <p className="text-2xl font-bold text-gray-900">500+</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-xl max-w-sm mx-auto">
              <div className="flex items-center justify-center space-x-3">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Average Void Period</p>
                  <p className="text-2xl font-bold text-gray-900">18 Days</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Packages Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Management Package</h2>
            <p className="text-lg text-gray-600">
              Flexible service options designed to meet every landlord's needs and budget.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Essential Package */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Essential</h3>
                <div className="text-4xl font-bold text-blue-600 mb-2">12%</div>
                <p className="text-gray-600">of monthly rental income</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Tenant finding and comprehensive screening</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Monthly rent collection and statements</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Tenancy agreement preparation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Deposit protection and management</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Basic maintenance coordination</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Legal compliance support</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Check-in and check-out inspections</span>
                </li>
              </ul>
              
              <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Choose Essential
              </button>
            </div>

            {/* Professional Package */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-blue-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Professional</h3>
                <div className="text-4xl font-bold text-blue-600 mb-2">10%</div>
                <p className="text-gray-600">of monthly rental income</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Everything in Essential package</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Priority maintenance with vetted contractors</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Quarterly property inspections</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Emergency repair authorization (up to £500)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Rent guarantee insurance option</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Detailed quarterly reports</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">24/7 emergency contact service</span>
                </li>
              </ul>
              
              <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Choose Professional
              </button>
            </div>

            {/* Premium Package */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium</h3>
                <div className="text-4xl font-bold text-blue-600 mb-2">8%</div>
                <p className="text-gray-600">of monthly rental income</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Everything in Professional package</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Monthly property inspections</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Emergency repair authorization (up to £1,000)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Annual property condition reports</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Dedicated property manager</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Property improvement recommendations</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Comprehensive rent and legal protection</span>
                </li>
              </ul>
              
              <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Choose Premium
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Letting Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Proven Letting Process</h2>
            <p className="text-lg text-gray-600">
              From property assessment to tenant move-in, we handle every step with professional expertise.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Step 1 */}
            <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Property Assessment & Valuation</h3>
                <p className="text-gray-600 mb-3">
                  Our qualified valuers assess your property and provide a comprehensive rental valuation 
                  based on current market conditions and comparable properties in your area.
                </p>
                <div className="flex items-center space-x-2 text-sm text-blue-600">
                  <Clock className="h-4 w-4" />
                  <span>Timeframe: 1-2 days</span>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Property Preparation & Marketing</h3>
                <p className="text-gray-600 mb-3">
                  We prepare professional photography, detailed descriptions, and launch your property 
                  across 15+ rental platforms to maximize exposure to qualified tenants.
                </p>
                <div className="flex items-center space-x-2 text-sm text-blue-600">
                  <Clock className="h-4 w-4" />
                  <span>Timeframe: 3-5 days</span>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Tenant Viewings & Applications</h3>
                <p className="text-gray-600 mb-3">
                  We coordinate and conduct all property viewings, collect applications, and present 
                  you with pre-screened candidates who meet our strict qualification criteria.
                </p>
                <div className="flex items-center space-x-2 text-sm text-blue-600">
                  <Clock className="h-4 w-4" />
                  <span>Timeframe: 1-3 weeks</span>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Comprehensive Tenant Screening</h3>
                <p className="text-gray-600 mb-3">
                  We conduct thorough background checks including credit history, employment verification, 
                  previous landlord references, and right-to-rent documentation.
                </p>
                <div className="flex items-center space-x-2 text-sm text-blue-600">
                  <Clock className="h-4 w-4" />
                  <span>Timeframe: 3-5 days</span>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                5
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Tenancy Setup & Documentation</h3>
                <p className="text-gray-600 mb-3">
                  We prepare all legal documentation, collect deposits, arrange utility transfers, 
                  and ensure full compliance with current rental legislation.
                </p>
                <div className="flex items-center space-x-2 text-sm text-blue-600">
                  <Clock className="h-4 w-4" />
                  <span>Timeframe: 5-7 days</span>
                </div>
              </div>
            </div>

            {/* Step 6 */}
            <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                6
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Move-in & Ongoing Management</h3>
                <p className="text-gray-600 mb-3">
                  We conduct detailed check-in inspections, hand over keys, and begin ongoing property 
                  management including rent collection, maintenance, and regular reporting.
                </p>
                <div className="flex items-center space-x-2 text-sm text-blue-600">
                  <Clock className="h-4 w-4" />
                  <span>Timeframe: Ongoing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Get answers to common questions about our landlord services and property management.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Elements Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Landlords Say</h2>
            <p className="text-lg text-gray-600">
              Hear from property owners who trust us to manage their rental investments.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Testimonial 1 */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "MyEstateAgent has managed my portfolio of 6 properties for 3 years. Their tenant screening 
                is excellent - I've had zero problem tenants and consistent rental income. The monthly 
                reports keep me fully informed without any hassle."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">DM</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">David Mitchell</p>
                  <p className="text-sm text-gray-500">Property Investor, Leicester</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "After a nightmare experience with our previous agent, MyEstateAgent has been a breath 
                of fresh air. They found us quality tenants quickly and handle all maintenance issues 
                professionally. Worth every penny of the management fee."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-semibold">SP</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Sarah & Paul Roberts</p>
                  <p className="text-sm text-gray-500">Landlords, Hinckley</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "As a first-time landlord, I was worried about the legal requirements and tenant management. 
                MyEstateAgent guided me through everything and now I have a reliable rental income with 
                minimal stress. Their expertise is invaluable."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-semibold">JW</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">James Wilson</p>
                  <p className="text-sm text-gray-500">First-time Landlord, Loughborough</p>
                </div>
              </div>
            </div>
          </div>

          {/* Credentials */}
          <div className="text-center">
            <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">800+</div>
                <div className="text-gray-600">Properties Managed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">98%</div>
                <div className="text-gray-600">Landlord Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">ARLA</div>
                <div className="text-gray-600">Regulated</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Get started today with a free property assessment and discover how we can help you.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="flex flex-col items-center">
              <div className="bg-blue-100 p-3 rounded-lg mb-4">
                <Phone className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600 mb-3">Speak to a property expert</p>
              <p className="text-blue-600 font-medium">01234 567890</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-green-100 p-3 rounded-lg mb-4">
                <Mail className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 mb-3">Get a quick response</p>
              <p className="text-green-600 font-medium">landlords@myestateagent.co.uk</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-purple-100 p-3 rounded-lg mb-4">
                <MapPin className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600 mb-3">Pop in for a consultation</p>
              <p className="text-purple-600 font-medium">High Street, Leicestershire</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg">
              Get Free Property Assessment
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors font-medium text-lg">
              Download Landlord Guide
            </button>
          </div>

          <div className="bg-blue-50 p-6 rounded-xl">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Office Hours & Response Times:</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-blue-500" />
                <span>Monday - Friday: 9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-blue-500" />
                <span>Saturday: 9:00 AM - 4:00 PM</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-green-500" />
                <span>Email response: Within 2 hours</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-purple-500" />
                <span>Emergency line: 24/7 available</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Landlord;