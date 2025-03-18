import React from "react";
import Header from "../Component/Home/Header";
import Banner from "../Component/Home/Banner";

export default function HomePage() {
  return (
    <div style={{ margin: "0 auto" }}>
      <div>
        {/* Header */}
        <Header />

        {/* Hero Section */}
        <Banner />

        {/* Featured Hotels */}
        <section className="container mx-auto py-16">
          <h3 className="text-2xl font-bold mb-8">
            Featured Hotels in <span className="text-orange-500">Ha Noi</span>
          </h3>
          <div className="grid grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="border p-4 shadow-md">
                <img
                  src={`/path-to-hotel-${item}.jpg`}
                  alt="Hotel"
                  className="w-full h-48 object-cover mb-4"
                />
                <h4 className="text-lg font-bold">Hotel Name {item}</h4>
                <p className="text-gray-600">Location: Cairo</p>
              </div>
            ))}
          </div>
        </section>
        <section className="container mx-auto py-16">
          <h3 className="text-2xl font-bold mb-8">
            Featured Hotels in{" "}
            <span className="text-orange-500">Ho Chi Minh City</span>
          </h3>
          <div className="grid grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="border p-4 shadow-md">
                <img
                  src={`/path-to-hotel-${item}.jpg`}
                  alt="Hotel"
                  className="w-full h-48 object-cover mb-4"
                />
                <h4 className="text-lg font-bold">Hotel Name {item}</h4>
                <p className="text-gray-600">Location: Cairo</p>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto text-center">
            <h3 className="text-2xl font-bold mb-8">
              What <span className="text-orange-500">Services</span> We{" "}
              <span className="text-orange-500">Give</span> You!
            </h3>
            <div className="grid grid-cols-3 gap-6">
              {[
                "Free WIFI",
                "Easy Booking",
                "Restaurants",
                "Swimming Pool",
                "Beauty & Health",
                "Support Team",
              ].map((service, index) => (
                <div key={index} className="p-6 bg-white shadow-md rounded-lg">
                  <h4 className="font-bold text-orange-500">{service}</h4>
                  <p className="text-gray-600 mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis porta eros lacus.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Best Rooms */}
        <section className="container mx-auto py-16">
          <h3 className="text-2xl font-bold mb-8">
            Our <span className="text-orange-500">Best</span> Rooms!
          </h3>
          <div className="grid grid-cols-4 gap-6">
            <div className="col-span-1 bg-orange-500 text-white p-6 rounded">
              <h4 className="text-xl font-bold mb-2">Save 10% Off</h4>
              <p>Book your room now and save 10% on your next trip!</p>
              <button className="mt-4 bg-white text-orange-500 px-4 py-2 rounded">
                Book Now
              </button>
            </div>
            {[1, 2, 3].map((item) => (
              <img
                key={item}
                src={`/path-to-room-${item}.jpg`}
                alt="Room"
                className="w-full h-48 object-cover rounded"
              />
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-8 bg-orange-500 text-white">
          <h4 className="text-xl font-bold">Save Time & Save Money</h4>
          <button className="mt-4 bg-black px-6 py-2 rounded">
            Subscribe Now
          </button>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto grid grid-cols-4 gap-6">
            <div>
              <h5 className="font-bold mb-4">About Us</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div>
              <h5 className="font-bold mb-4">Offers</h5>
              <ul>
                <li>
                  <a href="#" className="hover:underline">
                    Payment
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Promotion
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Tour
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4">Company</h5>
              <ul>
                <li>
                  <a href="#" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4">City</h5>
              <ul>
                <li>Cairo</li>
                <li>Alexandria</li>
                <li>Giza</li>
              </ul>
            </div>
          </div>
          <p className="text-center mt-8">
            &copy; 2025 HBooking. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}
