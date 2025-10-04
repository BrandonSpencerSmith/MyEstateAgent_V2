import React from 'react';
import { Heart, Bath, Bed, Car, Calendar } from 'lucide-react';

interface PropertyCardProps {
  image: string;
  alt: string;
  price: string;
  address: string;
  postcode: string;
  ref: string;
  bedrooms: number;
  bathrooms: number;
  parking: number;
  description: string;
  features: string[];
  details: { label: string; value: string }[];
  onBook: () => void;
  status?: string;
}

export default function PropertyCard({
  image, alt, price, address, postcode, ref, bedrooms, bathrooms, parking,
  description, features, details, onBook, status = 'For Sale'
}: PropertyCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
      <div className="relative">
        <img src={image} alt={alt} className="w-full h-64 object-cover" />
        <div className="absolute top-4 left-4">
          <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">{status}</span>
        </div>
        <button className="absolute top-4 right-4 bg-white/90 p-2 rounded-full hover:bg-white transition-colors">
          <Heart className="h-5 w-5 text-gray-600 hover:text-red-500" />
        </button>
      </div>

      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{price}</h3>
          <p className="text-lg text-gray-600 mb-1">{address}</p>
          <p className="text-sm text-gray-500">{postcode}</p>
          <span className="text-sm text-gray-500 block mt-4">Ref: {ref}</span>
        </div>

        <div className="flex flex-wrap gap-6 mb-6">
          <div className="flex items-center space-x-2">
            <Bed className="h-5 w-5 text-blue-600" />
            <span className="text-gray-700">{bedrooms} Bedrooms</span>
          </div>
          <div className="flex items-center space-x-2">
            <Bath className="h-5 w-5 text-blue-600" />
            <span className="text-gray-700">{bathrooms} Bathrooms</span>
          </div>
          <div className="flex items-center space-x-2">
            <Car className="h-5 w-5 text-blue-600" />
            <span className="text-gray-700">{parking} Parking Space{parking > 1 ? 's' : ''}</span>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-3">Property Description</h4>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h4>
          <ul className="space-y-2">
            {features.map((f, i) => (
              <li key={i} className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                <span className="text-gray-600">{f}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-gray-50 rounded-lg text-sm">
          {details.map((d, i) => (
            <div key={i}>
              <h5 className="font-semibold text-gray-900 mb-1">{d.label}</h5>
              <p className="text-gray-600">{d.value}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button
            onClick={onBook}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center space-x-2">
            <Calendar className="h-5 w-5" />
            <span>Book Viewing</span>
          </button>
        </div>
      </div>
    </div>
  );
}
