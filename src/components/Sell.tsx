import React from 'react';
import { Home, ArrowLeft, TrendingUp, Camera, Users, Award, Clock, CheckCircle, Calendar, Star, Phone, Mail, MapPin, Target, Shield, Zap } from 'lucide-react';

interface SellProps {
  onBack: () => void;
}

function Sell({ onBack }: SellProps) {
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
              Sell Your Property with <span className="text-blue-600">Confidence</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Get the best price for your property with our expert marketing, professional photography, and proven sales strategy. 
              Our experienced team will guide you through every step of the selling process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg">
                Get Free Property Valuation
              </button>
              <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors font-medium text-lg">
                Book Consultation
              </button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-xl max-w-sm mx-auto">
              <div className="flex items-center justify-center space-x-3">
                <div className="bg-green-100 p-2 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Average Sale Time</p>
                  <p className="text-2xl font-bold text-gray-900">42 Days</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-xl max-w-sm mx-auto">
              <div className="flex items-center justify-center space-x-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Achieve Asking Price</p>
                  <p className="text-2xl font-bold text-gray-900">97%</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-xl max-w-sm mx-auto">
              <div className="flex items-center justify-center space-x-3">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <Award className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Client Satisfaction</p>
                  <p className="text-2xl font-bold text-gray-900">98%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Overview Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Current Market Conditions</h2>
            <p className="text-lg text-gray-600">
              The UK property market remains strong with continued demand from buyers across all price ranges.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Strong Buyer Demand</h3>
                <p className="text-gray-600 mb-4">
                  With mortgage rates stabilizing and buyer confidence returning, we're seeing increased activity 
                  across all property types. Quality properties are selling quickly when priced correctly.
                </p>
                <div className="flex items-center space-x-2 text-green-600">
                  <TrendingUp className="h-5 w-5" />
                  <span className="font-medium">15% increase in viewings this quarter</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Competitive Advantage</h3>
                <p className="text-gray-600 mb-4">
                  Our multi-platform marketing approach and extensive buyer database means your property 
                  gets maximum exposure to qualified buyers from day one.
                </p>
                <div className="flex items-center space-x-2 text-blue-600">
                  <Users className="h-5 w-5" />
                  <span className="font-medium">Over 5,000 active buyers registered</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Why Sell Now?</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Limited Stock Levels</h4>
                    <p className="text-gray-600">Lower inventory means less competition and better prices for sellers</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Motivated Buyers</h4>
                    <p className="text-gray-600">Serious buyers are actively searching and ready to move quickly</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Spring Market Momentum</h4>
                    <p className="text-gray-600">Traditional peak selling season with increased buyer activity</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Proven Selling Process</h2>
            <p className="text-lg text-gray-600">
              From initial valuation to completion, we guide you through every step with transparency and expertise.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Step 1 */}
            <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Free Property Valuation</h3>
                <p className="text-gray-600 mb-3">
                  Our expert valuers assess your property using local market data and recent sales to provide 
                  an accurate market valuation.
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
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Marketing Strategy</h3>
                <p className="text-gray-600 mb-3">
                  We create a tailored marketing plan including professional photography, floor plans, 
                  and multi-platform advertising.
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
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Launch & Viewings</h3>
                <p className="text-gray-600 mb-3">
                  Your property goes live across all major portals and our database. We coordinate and 
                  conduct all viewings professionally.
                </p>
                <div className="flex items-center space-x-2 text-sm text-blue-600">
                  <Clock className="h-4 w-4" />
                  <span>Timeframe: Ongoing</span>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Offers & Negotiation</h3>
                <p className="text-gray-600 mb-3">
                  We present all offers promptly and negotiate on your behalf to achieve the best possible 
                  price and terms.
                </p>
                <div className="flex items-center space-x-2 text-sm text-blue-600">
                  <Clock className="h-4 w-4" />
                  <span>Timeframe: 2-6 weeks</span>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                5
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Sale Progression</h3>
                <p className="text-gray-600 mb-3">
                  We manage the entire process from offer acceptance to completion, liaising with solicitors, 
                  surveyors, and all parties.
                </p>
                <div className="flex items-center space-x-2 text-sm text-blue-600">
                  <Clock className="h-4 w-4" />
                  <span>Timeframe: 8-12 weeks</span>
                </div>
              </div>
            </div>

            {/* Step 6 */}
            <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                6
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Completion</h3>
                <p className="text-gray-600 mb-3">
                  Keys are exchanged, funds transferred, and your property sale is complete. We're here 
                  for any post-sale support you need.
                </p>
                <div className="flex items-center space-x-2 text-sm text-blue-600">
                  <Clock className="h-4 w-4" />
                  <span>Timeframe: Completion day</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Highlight Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Sets Us Apart</h2>
            <p className="text-lg text-gray-600">
              Our comprehensive approach and attention to detail ensure your property stands out in the market.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Professional Photography */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 text-center">
              <div className="bg-blue-100 p-3 rounded-lg w-fit mb-6 mx-auto">
                <Camera className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Professional Photography</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                High-quality photography and virtual tours that showcase your property in the best light, 
                attracting more potential buyers.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-blue-800 font-medium">Properties with professional photos sell 32% faster</p>
              </div>
            </div>

            {/* Multi-Platform Marketing */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 text-center">
              <div className="bg-green-100 p-3 rounded-lg w-fit mb-6 mx-auto">
                <Zap className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Multi-Platform Marketing</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Your property is advertised across Rightmove, Zoopla, OnTheMarket, and our extensive 
                social media channels for maximum exposure.
              </p>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-sm text-green-800 font-medium">Reach over 100 million monthly property searches</p>
              </div>
            </div>

            {/* Expert Negotiation */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 text-center">
              <div className="bg-purple-100 p-3 rounded-lg w-fit mb-6 mx-auto">
                <Target className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Expert Negotiation</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our experienced negotiators work tirelessly to secure the best possible price and terms 
                for your property sale.
              </p>
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="text-sm text-purple-800 font-medium">Average of £8,500 more achieved through negotiation</p>
              </div>
            </div>

            {/* Market Analysis */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 text-center">
              <div className="bg-orange-100 p-3 rounded-lg w-fit mb-6 mx-auto">
                <TrendingUp className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Detailed Market Analysis</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Comprehensive market reports and pricing strategies based on local data, recent sales, 
                and current market conditions.
              </p>
              <div className="bg-orange-50 p-4 rounded-lg">
                <p className="text-sm text-orange-800 font-medium">Accurate valuations within 2% of final sale price</p>
              </div>
            </div>

            {/* Dedicated Support */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 text-center">
              <div className="bg-red-100 p-3 rounded-lg w-fit mb-6 mx-auto">
                <Users className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Dedicated Support Team</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Your personal property consultant provides regular updates and is always available 
                to answer questions throughout the process.
              </p>
              <div className="bg-red-50 p-4 rounded-lg">
                <p className="text-sm text-red-800 font-medium">Average response time under 2 hours</p>
              </div>
            </div>

            {/* Legal & Compliance */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 text-center">
              <div className="bg-indigo-100 p-3 rounded-lg w-fit mb-6 mx-auto">
                <Shield className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Legal & Compliance</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Full compliance with all regulations, professional indemnity insurance, and membership 
                of property ombudsman schemes for your protection.
              </p>
              <div className="bg-indigo-50 p-4 rounded-lg">
                <p className="text-sm text-indigo-800 font-medium">RICS regulated with £2M professional indemnity</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Elements Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600">
              Don't just take our word for it - hear from satisfied sellers who achieved their property goals with us.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "MyEstateAgent sold our house in just 3 weeks for the full asking price. Their marketing was 
                exceptional and the whole process was stress-free. Highly recommended!"
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">SJ</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Sarah Johnson</p>
                  <p className="text-sm text-gray-500">Sold in Stoney Stanton</p>
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
                "Professional service from start to finish. They achieved £15,000 more than we expected and 
                kept us informed every step of the way. Couldn't be happier!"
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-semibold">MT</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Michael Thompson</p>
                  <p className="text-sm text-gray-500">Sold in Desford</p>
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
                "After struggling with another agent for months, MyEstateAgent sold our property in 6 weeks. 
                Their expertise and dedication made all the difference."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-semibold">LD</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Lisa Davis</p>
                  <p className="text-sm text-gray-500">Sold in Thurlaston</p>
                </div>
              </div>
            </div>
          </div>

          {/* Credentials */}
          <div className="mt-16 text-center">
            <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">2,500+</div>
                <div className="text-gray-600">Properties Sold</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">98%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">RICS</div>
                <div className="text-gray-600">Regulated</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact/CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Sell Your Property?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Get started today with a free, no-obligation property valuation and discover what your home is worth.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="flex flex-col items-center">
              <div className="bg-blue-100 p-3 rounded-lg mb-4">
                <Phone className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600 mb-3">Speak to an expert today</p>
              <p className="text-blue-600 font-medium">01234 567890</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-green-100 p-3 rounded-lg mb-4">
                <Mail className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 mb-3">Get a quick response</p>
              <p className="text-green-600 font-medium">sell@myestateagent.co.uk</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-purple-100 p-3 rounded-lg mb-4">
                <MapPin className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600 mb-3">Pop in for a chat</p>
              <p className="text-purple-600 font-medium">High Street, Leicestershire</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg">
              Book Free Valuation
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors font-medium text-lg">
              Request Market Analysis
            </button>
          </div>

          <div className="mt-8 p-6 bg-blue-50 rounded-xl">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Free Property Valuation Includes:</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Comprehensive market analysis</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Comparable sales data</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Marketing strategy consultation</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>No obligation or commitment</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Sell;