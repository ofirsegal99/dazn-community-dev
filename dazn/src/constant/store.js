import create from "zustand";
import User from "../constant/user.json"

const useStore = create(() => ({
  currentUser:User 
}));

export default useStore;