import React from 'react';
import { Home, Users, Award, Clock, MapPin, TrendingUp, Heart, Shield, CheckCircle, ArrowLeft } from 'lucide-react';

interface AboutProps {
  onBack: () => void;
}

function About({ onBack }: AboutProps) {
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
              About <span className="text-blue-600">MyEstateAgent</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              For over 15 years, we've been helping families and individuals across the UK find their perfect homes. 
              Our commitment to exceptional service and local expertise has made us a trusted name in estate agency.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 text-center">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                  <Award className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">Award-Winning Service</h3>
                  <p className="text-gray-600 text-center">Recognised by industry bodies for excellence in customer service and professional standards.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-2 rounded-lg flex-shrink-0">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">Expert Team</h3>
                  <p className="text-gray-600 text-center">Qualified professionals with deep local knowledge and years of experience in the property market.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 p-2 rounded-lg flex-shrink-0">
                  <Clock className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">15+ Years Experience</h3>
                  <p className="text-gray-600 text-center">Established expertise helping thousands of clients navigate the UK property market successfully.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-blue-600 mb-2">2,500+</div>
              <div className="text-gray-600">Properties Sold</div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-purple-600 mb-2">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-orange-600 mb-2">50+</div>
              <div className="text-gray-600">Local Areas</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Comprehensive Services</h2>
            <p className="text-lg text-gray-600">
              We provide end-to-end property services designed to make your buying, selling, or renting experience as smooth as possible.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
            {/* Buying Services */}
            <div className="bg-gray-50 p-8 rounded-xl text-center">
              <div className="bg-blue-100 p-3 rounded-lg w-fit mb-6">
                <Home className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Property Buying</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center space-x-3 justify-center text-center">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Comprehensive property search</span>
                </li>
                <li className="flex items-center space-x-3 justify-center text-center">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Market analysis and valuations</span>
                </li>
                <li className="flex items-center space-x-3 justify-center text-center">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Mortgage advice and support</span>
                </li>
                <li className="flex items-center space-x-3 justify-center text-center">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Legal process coordination</span>
                </li>
                <li className="flex items-center space-x-3 justify-center text-center">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Viewing arrangements</span>
                </li>
              </ul>
            </div>

            {/* Selling Services */}
            <div className="bg-gray-50 p-8 rounded-xl text-center">
              <div className="bg-green-100 p-3 rounded-lg w-fit mb-6">
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Property Selling</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center space-x-3 justify-center text-center">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Free property valuations</span>
                </li>
                <li className="flex items-center space-x-3 justify-center text-center">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Professional photography</span>
                </li>
                <li className="flex items-center space-x-3 justify-center text-center">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Multi-platform marketing</span>
                </li>
                <li className="flex items-center space-x-3 justify-center text-center">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Negotiation expertise</span>
                </li>
                <li className="flex items-center space-x-3 justify-center text-center">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Sale progression management</span>
                </li>
              </ul>
            </div>

            {/* Letting Services */}
            <div className="bg-gray-50 p-8 rounded-xl text-center">
              <div className="bg-purple-100 p-3 rounded-lg w-fit mb-6">
                <MapPin className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Lettings & Management</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center space-x-3 justify-center text-center">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Tenant finding and vetting</span>
                </li>
                <li className="flex items-center space-x-3 justify-center text-center">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Property management services</span>
                </li>
                <li className="flex items-center space-x-3 justify-center text-center">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Legal compliance support</span>
                </li>
                <li className="flex items-center space-x-3 justify-center text-center">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Rent collection and accounting</span>
                </li>
                <li className="flex items-center space-x-3 justify-center text-center">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Maintenance coordination</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose MyEstateAgent?</h2>
            <p className="text-lg text-gray-600">
              Our commitment to excellence and client satisfaction sets us apart in the competitive UK property market.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="bg-blue-100 p-3 rounded-lg w-fit mx-auto mb-4">
                <Heart className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Personal Touch</h3>
              <p className="text-gray-600 text-sm">Every client receives dedicated, personalised service tailored to their unique needs and circumstances.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="bg-green-100 p-3 rounded-lg w-fit mx-auto mb-4">
                <MapPin className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Local Knowledge</h3>
              <p className="text-gray-600 text-sm">Deep understanding of local markets, schools, transport links, and community amenities across the UK.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="bg-purple-100 p-3 rounded-lg w-fit mx-auto mb-4">
                <Shield className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Trusted & Regulated</h3>
              <p className="text-gray-600 text-sm">Fully regulated by RICS and member of property ombudsman schemes for your peace of mind.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="bg-orange-100 p-3 rounded-lg w-fit mx-auto mb-4">
                <TrendingUp className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Market Expertise</h3>
              <p className="text-gray-600 text-sm">Up-to-date market insights and pricing strategies to maximise your property's potential.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="bg-red-100 p-3 rounded-lg w-fit mx-auto mb-4">
                <Clock className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Quick Response</h3>
              <p className="text-gray-600 text-sm">Fast response times and proactive communication throughout your property journey.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="bg-indigo-100 p-3 rounded-lg w-fit mx-auto mb-4">
                <Users className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Professional Team</h3>
              <p className="text-gray-600 text-sm">Qualified, experienced professionals committed to achieving the best outcomes for our clients.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Work with Us?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Whether you're buying, selling, or renting, we're here to guide you through every step of your property journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Book Free Consultation
            </button>
            <button 
              onClick={onBack}
              className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors font-medium"
            >
              View Our Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;