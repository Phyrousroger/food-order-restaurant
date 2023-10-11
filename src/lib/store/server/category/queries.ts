import axios from "@/lib/api";
import { CategoryList } from "@/types/category";

export const getCategory = async () => {
  try {
    const response = await axios.get<CategoryList>("/categories.php");
    return response.data;
  } catch (err: any) {
    throw new Error("something went wrong", err);
  }
};
