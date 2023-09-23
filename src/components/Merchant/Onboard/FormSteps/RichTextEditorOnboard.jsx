// import React, { useState, useMemo } from "react";
// import dynamic from "next/dynamic";
// import "react-quill/dist/quill.snow.css";

// const RichTextEditorOnboard = () => {
//   const [value, setValue] = useState("");
//   const ReactQuill = useMemo(
//     () => dynamic(() => import("react-quill"), { ssr: false }),
//     []
//   );

//   console.log(value);

//   const modules = {
//     toolbar: [
//       [{ header: [1, 2, 3, 4, 5, false] }],
//       ["bold", "italic", "underline", "strike", "blockquote"],
//       [
//         { list: "ordered" },
//         { list: "bullet" },
//         { indent: "-1" },
//         { indent: "+1" },
//       ],
//       // ['link', 'image'],
//       ["link"],
//       ["clean"],
//     ],
//   };

//   const formats = [
//     "header",
//     "bold",
//     "italic",
//     "underline",
//     "strike",
//     "blockquote",
//     "list",
//     "bullet",
//     "indent",
//     "link",
//   ];
//   // 'link', 'image'
//   const handleChange = (content) => {
//     setValue(content);
//   };

//   return (
//     <ReactQuill
//       theme="snow"
//       modules={modules}
//       formats={formats}
//       value={value}
//       onChange={setValue}
//       className="h-32"
//     />
//   );
// };

// export default RichTextEditorOnboard;
