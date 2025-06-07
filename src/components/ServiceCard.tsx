type ServiceCardProps = {
  icon: React.ReactNode;
  heading: string;
  description: string;
};

function ServiceCard({ icon, heading, description }: ServiceCardProps) {
  return (
    <div className="rounded-md border-gray-200">
      <h2>{heading}</h2>
      <svg>{icon}</svg>
      <p>{description}</p>
    </div>
  );
}

export default ServiceCard;
