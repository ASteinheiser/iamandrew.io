interface LinkWithIconProps {
  text: string;
  alt: string;
  icon: string;
  href: string;
}

export const LinkWithIcon = ({ text, alt, icon, href }: LinkWithIconProps) => {
  return (
    <div className="link-with-icon-wrap">
      <img src={icon} alt={alt} className="icon" />
      <a href={href} target="_blank" rel="noopener noreferrer">
        {text}
      </a>
    </div>
  );
};
