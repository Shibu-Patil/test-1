import React, { useState } from "react";
import type { User } from "../types/user";
import { userFields } from "../config/userFields";
import InputField from "../components/InputField";

import { createUser } from "../features/slice/slice";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import Loader from "../components/Loader";

const UserPages = () => {

  const dispatch = useAppDispatch();

  const { loading } = useAppSelector((state:any) => state.users);

  // console.log(loading);
  

  const [formData, setFormData] = useState<Partial<User>>({});

  const handelChange = (name: string, value: string) => {
    setFormData((preVal) => ({
      ...preVal,
      [name]: value
    }));
  };



  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
   
      
      await dispatch(createUser(formData as User));

      setFormData({});

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="size-full flex justify-center items-center ">

      <div className="bg-[url()] bg-cover bg-no-repeat w-1/2 max-md:w-8/10 rounded-3xl bg-blend-multiply bg-white">
          <form
        className="size-full  flex flex-col gap-5 items-center p-10 shadow-[0px_0px_10px_1px_#0005] rounded-3xl backdrop-blur-[2px]"
        onSubmit={handleSubmit}
      >

        <div className="w-full h-10 flex justify-center items-center">
          <h1 className="text-2xl font-bold">Add Details</h1>
        </div>

        {userFields.map(field => (
          <InputField
            key={field.name}
            field={field}
            value={formData[field.name as keyof User] || ""}
            onChange={handelChange}
          />
        ))}



        <button
          type="submit"
          disabled={loading}
          className="w-full h-10 text-white bg-black rounded-xl font-bold hover:scale-105 duration-75 active:bg-red-400 active:scale-90 flex justify-center items-center gap-3"
        >
            {
              loading?<Loader text="Creating"></Loader>:"Create"
            }
        </button>

      </form>
</div>


    </div>
  );
};

export default UserPages;
