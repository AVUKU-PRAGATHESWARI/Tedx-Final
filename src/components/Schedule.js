import React from 'react';
import { FaMusic, FaUserAlt, FaCoffee } from 'react-icons/fa';

const Schedule = () => {
  const scheduleItems = [
    { title: "Welcome & Opening Remarks", time: "9:00 AM - 9:15 AM", icon: <FaUserAlt /> },
    { title: "V.V. Lakshmi Narayana", time: "9:15 AM - 9:45 AM", icon: <FaUserAlt /> },
    { title: "Jahnavi Dangeti", time: "9:45 AM - 10:15 AM", icon: <FaUserAlt /> },
    { title: "Vidhya Sagar", time: "10:15 AM - 10:45 AM", icon: <FaUserAlt /> },
    { title: "Break", time: "10:45 AM - 11:00 AM", icon: <FaCoffee /> },
    { title: "Abdus Samad", time: "11:00 AM - 11:30 AM", icon: <FaUserAlt /> },
    { title: "Punit Chawla", time: "11:30 AM - 12:00 PM", icon: <FaUserAlt /> },
    { title: "Lunch Break", time: "12:00 PM - 1:00 PM", icon: <FaCoffee /> },
    { title: "Priyanka Gandhavalla", time: "1:00 PM - 1:30 PM", icon: <FaUserAlt /> },
    { title: "Closing Remarks", time: "1:30 PM - 2:00 PM", icon: <FaUserAlt /> },
    { title: "Music Concert", time: "2:00 PM - 3:00 PM", icon: <FaMusic /> },
  ];

  return (
    <section className="bg-black text-white py-12 p-3 relative">
      <div className="container mx-auto flex flex-col justify-center h-full">
        <h2 className="text-4xl font-bold text-red-600 mb-8 text-center">TEDx Event Schedule</h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="timeline-line absolute w-1 bg-red-500 h-full top-0 left-1/2 transform -translate-x-1/2 z-0"></div>

          {/* Timeline Items */}
          <ul className="relative z-10">
            {scheduleItems.map((item, index) => (
              <li key={index} className={`timeline-item mb-8 flex justify-between items-center w-full`}>
                {index % 2 === 0 ? (
                  <>
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-5/12 border border-white p-4 rounded-lg shadow-lg text-center transition-transform duration-300 hover:scale-105 hover:bg-red-900">
                      <div className="text-2xl">{item.icon}</div>
                      <h3 className="font-bold text-lg mt-2">{item.title}</h3>
                      <p className="mt-1 text-sm">{item.time}</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="order-1 w-5/12 border border-red-500 p-4 rounded-lg shadow-lg text-center transition-transform duration-300 hover:scale-105 hover:bg-red-900">
                      <div className="text-2xl">{item.icon}</div>
                      <h3 className="font-bold text-lg mt-2">{item.title}</h3>
                      <p className="mt-1 text-sm">{item.time}</p>
                    </div>
                    <div className="order-1 w-5/12"></div>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
