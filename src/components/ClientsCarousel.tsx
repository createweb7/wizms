"use client";

const clients = [
  { id: 1, name: "Dubai Airports", src: "/clients/1-Dubai-Airports.webp" },
  { id: 2, name: "Salik", src: "/clients/2-Salik.webp" },
  { id: 3, name: "Airbus", src: "/clients/3-Airbus.webp" },
  { id: 4, name: "Global Village", src: "/clients/4-Global-Village.webp" },
  { id: 5, name: "Enoc", src: "/clients/5-Enoc.webp" },
  { id: 6, name: "EPPCO", src: "/clients/6-EPPCO.webp" },
  { id: 7, name: "Ain Dubai", src: "/clients/7-Ain-Dubai.webp" },
  { id: 8, name: "Carnaval", src: "/clients/8-Carnaval.webp" },
  { id: 9, name: "Dubai Holding Entertainment", src: "/clients/9-Dubai-Holding-Entertainment.webp" },
  { id: 10, name: "Dubai Holding Real Estate", src: "/clients/10-Dubai-Holding-Real-Estate.webp" },
  { id: 11, name: "AtkinsRealis", src: "/clients/11-AtkinsRealis.webp" },
  { id: 12, name: "Henkel", src: "/clients/12-Henkel.webp" },
  { id: 13, name: "Terberg", src: "/clients/13-Terberg.webp" },
  { id: 14, name: "Laticrete", src: "/clients/14-Laticrete.webp" },
  { id: 15, name: "Ajman Port", src: "/clients/15-Ajman-Port.webp" },
  { id: 16, name: "Arabian Radio Network", src: "/clients/16-Arabian-Radio-Network.webp" },
  { id: 17, name: "Green Planet", src: "/clients/17-Green-Planet.webp" },
  { id: 18, name: "Roxy Cinemas", src: "/clients/18-Roxy-Cinemas.webp" },
  { id: 19, name: "Motion Gate", src: "/clients/19-Motion-Gate.webp" },
  { id: 20, name: "Jetex", src: "/clients/20-Jetex.webp" },
  { id: 21, name: "Fujairah Oil Terminal", src: "/clients/21-Fujairah-Oil-Terminal.webp" },
  { id: 22, name: "Ecomar", src: "/clients/22-Ecomar.webp" },
  { id: 23, name: "Emirates Electrical Engineering", src: "/clients/23-Emirates-Electrical-Engineering.webp" },
  { id: 24, name: "Vopak", src: "/clients/24-Vopak.webp" },
  { id: 25, name: "Dedienne Aerospace", src: "/clients/25-Dedienne-Aerospace.webp" },
  { id: 26, name: "B3 International", src: "/clients/26-B3-International.webp" },
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
            We've helped hundreds of organizations across the globe achieve ISO certification
          </p>
        </div>

        <style>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
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
            flex-shrink: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 150px;
            height: 120px;
            background: white;
            border-radius: 0.5rem;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
            transition: box-shadow 0.3s;
            padding: 12px;
          }
          .client-item:hover {
            box-shadow: 0 10px 25px rgba(0,0,0,0.1);
          }
          .client-item img {
            max-width: 100%;
            max-height: 100%;
            object-fit: contain;
          }
        `}</style>

        <div className="clients-scroll-container">
          <div className="clients-scroll-track">
            {/* First set */}
            {clients.map((client) => (
              <div key={`${client.id}-1`} className="client-item">
                <img src={client.src} alt={client.name} width={120} height={96} />
              </div>
            ))}
            {/* Duplicate for infinite loop */}
            {clients.map((client) => (
              <div key={`${client.id}-2`} className="client-item">
                <img src={client.src} alt={client.name} width={120} height={96} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
