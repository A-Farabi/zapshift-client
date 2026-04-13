import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './Customerreviews.css';

import customerRewiewPng from "../../assets/Mislenious/customer-top.png"

const reviews = [
  {
    id: 1,
    text: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
    name: "Rasel Ahamed",
    role: "CTO",
    avatar: "RA",
    color: "#b0bec5",
  },
  {
    id: 2,
    text: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
    name: "Awlad Hossin",
    role: "Senior Product Designer",
    avatar: "AH",
    color: "#26a69a",
  },
  {
    id: 3,
    text: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
    name: "Nasir Uddin",
    role: "CEO",
    avatar: "NU",
    color: "#b0bec5",
  },
  {
    id: 4,
    text: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
    name: "Sara Malik",
    role: "Product Manager",
    avatar: "SM",
    color: "#b0bec5",
  },
  {
    id: 5,
    text: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
    name: "James Carter",
    role: "UX Lead",
    avatar: "JC",
    color: "#b0bec5",
  },
];

export default function CustomerReviews() {
  return (
    <section className="reviews-section">
      {/* Header */}
      <div className="text-center mb-14 flex-row">
        <div className="justify-center flex mb-3">
          <img src={customerRewiewPng} alt="customer" />
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-teal-900 mb-4">
          What Our Customers Are Saying
        </h2>
        <p className="text-gray-500 text-sm max-w-md mx-auto leading-relaxed">
          Real experiences from merchants and customers who trust us with their
          deliveries every single day.
        </p>
      </div>
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={24}
        pagination={{ clickable: true }}
        navigation={{
          prevEl: ".swiper-btn-prev",
          nextEl: ".swiper-btn-next",
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="reviews-swiper"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id} className="review-slide">
            {({ isActive }) => (
              <div className={`review-card ${isActive ? "active" : "inactive"}`}>
                <div className="quote-icon">"</div>
                <p className="review-text">{review.text}</p>
                <div className="review-divider" />
                <div className="reviewer">
                  <div
                    className="avatar"
                    style={{ backgroundColor: review.color }}
                  >
                    {review.avatar}
                  </div>
                  <div className="reviewer-info">
                    <span className="reviewer-name">{review.name}</span>
                    <span className="reviewer-role">{review.role}</span>
                  </div>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="swiper-controls">
        <button className="swiper-btn swiper-btn-prev">&#8592;</button>
        <button className="swiper-btn swiper-btn-next swiper-btn-active">
          &#8594;
        </button>
      </div>
    </section>
  );
}