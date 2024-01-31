export const checkFileExtension = (file) => {
  const fileExtension = file.substring(file.lastIndexOf(".") + 1).toLowerCase();
  const isVideo = ["mp4", "avi", "mkv", "mov"].includes(fileExtension);
  return isVideo;
};
