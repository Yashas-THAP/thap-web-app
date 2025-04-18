export const fileToBase64 = (file: Blob | null) => {
    if(file == null) return null;
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader?.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });
};
// export const base64ToFile = (base64: string, filename: string) => {
//     const arr = base64.split(',');
//     const mime = arr[0].match(/:(.*?);/)[1];
//     const bstr = atob(arr[1]);
//     let n = bstr.length;
//     const u8arr = new Uint8Array(n);
//     while (n--) {
//         u8arr[n] = bstr.charCodeAt(n);
//     }
//     return new File([u8arr], filename, { type: mime });
// };