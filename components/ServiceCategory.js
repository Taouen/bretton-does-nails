import Service from './Service';
import classnames from 'classnames';

const ServiceCategory = ({ categoryName, description, services, image }) => {
  const descClassNames = classnames([
    [
      'font-didact md:w-2/3 lg:w-3/4  text-lg p-4  bg-white shadow-lg rounded-b-lg md:rounded-r-lg md:rounded-b-none',
      image ? 'md:w-2/3 lg:w-3/4' : 'md:w-full lg:w-full',
    ],
  ]);

  return (
    <div className="mb-10 ">
      <h3 className="text-2xl font-mallanna text-pink mb-4">{categoryName}</h3>
      <div className="flex flex-col md:flex-row mb-4 ">
        <div className="flex flex-col md:flex-row">
          {image && (
            <div className="md:w-1/3 lg:w-1/4 ">
              <img
                alt={`Photo for ${categoryName} category`}
                src={`https:${image.fields.file.url}`}
                className="rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                loading="lazy"
              />
            </div>
          )}
          <p className={descClassNames}>{description}</p>
        </div>
      </div>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {services.map((service, index) => {
          const { name, time, category, description } = service.fields;
          const price = service.fields.price
            ? `$${service.fields.price}`
            : 'Free';
          {
            /* const description = service.fields.description
            ? service.fields.description.content[0].content[0].value
            : null; */
          }

          if (category === categoryName) {
            return (
              <Service
                key={index}
                name={name}
                time={time}
                price={price}
                description={description}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default ServiceCategory;
