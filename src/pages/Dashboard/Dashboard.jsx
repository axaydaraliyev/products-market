import { useSelector, useDispatch } from "react-redux";
import { VStack, Panel, Heading, Tag, Button, HStack, Center } from "rsuite";
import { removeFromCart } from "../../features/cartSlice";

function Dashboard() {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <VStack spacing={24} style={{ padding: 30 }}>
      <Heading level={2}>Savatdagi mahsulotlar</Heading>

      {cart.length === 0 ? (
        <Center>
          <p>Savat bo'sh</p>
        </Center>
      ) : (
        <div
          style={{
            display: "flex",
            gap: 24,
            flexWrap: "wrap",
          }}>
          {cart.map((product) => (
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
                  color="red"
                  appearance="primary"
                  size="sm"
                  onClick={() => handleRemove(product.id)}>
                  Olib tashlash
                </Button>
              </HStack>
            </Panel>
          ))}
        </div>
      )}
    </VStack>
  );
}

export default Dashboard;
