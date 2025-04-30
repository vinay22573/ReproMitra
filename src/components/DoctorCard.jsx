import { MapPin, Video, Star, StarHalf, Star as StarOutline } from 'lucide-react';
import { Link } from 'react-router-dom';
// import doctor from '@assets/doctor.jpg'; // Replace with the actual filename

function DoctorCard({ doctor }) {
  const { id, name, link, specialization, stars, reviews, location } = doctor;

  // Function to render stars based on rating
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`star-${i}`} size={16} />);
    }

    if (hasHalfStar) {
      stars.push(<StarHalf key="half-star" size={16} />);
    }

    const remainingStars = 5 - stars.length;
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<StarOutline key={`outline-${i}`} size={16} />);
    }

    return stars;
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-start">
        <img
        //   src={doctor}
        src={link}
        className="w-20 h-20 rounded-full object-cover"
        alt={name}
      />
        <div className="ml-4">
          <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
          <p className="text-sm text-gray-600">{specialization}</p>
          <div className="flex items-center mt-1">
            <div className="flex text-yellow-400">
              {renderStars(stars)}
            </div>
            <span className="ml-2 text-sm text-gray-600">{stars} ({reviews} reviews)</span>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <div className="flex flex-wrap gap-2">
          {/* You can add specialties here if needed */}
        </div>
      </div>
      <div className="mt-4 flex items-center text-sm text-gray-600">
        <MapPin size={14} className="mr-2" />
        <span>{location}</span>
        <span className="mx-2">•</span>
        <Video size={14} className="mr-2" />
        <span>Online Available</span>
      </div>
      <Link 
        to={`/doctor/${id}`}
        className="block rounded-md w-full mt-4 bg-custom text-white py-2 px-4 font-medium text-center hover:bg-custom/90 transition-colors"
      >
        Book Consultation
      </Link>
    </div>
  );
}

export default DoctorCard;
