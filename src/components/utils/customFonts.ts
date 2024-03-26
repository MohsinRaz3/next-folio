import localFont from 'next/font/local'
 
const OfficeTimes = localFont({
    src: [{ path: "../../fonts/OfficeTimesSharpRegular.woff2" }],
    variable: "--font-officetimes",
  });


  const CaliberFont = localFont({
    src: [{ path: "../../fonts/calibre-semibold.woff2" }],
    variable: "--font-caliberfont",
  });

  const CalibreReg = localFont({
    src: [{ path: "../../fonts/calibre-regular.woff2" }],
    variable: "--font-caliberreg",
  });


  export  {OfficeTimes,CaliberFont,CalibreReg}