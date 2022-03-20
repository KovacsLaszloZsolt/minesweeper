export const clearBoard = () => {
  const fieldCtn = document.querySelector('.field-ctn') as HTMLDivElement;
  fieldCtn.innerText = '';
};
