import { useState } from "react";

export default function ImageUploader({ onSelect }) {
  const [preview, setPreview] = useState("");

  const handleFile = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setPreview(reader.result);
      onSelect(reader.result);
    };

    if (file) reader.readAsDataURL(file);
  };

  return (
    <div>
      <label className="font-medium mb-2 block text-black">Upload Image</label>

      <div className="border-2 border-dashed p-4 rounded-xl text-center cursor-pointer text-black">
        <input type="file" accept="image/*" onChange={handleFile} />

        {preview && (
          <img
            src={preview}
            className="mt-4 w-full h-48 object-cover rounded-xl"
          />
        )}
      </div>
    </div>
  );
}
