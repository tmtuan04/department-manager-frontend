import supabase from "./supabase";

export async function getResidents() {
  let { data, error } = await supabase.from("residents").select("*");

  if (error) {
    console.error(error);
    throw new Error("Residents not found!");
  }

  return { data };
}

export async function addUpdateResident(newResident, id) {
  console.log(id);
  let query = supabase.from("residents");

  // Add
  if (!id) query = query.insert([{ ...newResident }]);

  // Update
  if (id) query = query.update({ ...newResident }).eq("id", id);

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("Resident could not be created!");
  }

  return data;
}
