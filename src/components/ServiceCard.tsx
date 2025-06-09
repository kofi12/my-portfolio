type ServiceCardProps = {
  icon: React.ReactNode;
  heading: string;
  description: string;
};

function ServiceCard({ icon, heading, description }: ServiceCardProps) {
  return (
    <div className="rounded-md border flex flex-col items-center relative w-1/4 p-4 gap-4 transition-all duration-300 ease-in-out transform hover:translate-y-2 hover:shadow-xl">
      <h2 className="text-3xl text-slate-500 font-semibold text-center">
        {heading}
      </h2>
      <div>{icon}</div>
      <p className="text-lg text-balance text-center">{description}</p>
    </div>
  );
}

export default ServiceCard;
