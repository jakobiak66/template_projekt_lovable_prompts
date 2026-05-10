import { LucideIcon } from "lucide-react";

interface Item {
  Icon: LucideIcon;
  title: string;
  text: string;
}

interface Props {
  items: Item[];
}

const ServiceGrid = ({ items }: Props) => (
  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
    {items.map(({ Icon, title, text }) => (
      <div key={title} className="text-center">
        <div className="w-20 h-20 rounded-full bg-brand mx-auto flex items-center justify-center">
          <Icon size={36} className="text-brand-foreground" strokeWidth={1.5} />
        </div>
        <h3 className="mt-5 text-lg font-medium text-brand-dark">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-brand-dark/70 max-w-[16rem] mx-auto">{text}</p>
      </div>
    ))}
  </div>
);

export default ServiceGrid;
