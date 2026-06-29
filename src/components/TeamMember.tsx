interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  description: string;
}

export default function TeamMember({
  name,
  role,
  image,
  description,
}: TeamMemberProps) {
  return (
    <div className="md:opacity-50 hover:opacity-100 duration-300">
      <img src={image} alt={name} />
      <p className="mt-1">{description}</p>
    </div>
  );
}
