// Har bir productning id, title, description, price hossalari bo'lishi kerak.

import { useState } from "react";
import {
  Form,
  Button,
  Input,
  Textarea,
  Panel,
  VStack,
  HStack,
  toaster,
  Message,
  SelectPicker,
} from "rsuite";
import { useDispatch } from "react-redux";
import { addProduct } from "../../features/productsSlice";

function CreateProduct() {
  const [formValue, setFormValue] = useState({
    title: "",
    description: "",
    price: "",
    type: "",
    image: "",
  });
  const dispatch = useDispatch();

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFormValue({ ...formValue, image: e.target.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    // Yangi mahsulot qo'shish logikasi
    const newProduct = {
      id: Date.now(), // Oddiy id generatsiya
      ...formValue,
      price: parseFloat(formValue.price),
    };
    console.log("Yangi mahsulot qo&apos;shildi:", newProduct);
    dispatch(addProduct(newProduct));
    toaster.push(
      <Message showIcon type="success" closable>
        Mahsulot muvaffaqiyatli qo&apos;shildi!
      </Message>,
      { placement: "topCenter", duration: 3000 },
    );
    // Bu yerda API ga yuborish yoki localStorage ga saqlash mumkin
    setFormValue({
      title: "",
      description: "",
      price: "",
      type: "",
      image: "",
    });
  };

  return (
    <VStack
      spacing={20}
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "80vh", padding: "20px" }}>
      <Panel
        bordered
        header={<h3>Yangi Mahsulot Qo&apos;shish</h3>}
        style={{ width: "100%", maxWidth: "500px" }}>
        <Form
          formValue={formValue}
          onChange={setFormValue}
          onSubmit={handleSubmit}
          fluid>
          <Form.Group controlId="title">
            <Form.ControlLabel>Sarlavha</Form.ControlLabel>
            <Form.Control
              name="title"
              accepter={Input}
              placeholder="Mahsulot sarlavhasini kiriting"
              required
            />
          </Form.Group>
          <Form.Group controlId="description">
            <Form.ControlLabel>Tavsif</Form.ControlLabel>
            <Form.Control
              name="description"
              accepter={Textarea}
              placeholder="Mahsulot tavsifini kiriting"
              rows={4}
              required
            />
          </Form.Group>
          <Form.Group controlId="price">
            <Form.ControlLabel>Narx</Form.ControlLabel>
            <Form.Control
              name="price"
              accepter={Input}
              type="number"
              step="0.01"
              placeholder="Narxni kiriting"
              required
            />
          </Form.Group>
          <Form.Group controlId="type">
            <Form.ControlLabel>Tur</Form.ControlLabel>
            <Form.Control
              name="type"
              accepter={SelectPicker}
              data={[
                { label: "Yegulik", value: "yegulik" },
                { label: "Anjomlar", value: "anjomlar" },
              ]}
              placeholder="Turini tanlang"
              required
            />
          </Form.Group>
          <Form.Group controlId="image">
            <Form.ControlLabel>Rasm</Form.ControlLabel>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <HStack justifyContent="center">
              <Button appearance="primary" type="submit" size="lg">
                Qo&apos;shish
              </Button>
            </HStack>
          </Form.Group>
        </Form>
      </Panel>
    </VStack>
  );
}

export default CreateProduct;
