import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { ThemeSwitcher } from "./ThemeSwitcher";

const mockSetTheme = jest.fn();
const mockUseTheme = {
  theme: "light",
  setTheme: mockSetTheme,
};

jest.mock("next-themes", () => ({
  useTheme: () => mockUseTheme,
}));

describe("ThemeSwitcher Component", () => {
  beforeEach(() => {
    mockSetTheme.mockClear();
    mockUseTheme.theme = "light";
  });

  it("renders switch after mounting", async () => {
    render(<ThemeSwitcher />);

    await waitFor(() => {
      expect(screen.getByRole("switch")).toBeInTheDocument();
    });
  });

  it("renders switch with correct attributes", async () => {
    render(<ThemeSwitcher />);

    await waitFor(() => {
      const switchElement = screen.getByRole("switch");
      expect(switchElement).toBeInTheDocument();
      expect(switchElement).toHaveAttribute("type", "checkbox");
      expect(switchElement).toHaveAttribute("id", "flexSwitchCheckDefault");
    });
  });

  it("toggles from light to dark theme when clicked", async () => {
    mockUseTheme.theme = "light";
    render(<ThemeSwitcher />);

    await waitFor(() => {
      const switchElement = screen.getByRole("switch");
      fireEvent.click(switchElement);

      expect(mockSetTheme).toHaveBeenCalledWith("dark");
    });
  });

  it("toggles from dark to light theme when clicked", async () => {
    mockUseTheme.theme = "dark";
    render(<ThemeSwitcher />);

    await waitFor(() => {
      const switchElement = screen.getByRole("switch");
      fireEvent.click(switchElement);

      expect(mockSetTheme).toHaveBeenCalledWith("light");
    });
  });

  it("applies correct CSS classes to label", async () => {
    render(<ThemeSwitcher />);

    await waitFor(() => {
      const label = screen.getByRole("switch").nextElementSibling;
      expect(label).toHaveClass("inline-block");
      expect(label).toHaveClass("pl-[0.15rem]");
      expect(label).toHaveClass("hover:cursor-pointer");
    });
  });

  it("has proper wrapper structure", async () => {
    render(<ThemeSwitcher />);

    await waitFor(() => {
      const switchElement = screen.getByRole("switch");
      const wrapper = switchElement.parentElement;

      expect(wrapper?.tagName).toBe("DIV");
      expect(wrapper?.children).toHaveLength(2); // input + label
    });
  });

  it("is accessible with proper ARIA attributes", async () => {
    render(<ThemeSwitcher />);

    await waitFor(() => {
      const switchElement = screen.getByRole("switch");

      expect(switchElement).toHaveAttribute("role", "switch");
      expect(switchElement).toHaveAttribute("type", "checkbox");

      expect(switchElement).not.toHaveAttribute("tabindex", "-1");
    });
  });
});
