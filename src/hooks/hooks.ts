import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "../features/store/store";

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: typeof useSelector = useSelector;
