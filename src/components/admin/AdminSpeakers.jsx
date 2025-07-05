import { useState } from "react";
import { useForm } from "react-hook-form";

export default function AdminSpeakers() {
  const [speakers, setSpeakers] = useState([
    {
      id: Date.now().toString(),
      name: "Tanvir Hasan",
      title: "CTO, TechX",
      organization: "TechX Solutions",
      photoUrl: "https://randomuser.me/api/portraits/men/32.jpg",
    },
  ]);

  const [editingId, setEditingId] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  const generateId = () =>
    Date.now().toString() + Math.floor(Math.random() * 1000);

  const onSubmit = (data) => {
    if (editingId) {
      setSpeakers((prev) =>
        prev.map((sp) => (sp.id === editingId ? { ...sp, ...data } : sp))
      );
      setEditingId(null);
    } else {
      const newSpeaker = { ...data, id: generateId() };
      setSpeakers((prev) => [...prev, newSpeaker]);
    }

    reset();
  };

  const handleEdit = (id) => {
    const speaker = speakers.find((s) => s.id === id);
    if (speaker) {
      setValue("name", speaker.name);
      setValue("title", speaker.title);
      setValue("organization", speaker.organization);
      setValue("photoUrl", speaker.photoUrl);
      setEditingId(id);
    }
  };

  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this speaker?")) {
      setSpeakers((prev) => prev.filter((s) => s.id !== id));
    }
  };

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Manage Speakers</h2>

      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow p-4 rounded mb-6 space-y-4"
      >
        <div>
          <label className="block mb-1 font-semibold">Full Name</label>
          <input
            {...register("name", { required: "Full name is required" })}
            className="w-full border px-3 py-2 rounded"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 font-semibold">Title</label>
          <input
            {...register("title", { required: "Title is required" })}
            className="w-full border px-3 py-2 rounded"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 font-semibold">Organization</label>
          <input
            {...register("organization")}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Photo URL</label>
          <input
            {...register("photoUrl")}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        >
          {editingId ? "Update Speaker" : "Add Speaker"}
        </button>
      </form>

      {/* Speaker List */}
      <div className="bg-white shadow rounded p-4">
        <h3 className="text-lg font-semibold mb-4">Speaker List</h3>
        {speakers.length === 0 ? (
          <p className="text-gray-500">No speakers added yet.</p>
        ) : (
          <ul className="divide-y">
            {speakers.map((speaker) => (
              <li
                key={speaker.id}
                className="py-3 flex justify-between items-center"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={speaker.photoUrl || "/default.png"}
                    alt={speaker.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">{speaker.name}</h4>
                    <p className="text-sm text-gray-500">{speaker.title}</p>
                    {speaker.organization && (
                      <p className="text-sm text-gray-400">
                        {speaker.organization}
                      </p>
                    )}
                  </div>
                </div>
                <div className="space-x-2">
                  <button
                    onClick={() => handleEdit(speaker.id)}
                    className="px-3 py-1 bg-yellow-400 text-white rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(speaker.id)}
                    className="px-3 py-1 bg-red-500 text-white rounded"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
