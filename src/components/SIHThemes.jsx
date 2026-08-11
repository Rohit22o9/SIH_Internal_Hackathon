import React from 'react';
import { 
  Cpu, 
  Activity, 
  Rocket, 
  Landmark, 
  HeartPulse, 
  Sprout, 
  Car, 
  Truck, 
  Bot, 
  Leaf, 
  Compass, 
  Sun, 
  GraduationCap, 
  ShieldAlert, 
  Gamepad2, 
  Wallet,
  Layers
} from 'lucide-react';

export const SIHThemes = () => {
  const themes = [
    {
      title: "SMART AUTOMATION",
      desc: "Ideas focused on the intelligent use of resources for transforming and advancements of technology with combining the artificial intelligence to explore more various sources and get valuable insights.",
      icon: Cpu,
      color: "#0284C7",
      bgColor: "#E0F2FE"
    },
    {
      title: "FITNESS & SPORTS",
      desc: "Ideas that can boost fitness activities and assist in keeping fit.",
      icon: Activity,
      color: "#9333EA",
      bgColor: "#F3E8FF"
    },
    {
      title: "SPACE TECHNOLOGY",
      desc: "For use in travel or activities beyond Earth's atmosphere, for purposes such as spaceflight or space exploration.",
      icon: Rocket,
      color: "#2563EB",
      bgColor: "#DBEAFE"
    },
    {
      title: "HERITAGE & CULTURE",
      desc: "Ideas that showcase the rich cultural heritage and traditions of India.",
      icon: Landmark,
      color: "#D97706",
      bgColor: "#FEF3C7"
    },
    {
      title: "MEDTECH/BIOTECH/HEALTHTECH",
      desc: "Cutting-edge technology in these sectors continues to be in demand. Recent shifts in healthcare trends, growing populations also present an array of opportunities for innovation.",
      icon: HeartPulse,
      color: "#0D9488",
      bgColor: "#CCFBF1"
    },
    {
      title: "AGRICULTURE, FOODTECH & RURAL DEVELOPMENT",
      desc: "Developing solutions, keeping in mind the need to enhance the primary sector of India - Agriculture and to manage and process our agriculture produce.",
      icon: Sprout,
      color: "#16A34A",
      bgColor: "#DCFCE7"
    },
    {
      title: "SMART VEHICLES",
      desc: "Creating intelligent devices to improve commutation sector.",
      icon: Car,
      color: "#EA580C",
      bgColor: "#FFEDD5"
    },
    {
      title: "TRANSPORTATION & LOGISTICS",
      desc: "Submit your ideas to address the growing pressures on the city's resources, transport networks, and logistic infrastructure.",
      icon: Truck,
      color: "#059669",
      bgColor: "#D1FAE5"
    },
    {
      title: "ROBOTICS AND DRONES",
      desc: "There is a need to design drones and robots that can solve some of the pressing challenges of India such as handling medical emergencies, search and rescue operations, etc.",
      icon: Bot,
      color: "#0284C7",
      bgColor: "#E0F2FE"
    },
    {
      title: "CLEAN & GREEN TECHNOLOGY",
      desc: "Solutions could be in the form of waste segregation, disposal, and improve sanitization system.",
      icon: Leaf,
      color: "#15803D",
      bgColor: "#DCFCE7"
    },
    {
      title: "TOURISM",
      desc: "A solution/idea that can boost the current situation of the tourism industries including hotels, travel and others.",
      icon: Compass,
      color: "#4F46E5",
      bgColor: "#EEF2FF"
    },
    {
      title: "RENEWABLE/ SUSTAINABLE ENERGY",
      desc: "Innovative ideas that help manage and generate renewable /sustainable sources more efficiently.",
      icon: Sun,
      color: "#D97706",
      bgColor: "#FEF3C7"
    },
    {
      title: "SMART EDUCATION",
      desc: "Smart education,a concept that describes learning in digital age. It enables learners to learn more effectively, efficiently, flexibly and comfortably.",
      icon: GraduationCap,
      color: "#0284C7",
      bgColor: "#E0F2FE"
    },
    {
      title: "DISASTER MANAGEMENT",
      desc: "Disaster management includes ideas related to risk mitigation, Planning and management before, after or during a disaster.",
      icon: ShieldAlert,
      color: "#DC2626",
      bgColor: "#FEE2E2"
    },
    {
      title: "GAMES & TOYS",
      desc: "Challenge your creative mind to conceptualize and develop unique toys and games based on our civilization, history, and culture etc.",
      icon: Gamepad2,
      color: "#7C3AED",
      bgColor: "#EDE9FE"
    },
    {
      title: "FINTECH",
      desc: "Challenges related to the financial services.",
      icon: Wallet,
      color: "#0D9488",
      bgColor: "#CCFBF1"
    },
    {
      title: "MISCELLANEOUS",
      desc: "Technology ideas in tertiary sectors like Hospitality, Entertainment and Retail.",
      icon: Layers,
      color: "#F56A00",
      bgColor: "#FFF3E0"
    }
  ];

  return (
    <section id="themes" style={{ padding: '5rem 1.5rem', background: '#FFFDF9', borderBottom: '1px solid #E5E5E5' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="sih-badge sih-badge-orange" style={{ marginBottom: '0.5rem' }}>
            SIH 2026 THEMATIC DOMAINS
          </span>
          <h2 className="section-heading-navy" style={{ fontSize: '2.2rem', marginTop: '0.4rem' }}>
            HACKATHON <span style={{ color: '#F56A00' }}>THEMES</span>
          </h2>
          <div style={{ width: '80px', height: '3.5px', background: '#F56A00', margin: '0.6rem auto 1.2rem' }} />
          <p style={{ color: '#555555', maxWidth: '750px', margin: '0 auto', fontSize: '1.02rem', lineHeight: 1.6 }}>
            Select your team's project theme from the official Smart India Hackathon problem statement categories below.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
          gap: '1.75rem'
        }}>
          {themes.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                style={{
                  background: '#FFFDF6',
                  border: '1.5px solid #F6E5C9',
                  borderRadius: '12px',
                  padding: '2.25rem 1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  boxShadow: '0 4px 14px rgba(0, 0, 0, 0.03)',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 12px 28px rgba(245, 106, 0, 0.12)';
                  e.currentTarget.style.borderColor = '#F56A00';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 14px rgba(0, 0, 0, 0.03)';
                  e.currentTarget.style.borderColor = '#F6E5C9';
                }}
              >
                {/* Circular Icon Holder */}
                <div style={{
                  width: '84px',
                  height: '84px',
                  borderRadius: '50%',
                  background: item.bgColor,
                  border: `2px solid ${item.color}40`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                  boxShadow: `0 4px 12px ${item.color}20`
                }}>
                  <IconComp size={38} color={item.color} />
                </div>

                {/* Title */}
                <h3 style={{
                  fontSize: '1.12rem',
                  fontWeight: 800,
                  color: '#071F5B',
                  letterSpacing: '0.01em',
                  marginBottom: '0.85rem',
                  lineHeight: 1.35,
                  minHeight: '2.7rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {item.title}
                </h3>

                {/* Description */}
                <p style={{
                  color: '#444444',
                  fontSize: '0.9rem',
                  lineHeight: 1.6,
                  margin: 0
                }}>
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
