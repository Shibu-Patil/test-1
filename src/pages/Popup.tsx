import Loader from "../components/Loader";
import { useAppSelector } from "../hooks/hooks";

type PopupProps = {
  onConfirm: () => void;
  onCancel: () => void;
};

const Popup = ({ onConfirm, onCancel }: PopupProps) => {
      const { loading } = useAppSelector((state:any) => state.users);
    
  return (
    <div className="fixed inset-0 bg-black/80 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Confirm Deletion</h2>
        <p className="mb-4">Are you sure you want to delete this user?</p>
        <div className="flex justify-end gap-2">
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            {
                loading?<Loader text="Delete......"></Loader>:"Delete"
            }
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
