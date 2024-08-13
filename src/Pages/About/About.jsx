import {
  FaArrowRightLong,
  FaTwitter,
  FaPinterest,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa6";
import { useEffect, useState } from "react";
// carusol 
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
// image and icon
import "@fortawesome/fontawesome-free/css/all.min.css";

import farmer1 from "../../assets/about-assets/image/farmer1.png";
import farmer2 from "../../assets/about-assets/image/farmer2.png";
import farmer2BG from "../../assets/about-assets/image/farmer2BG.png";
import farmer3 from "../../assets/about-assets/image/farmer3.png";
import leaf from "../../assets/about-assets/image/icon/leaf.png";
import box from "../../assets/about-assets/image/icon/box.png";
import bag from "../../assets/about-assets/image/icon/bag.png";
import truck from "../../assets/about-assets/image/icon/truck.png";
import star from "../../assets/about-assets/image/icon/star.png";
import headPhone from "../../assets/about-assets/image/icon/headPhone.png";
import check from "../../assets/about-assets/image/icon/check.png";

const About = () => {
  const [team, setTeam] = useState([]);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const response = await fetch("/team.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setTeam(data);
      } catch (error) {
        console.error("Error fetching the team data:", error);
      }
    };

    fetchTeamData();
  }, []);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch("/testimonial.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setTestimonials(data);
      } catch (error) {
        console.error("Error fetching testimonial data:", error);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <div>
      <h2 className="text-3xl font-bold text-center my-8">About Page</h2>
      <p className="text-center text-gray-500 mb-8">Banner</p>

      {/* Hero Section 1 */}
      <section className="container mx-auto my-20 px-4">
        <div className="flex flex-col md:flex-row">
          <div className="md:mr-10 items-center justify-center my-auto w-full md:w-1/2">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              100% Trusted <br /> Organic Food Store
            </h2>
            <p className="text-base md:text-xl text-gray-500">
              Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi,
              laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit.
              Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan.
              Donec a eros non massa vulputate ornare. Vivamus ornare commodo
              ante, at commodo felis congue vitae.
            </p>
          </div>
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <img src={farmer1} alt="farmer" className="w-full h-auto" />
          </div>
        </div>
      </section>

      {/* Hero Section 2 */}
      <section className="flex flex-col md:flex-row px-4">
        <div className="w-full md:w-1/2">
          <img src={farmer2} alt="" className="w-full h-auto" />
        </div>

        <div className="w-full md:w-1/2 items-center justify-center my-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            100% Trusted <br /> Organic Food Store
          </h2>
          <p className="text-base md:text-xl">
            Pellentesque a ante vulputate leo porttitor luctus sed eget eros.
            Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a a
            mi. Nulla eu eros consequat tortor tincidunt feugiat.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-6">
            {/* Cart 1 Leaf */}
            <div className="flex gap-4">
              <img src={leaf} alt="" className="w-8 h-8" />
              <div>
                <h3 className="text-base md:text-lg font-bold text-black mb-2">
                  100% Organic food
                </h3>
                <p>100% healthy & Fresh food.</p>
              </div>
            </div>
            {/* Cart 2 Headset */}
            <div className="flex gap-4">
              <img src={headPhone} alt="" className="w-8 h-8" />
              <div>
                <h3 className="text-base md:text-lg font-bold text-black mb-2">
                  Great Support 24/7
                </h3>
                <p>Instant access to Contact</p>
              </div>
            </div>
            {/* Cart 3 Star */}
            <div className="flex gap-4">
              <img src={star} alt="" className="w-8 h-8" />
              <div>
                <h3 className="text-base md:text-lg font-bold text-black mb-2">
                  Customer Feedback
                </h3>
                <p>Our happy customer</p>
              </div>
            </div>
            {/* Cart 4 Bag */}
            <div className="flex gap-4">
              <img src={bag} alt="" className="w-8 h-8" />
              <div>
                <h3 className="text-base md:text-lg font-bold text-black mb-2">
                  100% Secure Payment
                </h3>
                <p>We ensure your money is safe</p>
              </div>
            </div>
            {/* Cart 5 Truck */}
            <div className="flex gap-4">
              <img src={truck} alt="" className="w-8 h-8" />
              <div>
                <h3 className="text-base md:text-lg font-bold text-black mb-2">
                  Free Shipping
                </h3>
                <p>Free shipping with discount</p>
              </div>
            </div>
            {/* Cart 6 Box */}
            <div className="flex gap-4">
              <img src={box} alt="" className="w-8 h-8" />
              <div>
                <h3 className="text-base md:text-lg font-bold text-black mb-2">
                  100% Organic food
                </h3>
                <p>100% healthy & Fresh food.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section 3 */}
      <section className="container mx-auto mt-20 px-4">
        <div className="flex flex-col md:flex-row">
          <div className="md:mr-10 items-center my-auto w-full md:w-1/2">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              We Delivered, You <br /> Enjoy Your Order.
            </h2>
            <p className="text-base md:text-xl text-gray-500">
              Ut suscipit egestas suscipit. Sed posuere pellentesque nunc,
              ultrices consectetur velit dapibus eu. Mauris sollicitudin
              dignissim diam, ac mattis eros accumsan rhoncus. Curabitur auctor
              bibendum nunc eget elementum.
            </p>
            <div className="my-8">
              <div className="flex items-center">
                <img src={check} alt="" className="w-5 h-5" />
                <p className="ml-2">Sed in metus pellentesque.</p>
              </div>
              <div className="flex items-center my-1">
                <img src={check} alt="" className="w-5 h-5" />
                <p className="ml-2">
                  Fusce et ex commodo, aliquam nulla efficitur, tempus lorem.
                </p>
              </div>
              <div className="flex items-center">
                <img src={check} alt="" className="w-5 h-5" />
                <p className="ml-2">Maecenas ut nunc fringilla erat varius.</p>
              </div>
            </div>
            <button className="btn rounded-3xl px-10 bg-green-600 text-white flex items-center">
              Shop Now <FaArrowRightLong className="ml-2" />
            </button>
          </div>
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <img src={farmer3} alt="" className="w-full h-auto" />
          </div>
        </div>
      </section>

      {/* Our Awesome Team */}
      <section className="mx-auto px-4">
        <div className="mx-auto w-fit justify-center items-center">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
            Our Awesome Team
          </h2>
          <p className="text-xs md:text-sm text-gray-500 text-center mb-8">
            Pellentesque a ante vulputate leo porttitor luctus sed eget eros.
            Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a a
            mi.
          </p>
        </div>

        {/* Slider */}
        <div className="w-full">
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[Navigation, Pagination]}
            className="mySwiper"
          >
            {team.map((member, index) => (
              <SwiperSlide
                key={index}
                className="flex flex-col items-center p-4"
                style={{ width: "auto", height: "auto" }}
              >
                <div className="relative group w-full h-72 rounded-lg overflow-hidden mb-4">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
                    <div className="flex space-x-4">
                      {member.social_links.twitter && (
                        <a
                          href={member.social_links.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-blue-500 transition"
                          aria-label="Twitter"
                        >
                          <FaTwitter size={24} />
                        </a>
                      )}
                      {member.social_links.pinterest && (
                        <a
                          href={member.social_links.pinterest}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-red-500 transition"
                          aria-label="Pinterest"
                        >
                          <FaPinterest size={24} />
                        </a>
                      )}
                      {member.social_links.instagram && (
                        <a
                          href={member.social_links.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-pink-500 transition"
                          aria-label="Instagram"
                        >
                          <FaInstagram size={24} />
                        </a>
                      )}
                      {member.social_links.facebook && (
                        <a
                          href={member.social_links.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-blue-700 transition"
                          aria-label="Facebook"
                        >
                          <FaFacebook size={24} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-gray-500">{member.position}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Client Testimonail */}
      <section>
        {testimonials.length > 0 && (
          <section className="container mx-auto px-4 mt-20">
            <div className="mx-auto w-fit justify-center items-center">
              <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
                Client Testimonials
              </h2>
              <p className="text-xs md:text-sm text-gray-500 text-center mb-8">
                See what our clients are saying about us
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex flex-col items-center p-4">
                  <div className="relative group w-14 h-14 rounded-full overflow-hidden mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                  <div className="flex mb-2">
                    {[...Array(5)].map((star, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${
                          i < testimonial.rating
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-label={
                          i < testimonial.rating ? "Star filled" : "Star empty"
                        }
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.847 5.674h5.964c.969 0 1.371 1.24.588 1.81l-4.821 3.501 1.847 5.674c.3.921-.755 1.688-1.538 1.118L10 15.347l-4.821 3.501c-.783.57-1.838-.197-1.538-1.118l1.847-5.674-4.821-3.501c-.783-.57-.38-1.81.588-1.81h5.964L9.049 2.927z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-500 text-center">
                    {testimonial.testimonial}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}
      </section>
    </div>
  );
};

export default About;
