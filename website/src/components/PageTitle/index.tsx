interface Props {
  title: string;
  description?: string;
}

export default function PageTitle({ title, description }: Props): JSX.Element {
  return (
    <div className="space-y-2 pb-8 pt-6 md:space-y-5">
      <h1 className="text-3xl font-extrabold leading-9 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
        {title}
      </h1>
      {description && <p className="text-lg leading-7">{description}</p>}
    </div>
  );
}
