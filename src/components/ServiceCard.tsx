type ServiceCardProps = {
  icon: React.ReactNode;
  heading: string;
  description: string;
};

function ServiceCard({ icon, heading, description }: ServiceCardProps) {
  return (
    <div className="rounded-md border flex flex-col items-center relative w-full p-4 gap-3 transition-all duration-300 ease-in-out transform hover:translate-y-2 hover:shadow-xl hover:border-blue-400 hover:shadow-blue-200">
      <div>{icon}</div>
      <h2 className="font-heading text-xl text-slate-500 font-bold text-center">
        {heading}
      </h2>
      <p className="font-para text-sm text-balance text-center">{description}</p>
    </div>
  );
}

export default ServiceCard;
