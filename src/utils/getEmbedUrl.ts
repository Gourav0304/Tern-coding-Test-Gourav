export const getEmbedUrl = (videoId: string | null, startTime: number = 0) => {
  if (!videoId) return '';

  return `https://www.youtube.com/embed/${videoId}?autoplay=1&start=${startTime}`;
};
