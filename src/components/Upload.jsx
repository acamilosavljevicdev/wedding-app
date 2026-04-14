import { useState } from "react";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";

import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";


registerPlugin(FilePondPluginImagePreview);

export default function Upload() {
  const [files, setFiles] = useState([]);

  return (
    <div className="flex flex-col h-full w-full justify-center items-center">
      <div style={{ padding: '20px', height: '50%', width: '50%', opacity: 0.8 }}>


        <FilePond
          files={files}
          onupdatefiles={setFiles}
          allowMultiple={true}
          allowRevert={false}
          maxFiles={10}
          name="files"
          labelIdle='Baci neku sliku/video i potegni pice! :)'
          acceptedFileTypes={["image/*", "video/*"]}

          server={{
            process: (fieldName, file, metadata, load, error, progress) => {

              const formData = new FormData();
              formData.append("file", file);
              formData.append("upload_preset", "wedding_app");

              fetch("https://api.cloudinary.com/v1_1/dhy4faehi/auto/upload", {
                method: "POST",
                body: formData,
              })
                .then(async (res) => {
                  const data = await res.json();
                  load(data.secure_url);
                })
                .catch((err) => {
                  error(err.message);
                });
            }
          }}
        />

      </div>
    </div>

  );
}