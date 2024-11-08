import { Buy, CoffeeCardStyled, Price, Tags } from "./styles";

interface CoffeeCardProps {
  coffee: {
    id: string;
    title: string;
    description: string;
    tags: string[];
    price: number;
    image: string;
  };
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  return (
    <CoffeeCardStyled>
      <img src={coffee.image} alt={coffee.title} />
      <Tags>
        {coffee.tags.map((tag) => (
          <small key={tag}>{tag}</small>
        ))}
      </Tags>
      <h2>{coffee.title}</h2>
      <p>{coffee.description}</p>
      <Buy>
        <Price>
          <small>R$</small>
          {` ${coffee.price.toFixed(2)}`}
        </Price>
      </Buy>
    </CoffeeCardStyled>
  );
}
