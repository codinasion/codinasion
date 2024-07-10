import DocSearchInput from "./docsearch-input";
import ThemeSwitch from "./theme-switch";

export default function NavbarIcons() {
  return (
    <div className="flex items-center">
      <div className="lg:hidden">
        <DocSearchInput />
      </div>
      <ThemeSwitch />
    </div>
  );
}
