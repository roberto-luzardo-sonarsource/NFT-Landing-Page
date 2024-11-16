interface NFTCardProps {
  image: string;
  title: string;
  price: {
    eth: number;
    usd: number;
  };
}

const NFTCard = ({ image, title, price }: NFTCardProps) => {
  return (
    <div className="nft-card bg-cardBg rounded-2xl overflow-hidden">
      <div className="aspect-square overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-display text-lg mb-2">{title}</h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-neonGreen">{price.eth} eth</span>
            <span className="text-sm text-gray-400">${price.usd}</span>
          </div>
          <button className="btn-secondary text-sm">VIEW</button>
        </div>
      </div>
    </div>
  );
};

export default NFTCard;