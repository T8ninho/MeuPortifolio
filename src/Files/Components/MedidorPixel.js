export default function MedidorPixel(item) {
  const { innerWidth, innerHeight } = window;
  const smallestDimension = Math.min(innerWidth, innerHeight);
  
  const adjustedFontSize = (item / 400) * smallestDimension;
  return adjustedFontSize;
}
