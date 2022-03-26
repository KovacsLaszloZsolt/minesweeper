export const renderModal = (child: HTMLDivElement) => {
  const fieldCtn = document.querySelector('.field-ctn') as HTMLDivElement;
  fieldCtn?.appendChild(child);
};
