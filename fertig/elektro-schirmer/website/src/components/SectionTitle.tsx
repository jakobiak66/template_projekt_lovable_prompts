interface Props {
  primary: string;
  secondary: string;
  className?: string;
}

const SectionTitle = ({ primary, secondary, className = "" }: Props) => (
  <h2 className={`text-3xl md:text-5xl font-light text-center ${className}`}>
    <span className="text-brand-dark/70">{primary} </span>
    <span className="text-brand-dark">{secondary}</span>
  </h2>
);

export default SectionTitle;
