//Function to handle character limit overflow in card components

export const CharOverflow = (text: string, length: number): string => {
   const shortenedText = text.substring(0, length);

   if (text.length > length) {
      return shortenedText + '...';
   } else {
      return text;
   }
};
