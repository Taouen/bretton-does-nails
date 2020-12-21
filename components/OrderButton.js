const OrderButton = () => {
  return (
    <a href="mailto:brettondoesnails@gmail.com?subject=I'd like to place an order!">
      <button className="w-24 h-24 lg:w-36 lg:h-36 fixed bottom-10 right-4 lg:right-10 bg-pink rounded-full font-didact text-lg lg:text-2xl text-white shadow-2xl ">
        Order Now
      </button>
    </a>
  );
};

export default OrderButton;
