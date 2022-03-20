export const openField = (
  rowIndex: number,
  index: number,
  value: number | string | null
) => {
  const fieldDiv = document.querySelector(
    `[data-position="${rowIndex}-${index}"]`
  ) as HTMLDivElement;

  fieldDiv.innerHTML = value as string;
  fieldDiv.classList.add(
    !value ? 'open' : value > 0 ? 'open-num' : 'open-mine'
  );
};
