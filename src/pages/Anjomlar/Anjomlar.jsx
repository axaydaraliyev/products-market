import { useSelector, useDispatch } from "react-redux";
import { VStack, Panel, Heading, Tag, Button, HStack } from "rsuite";
import { removeProduct } from "../../features/productsSlice";
import { addToCart } from "../../features/cartSlice";

function Anjomlar() {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(removeProduct(id));
  };

  const handleBuy = (product) => {
    dispatch(addToCart(product));
    dispatch(removeProduct(product.id));
  };

  const anjomlarProducts = products.filter(
    (product) => product.type === "anjomlar",
  );

  return (
    <VStack spacing={24} style={{ padding: 30 }}>
      <Heading level={2}>Anjomlar</Heading>

      <div
        style={{
          display: "flex",
          gap: 24,
          flexWrap: "wrap",
        }}>
        {anjomlarProducts.map((product) => (
          <Panel
            key={product.id}
            bordered
            shaded
            style={{
              width: 300,
              padding: 20,
              borderRadius: 12,
            }}>
            <Heading level={4} style={{ marginBottom: 8 }}>
              {product.title}
            </Heading>
            {product.image && (
              <img
                src={product.image}
                alt={product.title}
                style={{
                  width: "100%",
                  height: 150,
                  objectFit: "cover",
                  marginBottom: 12,
                }}
              />
            )}
            <p style={{ marginBottom: 12 }}>{product.description}</p>

            <Tag color="green" size="lg">
              {product.price} so&apos;m
            </Tag>

            <HStack spacing={8} style={{ marginTop: 12 }}>
              <Button
                color="blue"
                appearance="primary"
                size="sm"
                onClick={() => handleBuy(product)}>
                Sotib olish
              </Button>
              <Button
                color="red"
                appearance="primary"
                size="sm"
                onClick={() => handleDelete(product.id)}>
                O‘chirish
              </Button>
            </HStack>
          </Panel>
        ))}
      </div>
    </VStack>
  );
}

export default Anjomlar;
