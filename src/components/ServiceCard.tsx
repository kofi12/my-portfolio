type ServiceCardProps = {
  icon: React.ReactNode;
  heading: string;
  description: string;
};

function ServiceCard({ icon, heading, description }: ServiceCardProps) {
  return (
    <div className="rounded-md border flex flex-col items-center relative w-full sm:w-1/2 lg:w-1/4 p-4 sm:p-6 gap-3 sm:gap-4 transition-all duration-300 ease-in-out transform hover:translate-y-2 hover:shadow-xl hover:border-blue-400 hover:shadow-blue-200">
      <div>{icon}</div>
      <h2 className="font-heading text-xl sm:text-2xl md:text-3xl text-slate-500 font-bold text-center">
        {heading}
      </h2>
      <p className="font-para text-sm sm:text-base md:text-lg text-balance text-center">{description}</p>
    </div>
  );
}

export default ServiceCard;
