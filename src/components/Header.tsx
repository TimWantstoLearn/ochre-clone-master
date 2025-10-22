import logo from "@/assets/logo.png";

export const Header = () => {
  return (
    <header className="fixed top-0 right-0 left-16 h-20 flex items-center justify-end px-8 z-40 bg-background/80 backdrop-blur-sm">
      <div className="flex items-center gap-2">
        <img src={logo} alt="Travel Stash Logo" className="w-12 h-12 object-contain" />
      </div>
    </header>
  );
};
