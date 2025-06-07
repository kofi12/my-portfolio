type ServiceCardProps = {
  icon: React.ReactNode;
  heading: string;
  description: string;
};

function ServiceCard({ icon, heading, description }: ServiceCardProps) {
  return (
    <div className="rounded">
      <h2></h2>
      <svg></svg>
      <p></p>
    </div>
  );
}

export default ServiceCard;
