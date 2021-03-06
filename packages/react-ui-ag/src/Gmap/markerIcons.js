const scaledPoint = (x, y, scale) => (
  new window.google.maps.Point(Math.round(x * scale), Math.round(y * scale))
)

const scaledSize = (x, y, scale) => (
  new window.google.maps.Size(Math.round(x * scale), Math.round(y * scale))
)

const greyDotIcon = (scale = 1) => ({
  url: "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='18px' height='19px' viewBox='0 0 18 19' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3Epin-red%3C/title%3E%3Cg id='v2-final' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='map-pins' transform='translate%28-57.000000, -69.000000%29' fill='grey' stroke='%23FFFFFF' stroke-width='1.2'%3E%3Cg id='pin/sponsored/blue' transform='translate%2857.000000, 69.709999%29'%3E%3Cg id='pin-blue' transform='translate%280.820000, 0.820000%29'%3E%3Cg id='Group-21'%3E%3Ccircle id='pin-red' cx='8' cy='8' r='8'%3E%3C/circle%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E",
  anchor: scaledPoint(8, 8, scale),
  scaledSize: scaledSize(16, 16, scale),
})

const redDotIcon = (scale = 1) => ({
  url: "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='18px' height='19px' viewBox='0 0 18 19' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3Epin-red%3C/title%3E%3Cg id='v2-final' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='map-pins' transform='translate%28-57.000000, -69.000000%29' fill='%23ff132f' stroke='%23FFFFFF' stroke-width='1.2'%3E%3Cg id='pin/sponsored/blue' transform='translate%2857.000000, 69.709999%29'%3E%3Cg id='pin-blue' transform='translate%280.820000, 0.820000%29'%3E%3Cg id='Group-21'%3E%3Ccircle id='pin-red' cx='8' cy='8' r='8'%3E%3C/circle%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E",
  anchor: scaledPoint(8, 8, scale),
  scaledSize: scaledSize(16, 16, scale),
})

const blackDotIcon = (scale = 1) => ({
  url: "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='22px' height='22px' viewBox='0 0 22 22' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3Epin-black%3C/title%3E%3Cdefs%3E%3Ccircle id='path-1' cx='8' cy='8' r='8'%3E%3C/circle%3E%3Cfilter x='-25.6%25' y='-19.4%25' width='151.3%25' height='151.3%25' filterUnits='objectBoundingBox' id='filter-2'%3E%3CfeMorphology radius='0.6' operator='dilate' in='SourceAlpha' result='shadowSpreadOuter1'%3E%3C/feMorphology%3E%3CfeOffset dx='0' dy='1' in='shadowSpreadOuter1' result='shadowOffsetOuter1'%3E%3C/feOffset%3E%3CfeGaussianBlur stdDeviation='1' in='shadowOffsetOuter1' result='shadowBlurOuter1'%3E%3C/feGaussianBlur%3E%3CfeComposite in='shadowBlurOuter1' in2='SourceAlpha' operator='out' result='shadowBlurOuter1'%3E%3C/feComposite%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.45 0' type='matrix' in='shadowBlurOuter1'%3E%3C/feColorMatrix%3E%3C/filter%3E%3C/defs%3E%3Cg id='v2-final' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='map-pins' transform='translate%28-55.000000, -180.000000%29'%3E%3Cg id='Group' transform='translate%2850.000000, 138.000000%29'%3E%3Cg id='pin-black' transform='translate%288.000000, 44.000000%29'%3E%3Cg id='Group-21'%3E%3Cg id='Combined-Shape-Copy-42'%3E%3Cuse fill='black' fill-opacity='1' filter='url%28%23filter-2%29' xlink:href='%23path-1'%3E%3C/use%3E%3Cuse stroke='%23FFFFFF' stroke-width='1.2' fill='%23000000' fill-rule='evenodd' xlink:href='%23path-1'%3E%3C/use%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E",
  anchor: scaledPoint(9, 8, scale),
  scaledSize: scaledSize(18, 18, scale),
})

