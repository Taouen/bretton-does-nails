import Product from './Product';

/* 
  - plan to decrease the size of the product cards for mobile and allow for a more compact design while adding funcitonality of a properties card pop up to display the full product card.

*/

const ProductCategory = ({ categoryName, description, products }) => {
  return (
    <div className="mb-10 bg-white rounded-lg p-4">
      <h3 className="text-2xl font-mallanna text-pink mb-4">{categoryName}</h3>
      <div className="flex flex-col md:flex-row mb-4 ">
        {/* <div className="flex flex-col md:flex-row"> */}
        <p className="font-didact text-lg">{description}</p>
        {/* </div> */}
      </div>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product, index) => {
          const { name, size, category, images, description } = product.fields;
          const price = product.fields.price
            ? `$${product.fields.price}`
            : 'Free';
          {
            /* const description = product.fields.description
            ? product.fields.description.content[0].content[0].value
            : null; */
          }

          if (category === categoryName) {
            return (
              <Product
                key={index}
                name={name}
                size={size}
                images={images}
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

export default ProductCategory;
