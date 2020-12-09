import Service from './ServiceCard';

const ServiceCategory = (props) => {
  const { categoryName, services } = props;

  return (
    <div className="mb-10">
      <h3 className="text-2xl font-mallanna text-pink mb-4">{categoryName}</h3>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {services.map((service, index) => {
          const { name, time, category } = service.fields;
          const price = service.fields.price
            ? `$${service.fields.price}`
            : 'Free';
          const description = service.fields.description
            ? service.fields.description.content[0].content[0].value
            : null;

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
