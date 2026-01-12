"use client";

interface ClientLogo {
  id: number;
  name: string;
  src: string;
}

const clients: ClientLogo[] = [
  { id: 1, name: "Airbus", src: "/clients/airbus-logo.webp" },
  { id: 2, name: "Port De Djibouti", src: "/clients/34.webp" },
  { id: 3, name: "Ain Dubai", src: "/clients/Ain_dubai.webp" },
  { id: 4, name: "Carnaval", src: "/clients/carnaval.webp" },
  { id: 5, name: "Dubai Holding", src: "/clients/Dubai_holding.webp" },
  { id: 6, name: "Doraleh Port", src: "/clients/35.webp" },
  { id: 7, name: "Toshiba", src: "/clients/toshiba.webp" },
  { id: 8, name: "Johnson Controls", src: "/clients/36.webp" },
  { id: 9, name: "Franke", src: "/clients/37.webp" },
  { id: 10, name: "EPPCO", src: "/clients/1.webp" },
  { id: 11, name: "Abu Dhabi Sports", src: "/clients/2.webp" },
  { id: 12, name: "Umm Al Quwain", src: "/clients/3.webp" },
  { id: 13, name: "Global Village", src: "/clients/4.webp" },
  { id: 14, name: "ARN", src: "/clients/arn.webp" },
  { id: 15, name: "ENOC", src: "/clients/enoc.webp" },
  {
    id: 16,
    name: "Government Ajman",
    src: "/clients/government_of_ajman.webp",
  },
  { id: 17, name: "Hatta", src: "/clients/hatta.webp" },
  { id: 18, name: "Hutchinson Ports", src: "/clients/hutchinson_sports.webp" },
  { id: 19, name: "Horizon Terminals", src: "/clients/horizon_terminals.webp" },
  { id: 20, name: "Al-Rashed", src: "/clients/alrashed.webp" },
  { id: 21, name: "LDPL Middle East", src: "/clients/LDPL_Middle_East.webp" },
  { id: 22, name: "Seal for Life", src: "/clients/Seal_for_life.webp" },
  { id: 23, name: "Emirates National", src: "/clients/emirates_national.webp" },
  { id: 24, name: "EEE Group", src: "/clients/15.webp" },
  { id: 25, name: "Deyaar FM", src: "/clients/13.webp" },
  { id: 26, name: "Fujairah Terminal", src: "/clients/8.webp" },
  { id: 27, name: "Vopak Horizon", src: "/clients/9.webp" },
  { id: 28, name: "Al Jaber Group", src: "/clients/30.webp" },
  { id: 29, name: "Dedienne Aerospace", src: "/clients/6.webp" },
  { id: 30, name: "Done Events", src: "/clients/doneevents.webp" },
  { id: 31, name: "Grundfos", src: "/clients/grundfos.webp" },
  { id: 32, name: "Ayezan Logistics", src: "/clients/28.webp" },
  { id: 33, name: "Hira Industries", src: "/clients/33.webp" },
  { id: 34, name: "Falcon Metals", src: "/clients/20.webp" },
  { id: 35, name: "Mahindra Emirates", src: "/clients/16.webp" },
  { id: 36, name: "Laticrete ME", src: "/clients/26.webp" },
  { id: 37, name: "Rig Oil Services", src: "/clients/27.webp" },
  { id: 38, name: "Gulf Extrusion", src: "/clients/12.webp" },
];

export default function ClientsCarousel() {
  return (
    <section
      className="w-full px-4 sm:px-6 lg:px-8 py-20"
      style={{ backgroundColor: "#f9fafb" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Trusted Clients
          </h2>
          <p className="text-xl text-gray-600">
            We've helped hundreds of organizations across the globe achieve ISO
            certification
          </p>
        </div>

        <style>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          
          .clients-scroll-container {
            overflow: hidden;
            position: relative;
          }
          
          .clients-scroll-track {
            display: flex;
            gap: 2rem;
            animation: scroll 40s linear infinite;
            width: max-content;
          }
          
          .clients-scroll-container:hover .clients-scroll-track {
            animation-play-state: paused;
          }
          
          .client-item {
            shrink-0;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 150px;
            height: 120px;
            background: white;
            border-radius: 0.5rem;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
            transition: box-shadow 0.3s;
          }
          
          .client-item:hover {
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          }
          
          .client-item img {
            max-width: 80%;
            max-height: 80%;
            object-fit: contain;
          }
        `}</style>

        <div className="clients-scroll-container">
          <div className="clients-scroll-track">
            {/* First set of clients */}
            {clients.map((client) => (
              <div key={`${client.id}-1`} className="client-item">
                <img
                  src={client.src}
                  alt={client.name}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%2280%22%3E%3Crect fill=%22%23f0f0f0%22 width=%22100%22 height=%2280%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-size=%2212%22 fill=%22%23999%22 text-anchor=%22middle%22 dy=%22.3em%22%3E" +
                      client.name.split(" ")[0] +
                      "%3C/text%3E%3C/svg%3E";
                  }}
                />
              </div>
            ))}
            {/* Duplicate set for infinite loop effect */}
            {clients.map((client) => (
              <div key={`${client.id}-2`} className="client-item">
                <img
                  src={client.src}
                  alt={client.name}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%2280%22%3E%3Crect fill=%22%23f0f0f0%22 width=%22100%22 height=%2280%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-size=%2212%22 fill=%22%23999%22 text-anchor=%22middle%22 dy=%22.3em%22%3E" +
                      client.name.split(" ")[0] +
                      "%3C/text%3E%3C/svg%3E";
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
