import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../features/store/store";
import { fetchUsers, deleteUser } from "../features/slice/slice";
import { userFields } from "../config/userFields";
import Popup from "./Popup";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const DisplayUser = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { users, loading, error } = useSelector((state: RootState) => state.users);

  const [show, setShow] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const navigate=useNavigate()

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleDelete = (id: string) => {
    dispatch(deleteUser(id))
      .then(() => toast.success("User deleted successfully!"))
      .catch(() => toast.error("Failed to delete user."));
    setShow(false);
  };

  const handleOpenPopup = (id: string) => {
    setSelectedId(id);
    setShow(true);
  };
  const handelUpdate=(user:any)=>{
      navigate("/update",{
        state:{
          user:user
        }
      })
  }

  if (error) return <div className="p-10 text-red-500">Error: {error}</div>;

  
  const renderSkeleton = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="bg-white p-5 rounded-xl shadow animate-pulse space-y-4"
          >
            <div className="h-6 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            <div className="flex gap-2 mt-4">
              <div className="flex-1 h-8 bg-gray-200 rounded"></div>
              <div className="flex-1 h-8 bg-gray-200 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="w-full min-h-screen p-10">
      <h1 className="text-2xl font-bold mb-5">All Users</h1>

      {loading ? (
        renderSkeleton()
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {users.map((user) => (
            <div
              key={user.id}
              className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition"
            >
              {userFields.map((field) => (
                <div key={field.name} className="mb-2">
                  <span className="font-semibold">{field.label}: </span>
                  <span>{user[field.name]}</span>
                </div>
              ))}

              <div className="flex gap-2 mt-4">
                <button
                  onClick={() => handelUpdate(user)}
                  className="flex-1 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Update
                </button>
                <button
                  onClick={() => handleOpenPopup(user.id!)}
                  className="flex-1 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {show && selectedId && (
        <Popup
          onConfirm={() => handleDelete(selectedId)}
          onCancel={() => setShow(false)}
        />
      )}
    </div>
  );
};

export default DisplayUser;
