import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Calendar, AlertCircle } from 'lucide-react';
import { format } from 'date-fns';
import { useParams, useNavigate } from 'react-router-dom';
import { doctorData } from '../data/docData';

// Mock data for demonstration
const MOCK_SLOTS = [
  '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM',
  '11:00 AM', '11:30 AM', '02:00 PM', '02:30 PM',
  '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM'
];

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <div 
          className="fixed inset-0 bg-black bg-opacity-30"
          onClick={onClose}
        />
        <div className="relative bg-white rounded-lg p-8 max-w-md mx-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

const DoctorConsultation = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const doctor = doctorData.find(doc => doc.id === id);

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [consultationType, setConsultationType] = useState('video');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [verificationMethod, setVerificationMethod] = useState('');
  const [hasAyushmanCard, setHasAyushmanCard] = useState(false);
  const [isVerifyingCard, setIsVerifyingCard] = useState(false);
  const [verificationError, setVerificationError] = useState('');

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const watchAyushmanNumber = watch('ayushmanNumber');
  const watchAadharNumber = watch('aadharNumber');

  useEffect(() => {
    if (!doctor) {
      navigate('/Doctors');
    }
  }, [doctor, navigate]);

  if (!doctor) {
    return null;
  }

  // Mock verification function - in real app, this would call an API
  const verifyCard = async (formData) => {
    setIsVerifyingCard(true);
    setVerificationError('');
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Mock verification logic (replace with actual API call)
    if (verificationMethod === 'ayushman' && formData.ayushmanNumber?.length === 8) {
      setIsVerifyingCard(false);
      return true;
    } else if (verificationMethod === 'aadhar' && formData.aadharNumber?.length === 12) {
      setIsVerifyingCard(false);
      return true;
    }
    
    setVerificationError(`Invalid ${verificationMethod === 'ayushman' ? 'Ayushman Card' : 'Aadhar'} number`);
    setIsVerifyingCard(false);
    return false;
  };

  const handleBooking = async (formData) => {
    if (hasAyushmanCard) {
      const isVerified = await verifyCard(formData);
      if (!isVerified) {
        return;
      }
    }

    console.log('Booking data:', {
      doctor: doctor.name,
      date: selectedDate,
      slot: selectedSlot,
      type: consultationType,
      hasAyushmanCard,
      verificationMethod,
      ...formData
    });
    setIsDialogOpen(true);
  };

  const confirmBooking = () => {
    setBookingConfirmed(true);
    setIsDialogOpen(false);
  };

  const getConsultationFee = () => {
    if (hasAyushmanCard) {
      return 0;
    }
    return doctor.consultationFees[consultationType];
  };

  // Function to check if a slot is booked
  const isSlotBooked = (slot) => {
    const dateStr = format(selectedDate, 'yyyy-MM-dd');
    return doctor.bookings[dateStr]?.includes(slot);
  };

  // Function to get slot status class
  const getSlotStatusClass = (slot) => {
    if (isSlotBooked(slot)) {
      return 'bg-red-100 text-red-800 cursor-not-allowed opacity-60';
    }
    return selectedSlot === slot
      ? 'bg-blue-500 text-white'
      : 'bg-gray-100 hover:bg-gray-200 text-gray-800';
  };

  // Function to handle slot selection
  const handleSlotSelection = (slot) => {
    if (!isSlotBooked(slot)) {
      setSelectedSlot(slot);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Doctor Profile Header */}
      <div className="flex items-start gap-8 mb-8">
        <img
          src={doctor.link}
          alt={doctor.name}
          className="w-48 h-48 rounded-lg object-cover"
        />
        <div>
          <h1 className="text-3xl font-bold">{doctor.name}</h1>
          <p className="text-lg text-gray-600">{doctor.specialization} • {doctor.experience} experience</p>
          <div className="flex items-center mt-2">
            <div className="flex text-yellow-400">
              {'★'.repeat(Math.floor(doctor.stars))}
              {doctor.stars % 1 >= 0.5 && '★'}
              {'☆'.repeat(5 - Math.ceil(doctor.stars))}
            </div>
            <span className="ml-2 text-gray-600">({doctor.reviews} reviews)</span>
          </div>
          <p className="mt-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
              Available Online
            </span>
          </p>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column - Doctor Info */}
        <div className="md:col-span-1 space-y-6">
          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">About Doctor</h2>
            <p className="text-gray-600">{doctor.about}</p>
            
            <div className="mt-4">
              <h3 className="font-medium">Languages</h3>
              <p className="text-gray-600">{doctor.languages.join(', ')}</p>
            </div>

            <div className="mt-4">
              <h3 className="font-medium">Education</h3>
              <ul className="list-disc list-inside text-gray-600">
                {doctor.education.map((edu, index) => (
                  <li key={index}>{edu}</li>
                ))}
              </ul>
            </div>
          </section>

          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Consultation Fees</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Video Consultation</span>
                <span className="font-medium">₹{doctor.consultationFees.video}</span>
              </div>
              <div className="flex justify-between">
                <span>Audio Consultation</span>
                <span className="font-medium">₹{doctor.consultationFees.audio}</span>
              </div>
              <div className="flex justify-between">
                <span>In-Person Visit</span>
                <span className="font-medium">₹{doctor.consultationFees.inPerson}</span>
              </div>
              <div className="pt-2 mt-2 border-t">
                <p className="text-sm text-green-600 font-medium">Free consultation with valid Ayushman Card</p>
              </div>
            </div>
          </section>
        </div>

        {/* Center Column - Booking Form */}
        <div className="md:col-span-2">
          <form onSubmit={handleSubmit(handleBooking)} className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-6">Book Appointment</h2>

            {/* Date Selection */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Date
              </label>
              <input
                type="date"
                min={format(new Date(), 'yyyy-MM-dd')}
                value={format(selectedDate, 'yyyy-MM-dd')}
                onChange={(e) => setSelectedDate(new Date(e.target.value))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            {/* Time Slots */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Time Slot
              </label>
              <div className="grid grid-cols-3 gap-2">
                {MOCK_SLOTS.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    disabled={isSlotBooked(slot)}
                    onClick={() => handleSlotSelection(slot)}
                    className={`py-2 px-4 rounded-md text-sm font-medium transition-colors duration-200 ${getSlotStatusClass(slot)}`}
                  >
                    {slot}
                    {isSlotBooked(slot) && (
                      <span className="block text-xs">Booked</span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Legend */}
            <div className="mb-6">
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded bg-gray-100 mr-2"></div>
                  <span>Available</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded bg-blue-500 mr-2"></div>
                  <span>Selected</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded bg-red-100 mr-2"></div>
                  <span>Booked</span>
                </div>
              </div>
            </div>

            {/* Consultation Type */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Consultation Type
              </label>
              <div className="flex gap-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="video"
                    checked={consultationType === 'video'}
                    onChange={(e) => setConsultationType(e.target.value)}
                    className="mr-2"
                  />
                  Video {!hasAyushmanCard && `(₹${doctor.consultationFees.video})`}
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="audio"
                    checked={consultationType === 'audio'}
                    onChange={(e) => setConsultationType(e.target.value)}
                    className="mr-2"
                  />
                  Audio {!hasAyushmanCard && `(₹${doctor.consultationFees.audio})`}
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="in-person"
                    checked={consultationType === 'in-person'}
                    onChange={(e) => setConsultationType(e.target.value)}
                    className="mr-2"
                  />
                  In-person {!hasAyushmanCard && `(₹${doctor.consultationFees.inPerson})`}
                </label>
              </div>
            </div>

            {/* Ayushman Card Section */}
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={hasAyushmanCard}
                  onChange={(e) => {
                    setHasAyushmanCard(e.target.checked);
                    setVerificationMethod('');
                    setVerificationError('');
                  }}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm font-medium text-gray-700">I am eligible for free consultation</span>
              </label>

              {hasAyushmanCard && (
                <div className="mt-4 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Verification Method *
                    </label>
                    <select
                      value={verificationMethod}
                      onChange={(e) => {
                        setVerificationMethod(e.target.value);
                        setVerificationError('');
                      }}
                      className="w-full p-2 border rounded-md"
                    >
                      <option value="">Select verification method</option>
                      <option value="ayushman">Ayushman Card</option>
                      <option value="aadhar">Aadhar Card</option>
                    </select>
                  </div>

                  {verificationMethod === 'ayushman' && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Ayushman Card Number *
                      </label>
                      <input
                        {...register('ayushmanNumber', { 
                          required: true,
                          pattern: {
                            value: /^[0-9]{8}$/,
                            message: 'Please enter a valid 8-digit Ayushman number'
                          }
                        })}
                        className="w-full p-2 border rounded-md"
                        placeholder="Enter 8-digit number"
                      />
                      {errors.ayushmanNumber && (
                        <span className="text-red-500 text-sm">{errors.ayushmanNumber.message}</span>
                      )}
                    </div>
                  )}

                  {verificationMethod === 'aadhar' && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Aadhar Number *
                      </label>
                      <input
                        {...register('aadharNumber', {
                          required: true,
                          pattern: {
                            value: /^[0-9]{12}$/,
                            message: 'Please enter a valid 12-digit Aadhar number'
                          }
                        })}
                        className="w-full p-2 border rounded-md"
                        placeholder="Enter 12-digit number"
                      />
                      {errors.aadharNumber && (
                        <span className="text-red-500 text-sm">{errors.aadharNumber.message}</span>
                      )}
                    </div>
                  )}

                  {verificationError && (
                    <div className="flex items-center space-x-2 text-red-600">
                      <AlertCircle size={16} />
                      <span className="text-sm">{verificationError}</span>
                    </div>
                  )}

                  {isVerifyingCard && (
                    <div className="text-sm text-blue-600">
                      Verifying your details...
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Patient Information */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  {...register('fullName', { required: true })}
                  className="w-full p-2 border rounded-md"
                />
                {errors.fullName && (
                  <span className="text-red-500 text-sm">Name is required</span>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Age *
                  </label>
                  <input
                    type="number"
                    min="0"
                    onKeyDown={(e) => {
                      if (e.key === '-' || e.key === 'e' || e.key === '.') {
                        e.preventDefault();
                      }
                    }}
                    {...register('age', { 
                      required: 'Age is required',
                      min: {
                        value: 0,
                        message: 'Age cannot be negative'
                      },
                      max: {
                        value: 120,
                        message: 'Please enter a valid age'
                      },
                      valueAsNumber: true
                    })}
                    className="w-full p-2 border rounded-md"
                  />
                  {errors.age && (
                    <span className="text-red-500 text-sm">{errors.age.message}</span>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Gender *
                  </label>
                  <select
                    {...register('gender', { required: true })}
                    className="w-full p-2 border rounded-md"
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.gender && (
                    <span className="text-red-500 text-sm">Gender is required</span>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Reason for Visit *
                </label>
                <textarea
                  {...register('reason', { required: true })}
                  className="w-full p-2 border rounded-md"
                  rows="3"
                />
                {errors.reason && (
                  <span className="text-red-500 text-sm">Reason is required</span>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Upload Reports (optional)
                </label>
                <input
                  type="file"
                  accept=".pdf,.jpg,.png"
                  className="w-full p-2 border rounded-md"
                  multiple
                />
                <p className="text-sm text-gray-500 mt-1">
                  Supported formats: PDF, JPG, PNG (max 5MB each)
                </p>
              </div>
            </div>

            <button
              type="submit"
              disabled={!selectedSlot || (hasAyushmanCard && isVerifyingCard)}
              className={`w-full mt-6 py-3 px-4 rounded-md transition-colors ${
                selectedSlot && !isVerifyingCard
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              {isVerifyingCard ? 'Verifying...' : 'Book Appointment'}
            </button>
          </form>
        </div>
      </div>

      {/* Confirmation Modal */}
      <Modal isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
        <h3 className="text-lg font-medium mb-4">
          Confirm Appointment
        </h3>

        <div className="space-y-2">
          <p>
            You are about to book an appointment with {doctor.name} for{' '}
            {selectedDate && format(selectedDate, 'MMMM d, yyyy')} at{' '}
            {selectedSlot}.
          </p>
          <p>
            Consultation Type: {consultationType.charAt(0).toUpperCase() + consultationType.slice(1)}
          </p>
          <p>
            Fee: {hasAyushmanCard ? `Free (Verified with ${verificationMethod === 'ayushman' ? 'Ayushman Card' : 'Aadhar'})` : `₹${getConsultationFee()}`}
          </p>
        </div>

        <div className="mt-6 flex gap-4">
          <button
            onClick={confirmBooking}
            className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          >
            Confirm
          </button>
          <button
            onClick={() => setIsDialogOpen(false)}
            className="flex-1 border border-gray-300 py-2 px-4 rounded-md hover:bg-gray-50"
          >
            Cancel
          </button>
        </div>
      </Modal>

      {/* Success Message */}
      {bookingConfirmed && (
        <div className="fixed bottom-4 right-4 bg-green-100 border-l-4 border-green-500 text-green-700 p-4">
          <p className="font-medium">Appointment Booked Successfully!</p>
          <p className="text-sm">Check your email for confirmation details.</p>
        </div>
      )}
    </div>
  );
};

export default DoctorConsultation; 