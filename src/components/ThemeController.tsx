type ThemeControllerProps = {
  theme: 'light' | 'dark';
  onChange: (theme: 'light' | 'dark') => void;
};

export function ThemeController({ theme, onChange }: ThemeControllerProps) {
  return (
    <label className="cursor-pointer grid place-items-center" aria-label="Theme toggle">
      <input
        type="checkbox"
        value="dark"
        aria-label="Toggle dark theme"
        className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1"
        checked={theme === 'dark'}
        onChange={(event) => onChange(event.target.checked ? 'dark' : 'light')}
      />
      <svg
        className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 24 24"
      >
        <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71a1,1,0,0,0-1.41-1.41ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12ZM12,5a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5Zm5.66,2.34a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41l-.71.71a1,1,0,0,0,.71,1.7ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,2a1,1,0,1,0-1-1A1,1,0,0,0,12,13Zm6.36,4a1,1,0,0,0-1.41,1.41l.71.71a1,1,0,0,0,1.41-1.41ZM12,6a6,6,0,1,0,6,6A6,6,0,0,0,12,6Zm0,10a4,4,0,1,1,4-4A4,4,0,0,1,12,16Z" />
      </svg>
      <svg
        className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 24 24"
      >
        <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
      </svg>
    </label>
  );
}
