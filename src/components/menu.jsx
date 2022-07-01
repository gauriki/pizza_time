import MenuCard from "./menu-card";
import pexels from "../image/pexels.png";
import kuzma from "../image/kuzma.png";
import marg from "../image/marg.png";
// function hello(x, y) {
//   return `Hello, ${x.name}. Your age is ${y.age}`;
// }

// hello({ name: "Gauri"}, {age: 21});

const Menu = () => {
  return (
    <div>
      <p className="mt-4 font-semibold text-[36px] flex items-center text-center justify-center">
        Recommented menu
      </p>
      <div className="flex mt-6 justify-center">
        <MenuCard
          title="Cheese Lover"
          image={pexels}
          discription="Combination of Alfredo sauce and two cheeses – Romano, and Parmesan."
          price={35}
        />
        <MenuCard
          title="Pepperoni Pizza"
          image={kuzma}
          discription="Pizza with homemade spicy beef sausage"
          price={25}
        />
        <MenuCard
          title="Margherita Pizza"
          image={marg}
          discription="Made with San Marzano tomatoes, mozzarella cheese, and fresh basil."
          price={20}
        />
      </div>
    </div>
  );
};

export default Menu;
