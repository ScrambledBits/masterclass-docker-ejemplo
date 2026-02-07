import { FlickeringGrid} from "@/components/ui/flickering-grid-hero";

// Base64 encoded SVG - Bootcamperu logo placeholder or similar
const LOGO_BASE64 = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODQiIGhlaWdodD0iODQiIHZpZXdCb3g9IjAgMCA4NCA4NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTMgMzJDMTMgMjAuOTU0MyAyMS45NTQzIDEyIDMzIDEyQzQ0LjA0NTcgMTIgNTMgMjAuOTU0MyA1MyAzMkM1MyA0My4wNDU3IDQ0LjUgNDcuNSAzMyA1Mkg1M0M1MyA2My4wNDU3IDQ0LjA0NTcgNzIgMzMgNzJDMjEuOTU0MyA3MiAxMyA2My4wNDU3IDExIDUyQzEzIDQwLjk1NDMgMjIuNSAzNCAzMyAzMkgxM1oiIGZpbGw9IiMwMGZmMDEiLz48cGF0aCBkPSJNMTMgNzJDNjQuNzMyNCA2Ny4wOTc3IDczIDU1LjUxMTcgNzMgNDJDNzMgMjguNDg4MyA2NC43MzI0IDE2LjkwMjMgNTMgMTJWNzJaIiBmaWxsPSIjMDBmZDAxIi8+PC9zdmc+";

// 定义遮罩样式
const maskStyle = {
  WebkitMaskImage: `url('${LOGO_BASE64}')`,
  WebkitMaskSize: 'contain',
  WebkitMaskPosition: 'center',
  WebkitMaskRepeat: 'no-repeat',
  maskImage: `url('${LOGO_BASE64}')`,
  maskSize: 'contain',
  maskPosition: 'center',
  maskRepeat: 'no-repeat',
} as const;

// 定义网格动画颜色和配置 - Adapted to Green Theme
const GRID_CONFIG = {
  background: {
    color: "#00ff41",
    maxOpacity: 0.1,
    flickerChance: 0.1,
    squareSize: 4,
    gridGap: 6,
  },
  logo: {
    color: "#00ff41",
    maxOpacity: 0.4,
    flickerChance: 0.2,
    squareSize: 4,
    gridGap: 6,
  },
} as const;

const FlickeringGridDemo = () => {
  return (
   <div className="relative w-full h-full flex justify-center items-center overflow-hidden">
        <FlickeringGrid
        className="absolute inset-0 z-0 [mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
        {...GRID_CONFIG.background}
      />
      <div 
        className="relative z-10 w-64 h-64 opacity-80" 
        style={{
          ...maskStyle,
        }}
      >
        <FlickeringGrid {...GRID_CONFIG.logo} />
      </div>
    </div>
  );
};

export { FlickeringGridDemo };
