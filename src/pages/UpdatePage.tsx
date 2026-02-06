import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import type { User } from "../types/user";
import { userFields } from "../config/userFields";
import InputField from "../components/InputField";
import { updateUser } from "../features/slice/slice";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import Loader from "../components/Loader";

const UpdatePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { loading } = useAppSelector((state:any) => state.users);


  const user = location.state?.user as User;

  const [formData, setFormData] = useState<Partial<User>>({});

  useEffect(() => {
    if (user) {
      setFormData(user);
    }
  }, [user]);

  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
    await dispatch(updateUser({ id: user._id!, data: formData as User }));
      navigate("/display");
    } catch (err) {
      console.error(err);
    }
  };

  if (!user) return <div className="p-10">No user data found</div>;

  return (
    <div className="size-full flex justify-center items-center">
      <div className="bg-[url()] bg-cover bg-no-repeat w-1/2 max-md:w-8/10 rounded-3xl bg-blend-multiply bg-white">
        <form
          className="size-full flex flex-col gap-5 items-center p-10 shadow-[0px_0px_10px_1px_#0005] rounded-3xl backdrop-blur-[2px]"
          onSubmit={handleSubmit}
        >
          <div className="w-full h-10 flex justify-center items-center">
            <h1 className="text-2xl font-bold">Update Details</h1>
          </div>

          {userFields.map((field) => (
            <InputField
              key={field.name}
              field={field}
              value={formData[field.name as keyof User] || ""}
              onChange={handleChange}
            />
          ))}

          <button
            type="submit"
            disabled={loading}
            className="w-full h-10 text-white bg-black rounded-xl font-bold hover:scale-105 duration-75 active:bg-red-400 active:scale-90 flex justify-center items-center gap-3"
          >
            {loading ? <Loader text="Updating" /> : "Update"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdatePage;
