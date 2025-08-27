import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const UploadImage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isDragOver, setIsDragOver] = useState(false);

  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const handleFileSelect = (file) => {
    if (file && file.type.startsWith("image/")) {
      setSelectedFile(file);
      // Create preview URL
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      alert("Please select a valid image file.");
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    const file = e.dataTransfer.files[0];
    handleFileSelect(file);
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    handleFileSelect(file);
  };

  const handleDeleteFile = () => {
    setSelectedFile(null);
    setImagePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      console.log("Uploading file:", selectedFile.name);
      navigate("/result");
    } else {
      alert("Please select a file first.");
    }
  };

  return (
    <div
      className="bg-cover bg-center min-h-[92vh] w-full px-4 sm:px-6"
      style={{ backgroundImage: "url('/images/upload-bg.png')" }}
    >
      <div className="container flex justify-center items-center min-h-[92vh] w-full mx-auto py-8 sm:py-12">
        <div className="flex flex-col items-center w-full max-w-md md:w-[800px] gap-6 sm:gap-8">
          <h2 className="text-xl sm:text-2xl md:text-[30px] lg:text-[40px] font-irish text-[#110252] text-center mb-8 sm:mb-12 leading-tight">
            UPLOAD YOUR DENTAL IMAGE
          </h2>
          <div
            className={`bg-white h-64 sm:h-80 md:h-[394px] rounded-2xl flex justify-center items-center w-full border-2 border-dashed transition-colors cursor-pointer ${
              isDragOver ? "border-primary bg-blue-50" : "border-gray-300"
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={handleClick}
          >
            {selectedFile ? (
              <div className="flex flex-col items-center gap-3 sm:gap-4 p-4 sm:p-6 w-full h-full">
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <span className="text-sm sm:text-lg font-semibold text-gray-700 truncate max-w-32 sm:max-w-48">
                    {selectedFile.name}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteFile();
                    }}
                    className="bg-red-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm hover:bg-red-600 transition flex-shrink-0"
                  >
                    Delete
                  </button>
                </div>
                {imagePreview && (
                  <div className="flex-1 w-full flex justify-center items-center">
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="max-w-full max-h-32 sm:max-h-48 md:max-h-64 object-contain rounded-lg shadow-md"
                    />
                  </div>
                )}
                <p className="text-xs sm:text-sm text-gray-500 text-center">
                  Click to select a different file or drag and drop
                </p>
              </div>
            ) : (
              <p className="text-lg sm:text-xl md:text-2xl text-center px-4">
                Drag & drop your image here or click to browse
              </p>
            )}
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileInputChange}
            className="hidden"
          />
          <button
            onClick={handleUpload}
            className="w-full sm:w-fit px-6 h-12 sm:h-16 md:h-[70px] bg-secondary text-white rounded-full self-center transition font-bold mt-6 sm:!mt-10 hover:bg-opacity-90 text-sm sm:text-base"
          >
            Get Diagnosis
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadImage;