const blackDotIconWithBalloon = (scale = 1) => ({
  url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='38' height='65' viewBox='0 0 38 65'%3E%3Cdefs%3E%3Cpath id='b' d='M12.598 31.638C5.396 30.078 0 23.669 0 16 0 7.163 7.163 0 16 0s16 7.163 16 16c0 7.248-4.82 13.37-11.43 15.338l-4.054 8.92-3.918-8.62z'/%3E%3Cfilter id='a' width='137.5%25' height='129.8%25' x='-18.8%25' y='-12.4%25' filterUnits='objectBoundingBox'%3E%3CfeMorphology in='SourceAlpha' operator='dilate' radius='1' result='shadowSpreadOuter1'/%3E%3CfeOffset dy='1' in='shadowSpreadOuter1' result='shadowOffsetOuter1'/%3E%3CfeGaussianBlur in='shadowOffsetOuter1' result='shadowBlurOuter1' stdDeviation='1.5'/%3E%3CfeComposite in='shadowBlurOuter1' in2='SourceAlpha' operator='out' result='shadowBlurOuter1'/%3E%3CfeColorMatrix in='shadowBlurOuter1' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.45 0'/%3E%3C/filter%3E%3Ccircle id='d' cx='8' cy='8' r='8'/%3E%3Cfilter id='c' width='151.3%25' height='151.3%25' x='-25.6%25' y='-19.4%25' filterUnits='objectBoundingBox'%3E%3CfeMorphology in='SourceAlpha' operator='dilate' radius='.6' result='shadowSpreadOuter1'/%3E%3CfeOffset dy='1' in='shadowSpreadOuter1' result='shadowOffsetOuter1'/%3E%3CfeGaussianBlur in='shadowOffsetOuter1' result='shadowBlurOuter1' stdDeviation='1'/%3E%3CfeComposite in='shadowBlurOuter1' in2='SourceAlpha' operator='out' result='shadowBlurOuter1'/%3E%3CfeColorMatrix in='shadowBlurOuter1' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.45 0'/%3E%3C/filter%3E%3C/defs%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg transform='translate%283 2%29'%3E%3Cuse fill='%23000' filter='url%28%23a%29' xlink:href='%23b'/%3E%3Cuse fill='%23ff132f' stroke='%23FFF' stroke-width='2' xlink:href='%23b'/%3E%3C/g%3E%3Cg fill='%23000' transform='translate%2811 46%29'%3E%3Cuse filter='url%28%23c%29' xlink:href='%23d'/%3E%3Cuse stroke='%23FFF' stroke-width='1.2' xlink:href='%23d'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A",
  anchor: scaledPoint(16, 45, scale),
  scaledSize: scaledSize(32, 54, scale),
})

const redPdpMapBalloon = (scale = 1) => ({
  url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='40' viewBox='0 0 28 40'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath fill='%23FF132F' fill-rule='nonzero' d='M14 0C6.27 0 0 6.27 0 14c0 10.5 14 26 14 26s14-15.5 14-26c0-7.73-6.27-14-14-14z'/%3E%3Cellipse cx='14' cy='12.982' fill='%23FFF' rx='5.25' ry='5.263'/%3E%3C/g%3E%3C/svg%3E",
  anchor: scaledPoint(30, 48, scale),
  scaledSize: scaledSize(55, 48, scale),
})

const redPdpMapBalloonWithBlackDot = (scale = 1) => ({
  url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='55' viewBox='0 0 28 55'%3E%3Cdefs%3E%3Cfilter id='a' width='100%25' height='100%25' x='0%25' y='0%25' filterUnits='objectBoundingBox'%3E%3CfeGaussianBlur in='SourceGraphic'/%3E%3C/filter%3E%3C/defs%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Ccircle cx='14' cy='48' r='7' fill='%23000' filter='url(%23a)'/%3E%3Cpath fill='%23FF132F' fill-rule='nonzero' d='M14 0C6.27 0 0 6.27 0 14c0 10.5 14 26 14 26s14-15.5 14-26c0-7.73-6.27-14-14-14z'/%3E%3Cellipse cx='14' cy='12.982' fill='%23FFF' rx='5.25' ry='5.263'/%3E%3C/g%3E%3C/svg%3E%0A",
  anchor: scaledPoint(32, 50, scale),
  scaledSize: scaledSize(65, 60, scale),
})

export default {
  greyDotIcon,
  redDotIcon,
  blackDotIcon,
  blackDotIconWithBalloon,
  redPdpMapBalloon,
  redPdpMapBalloonWithBlackDot,
}
