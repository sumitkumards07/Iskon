export interface LegalContent {
  title: string;
  lastUpdated: string;
  sections: {
    heading?: string;
    content: string | string[];
  }[];
}

export const legalData: Record<string, LegalContent> = {
  'privacy-policy': {
    title: "Privacy Policy",
    lastUpdated: "March 14, 2026",
    sections: [
      {
        heading: "Introduction",
        content: "At Vrindavan Serenity Luxury Hotel, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard the data you provide to us through our website and during your stay."
      },
      {
        heading: "Information We Collect",
        content: [
          "Personal details (name, email, phone number) provided during booking or enquiry.",
          "Payment information for reservation processing.",
          "Check-in/out dates and room preferences.",
          "Website usage data collected via cookies and analytics."
        ]
      },
      {
        heading: "How We Use Your Information",
        content: "We use your data primarily to process bookings, communicate stay details via WhatsApp/Email, improve our hospitality services, and ensure a personalized spiritual experience for all our guests."
      }
    ]
  },
  'terms-and-conditions': {
    title: "Terms & Conditions",
    lastUpdated: "March 14, 2026",
    sections: [
      {
        heading: "Booking & Reservations",
        content: "All reservations are subject to availability. A valid identity proof (Aadhar/Passport) is mandatory for all guests at the time of check-in as per government regulations."
      },
      {
        heading: "Check-in/Check-out",
        content: [
          "Standard Check-in time: 12:00 PM.",
          "Standard Check-out time: 10:00 AM.",
          "Early check-in or late check-out is subject to availability and may incur additional charges."
        ]
      },
      {
        heading: "Spiritual Conduct",
        content: "As a property located in the sacred town of Vrindavan, we maintain a strictly vegetarian and non-alcoholic environment. Guests are requested to respect the spiritual sanctity of the premises."
      }
    ]
  },
  'refund-policy': {
    title: "Refund Policy",
    lastUpdated: "March 14, 2026",
    sections: [
      {
        heading: "Cancellation Terms",
        content: [
          "Cancellations made 7 days prior to arrival: 100% refund.",
          "Cancellations made 3-7 days prior to arrival: 50% refund.",
          "Cancellations made within 48 hours of arrival: No refund."
        ]
      },
      {
        heading: "No-Show Policy",
        content: "In case of a no-show, the total amount for the reservation will be charged, and no refund will be initiated."
      },
      {
        heading: "Refund Processing",
        content: "Approved refunds will be processed back to the original payment method within 7-10 working days."
      }
    ]
  },
  'disclaimer': {
    title: "Disclaimer",
    lastUpdated: "March 14, 2026",
    sections: [
      {
        heading: "General Information",
        content: "The information provided on our website is for general informational purposes only. While we strive for accuracy, we make no guarantees regarding the completeness or timeliness of the information."
      },
      {
        heading: "Service Availability",
        content: "Hotel amenities and services (like 24/7 hot water or specific view suites) are subject to maintenance and operational conditions."
      },
      {
        heading: "Monkey Menace",
        content: "Vrindavan is known for its playful local monkeys. The hotel is not responsible for any personal belongings lost or damaged by monkeys outside the hotel premises."
      }
    ]
  }
};
