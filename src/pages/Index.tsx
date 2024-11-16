import Navbar from '../components/Navbar';
import NFTCard from '../components/NFTCard';

const artworks = [
  {
    image: "https://images.unsplash.com/photo-1634986666676-ec8fd927c23d",
    title: "Frames of Mind",
    price: { eth: 1.8, usd: 5034 }
  },
  {
    image: "https://images.unsplash.com/photo-1633537066008-1a51744c0f86",
    title: "Form of Time",
    price: { eth: 1.5, usd: 4195 }
  },
  {
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e",
    title: "Quantum Chains",
    price: { eth: 1.9, usd: 5470 }
  },
  {
    image: "https://images.unsplash.com/photo-1638803040283-7a5ffd48dad5",
    title: "Techno Angel",
    price: { eth: 1.7, usd: 4754 }
  }
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-display text-5xl md:text-7xl leading-tight mb-6">
                Extraordinary<br />
                rare digital NFT
              </h1>
              <p className="text-gray-400 mb-8">by <span className="text-neonGreen">Matt Gardner</span></p>
              <button className="btn-primary">VIEW MORE</button>
              
              <div className="grid grid-cols-3 gap-8 mt-16">
                <div>
                  <h3 className="font-display text-3xl mb-2">200+</h3>
                  <p className="text-gray-400">Artworks</p>
                </div>
                <div>
                  <h3 className="font-display text-3xl mb-2">40+</h3>
                  <p className="text-gray-400">Clients Worldwide</p>
                </div>
                <div>
                  <h3 className="font-display text-3xl mb-2">12</h3>
                  <p className="text-gray-400">Awards</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1634986666676-ec8fd927c23d" 
                alt="Featured NFT" 
                className="rounded-2xl w-full"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-md rounded-xl p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-display">Super Yetti</h3>
                    <p className="text-sm text-gray-400">Starting bid</p>
                    <p className="text-neonGreen">2 eth <span className="text-gray-400">$ 5,590</span></p>
                  </div>
                  <button className="btn-primary">PLACE BID</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Gallery Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="font-display text-4xl mb-12">Artworks</h2>
          
          <div className="flex space-x-4 mb-8">
            <button className="btn-secondary">ALL</button>
            <button className="btn-secondary">ILLUSTRATION</button>
            <button className="btn-secondary">PHOTOGRAPHY</button>
            <button className="btn-secondary">3D</button>
            <button className="btn-secondary">MOTION</button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {artworks.map((artwork, index) => (
              <NFTCard key={index} {...artwork} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;