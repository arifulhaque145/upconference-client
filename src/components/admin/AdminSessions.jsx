import { useState } from "react";
import { useForm } from "react-hook-form";

export default function AdminSessions() {
  const [sessions, setSessions] = useState([
    {
      id: Date.now().toString(),
      title: "The Future of Web Development",
      description: "A session on new trends in web dev.",
      speaker: "Tanvir Hasan",
      time: "2025-07-06T10:00",
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
      setSessions((prev) =>
        prev.map((s) => (s.id === editingId ? { ...s, ...data } : s))
      );
      setEditingId(null);
    } else {
      const newSession = { ...data, id: generateId() };
      setSessions((prev) => [...prev, newSession]);
    }

    reset();
  };

  const handleEdit = (id) => {
    const session = sessions.find((s) => s.id === id);
    if (session) {
      setValue("title", session.title);
      setValue("description", session.description);
      setValue("speaker", session.speaker);
      setValue("time", session.time);
      setEditingId(id);
    }
  };

  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this session?")) {
      setSessions((prev) => prev.filter((s) => s.id !== id));
    }
  };

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Manage Sessions</h2>

      {/* Session Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow p-4 rounded mb-6 space-y-4"
      >
        <div>
          <label className="block mb-1 font-semibold">Title</label>
          <input
            {...register("title", { required: "Session title is required" })}
            className="w-full border px-3 py-2 rounded"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 font-semibold">Description</label>
          <textarea
            {...register("description", {
              required: "Description is required",
            })}
            className="w-full border px-3 py-2 rounded"
          />
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">
              {errors.description.message}
            </p>
          )}
        </div>

        <div>
          <label className="block mb-1 font-semibold">Speaker</label>
          <input
            {...register("speaker", { required: "Speaker name is required" })}
            className="w-full border px-3 py-2 rounded"
          />
          {errors.speaker && (
            <p className="text-red-500 text-sm mt-1">
              {errors.speaker.message}
            </p>
          )}
        </div>

        <div>
          <label className="block mb-1 font-semibold">Time</label>
          <input
            type="datetime-local"
            {...register("time", { required: "Time is required" })}
            className="w-full border px-3 py-2 rounded"
          />
          {errors.time && (
            <p className="text-red-500 text-sm mt-1">{errors.time.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        >
          {editingId ? "Update Session" : "Add Session"}
        </button>
      </form>

      {/* Sessions List */}
      <div className="bg-white shadow rounded p-4">
        <h3 className="text-lg font-semibold mb-4">Session List</h3>
        {sessions.length === 0 ? (
          <p className="text-gray-500">No sessions added yet.</p>
        ) : (
          <ul className="divide-y">
            {sessions.map((session) => (
              <li
                key={session.id}
                className="py-3 flex justify-between items-start"
              >
                <div>
                  <h4 className="font-semibold text-lg">{session.title}</h4>
                  <p className="text-gray-600">{session.description}</p>
                  <p className="text-sm text-gray-500">
                    Speaker: {session.speaker}
                  </p>
                  <p className="text-sm text-gray-400">
                    Time: {new Date(session.time).toLocaleString()}
                  </p>
                </div>
                <div className="space-x-2">
                  <button
                    onClick={() => handleEdit(session.id)}
                    className="px-3 py-1 bg-yellow-400 text-white rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(session.id)}
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
