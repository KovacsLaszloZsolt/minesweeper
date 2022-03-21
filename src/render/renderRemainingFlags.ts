export const renderRemainingFlags = (numOfFlagsLeft: number): void => {
  const flagsNumDiv = document.querySelector(
    '.number-of-flags'
  ) as HTMLSpanElement;

  flagsNumDiv.innerText = numOfFlagsLeft as unknown as string;
};
