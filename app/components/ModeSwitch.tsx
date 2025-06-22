import clsx from "clsx";
import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";

const ModeSwitch = ({
  clsDiv,
  clsIcon,
  position,
}: {
  clsDiv?: string;
  clsIcon?: string;
  position?: string;
}) => {
  const { theme, setTheme } = useTheme();
  return (
    <div
      className={clsx(
        "absolute right-24 top-6 md:top-5 md:right-5 z-20",
        clsDiv
      )}
      style={{ position: position ? "static" : "absolute" }}
    >
      <label className="swap swap-rotate">
        <input
          type="checkbox"
          checked={theme === "dark"}
          onChange={() => {
            if (theme === "dark") {
              setTheme("light");
            } else {
              setTheme("dark");
            }
          }}
        />
        <FaSun className={clsx("swap-on fill-current w-10 h-10", clsIcon)} />
        <FaMoon className={clsx("swap-off fill-current w-10 h-10", clsIcon)} />
      </label>
    </div>
  );
};
export default ModeSwitch;
