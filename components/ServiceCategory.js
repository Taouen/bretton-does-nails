import Service from './Service';
import classnames from 'classnames';

const ServiceCategory = ({ categoryName, description, services, image }) => {
  const descClassNames = classnames([
    [
      'font-didact md:w-2/3 lg:w-3/4 text-lg md:pr-4 rounded-b-lg md:rounded-r-lg md:rounded-b-none order-last md:order-first',
      image ? 'md:w-2/3 lg:w-3/4' : 'md:w-full lg:w-full',
    ],
  ]);

  return (
    <div className="mb-10 bg-white rounded-lg p-4">
      <h3 className="text-2xl font-mallanna text-pink mb-4">{categoryName}</h3>
      <div className="flex flex-col md:flex-row mb-4 ">
        <div className="flex flex-col md:flex-row">
          <p className={descClassNames}>{description}</p>
          {image && (
            <div className="md:w-1/3 lg:w-1/4 mb-4 md:mb-0">
              <img
                alt={`Photo for ${categoryName} category`}
                src={`https:${image.fields.file.url}`}
                loading="lazy"
              />
            </div>
          )}
        </div>
      </div>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 bg-white rounded-lg">
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
