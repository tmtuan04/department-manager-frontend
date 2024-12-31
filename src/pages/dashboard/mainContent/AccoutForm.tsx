import { useState } from "react";
import Form from "../../../components/Form";
import FormField from "../../../components/FormField";
import { HiPencil } from "react-icons/hi";
import Button from "../../../components/Button";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AccoutForm = () => {
  const rememberString = localStorage.getItem("remember");
  const remember = rememberString ? JSON.parse(rememberString) : null;

  const [data, setData] = useState({
    id: localStorage.getItem("id") || "",
    email: remember?.username || "",
    password: remember?.password || "",
    name: localStorage.getItem("name") || "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setData((prev) => ({ ...prev, [id]: value }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const navigate = useNavigate();

  const handleUpdate = async (e: any) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        "http://localhost:8080/api/v1/users",
        data
      );
      if (response.status === 200) {
        toast.success("Update Account Successful");
        setTimeout(() => {
            navigate("/signin");
        }, 1000)
      } else {
        throw new Error("Update failed");
      }
    } catch (err) {
      toast.error("An error occurred while updating the account");
    }
  };

  return (
    <Form width="400px">
      <Form.Fields>
        <FormField>
          <FormField.Label label="Email:" />
          <FormField.Input id="email" type="text" value={data.email} readOnly />
        </FormField>
        <FormField>
          <FormField.Label label="Name:" />
          <FormField.Input
            id="name"
            type="text"
            onChange={handleChange}
            value={data.name}
          />
        </FormField>
        <FormField>
          <FormField.Label label="Password:" />
          <div style={{ position: "relative" }}>
            <FormField.Input
              id="password"
              type={showPassword ? "password" : "text"}
              value={data.password}
              onChange={handleChange}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              style={{
                fontSize: "18px",
                position: "relative",
                left: "80%",
                bottom: "25%",
                transform: "translateY(-50%)",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>
        </FormField>
      </Form.Fields>
      <Form.Buttons>
        <Button
          onClick={handleUpdate}
          type="button"
          variation="secondary"
          size="medium"
        >
          Update
          <HiPencil />
        </Button>
      </Form.Buttons>
    </Form>
  );
};

export default AccoutForm;
