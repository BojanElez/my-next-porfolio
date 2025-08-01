import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Form } from "./Form";

jest.mock("../Button", () => ({
  Button: ({ text, type, variant, ...props }: any) => (
    <button type={type} className={variant} {...props}>
      {text}
    </button>
  ),
}));

global.fetch = jest.fn();
const mockFetch = fetch as jest.MockedFunction<typeof fetch>;

describe("Form Component", () => {
  const defaultProps = {
    firstName: "First Name",
    lastName: "Last Name",
    subject: "Subject",
    message: "Message",
    send: "Send",
    firstNameError: "First name is required",
    lastNameError: "Last name is required",
    emailError: "Email is required",
    subjectError: "Subject is required",
    messageError: "Message is required",
  };

  beforeEach(() => {
    mockFetch.mockClear();
  });

  describe("Form Rendering", () => {
    it("should render submit button with correct text", () => {
      render(<Form {...defaultProps} />);

      expect(
        screen.getByRole("button", { name: defaultProps.send })
      ).toBeInTheDocument();
    });

    it("should have correct input types", () => {
      render(<Form {...defaultProps} />);

      expect(
        screen.getByRole("textbox", { name: defaultProps.firstName })
      ).toHaveAttribute("type", "text");
      expect(
        screen.getByRole("textbox", { name: defaultProps.lastName })
      ).toHaveAttribute("type", "text");
      expect(screen.getByRole("textbox", { name: "Email" })).toHaveAttribute(
        "type",
        "email"
      );
      expect(
        screen.getByRole("textbox", { name: defaultProps.message })
      ).toBeInTheDocument();
    });

    it("should have correct placeholder for message textarea", () => {
      render(<Form {...defaultProps} />);

      expect(
        screen.getByRole("textbox", { name: defaultProps.message })
      ).toHaveAttribute("placeholder", defaultProps.message);
    });
  });

  describe("Form Field IDs and Labels", () => {
    it("should have correct id attributes for most fields", () => {
      render(<Form {...defaultProps} />);

      expect(
        screen.getByRole("textbox", { name: defaultProps.firstName })
      ).toHaveAttribute("id", "firstName");
      expect(
        screen.getByRole("textbox", { name: defaultProps.lastName })
      ).toHaveAttribute("id", "lastName");
      expect(screen.getByRole("textbox", { name: "Email" })).toHaveAttribute(
        "id",
        "email"
      );
      expect(
        screen.getByRole("textbox", { name: defaultProps.message })
      ).toHaveAttribute("id", "message");
    });
  });

  describe("Form Validation", () => {
    it("should show validation errors when required fields are empty", async () => {
      const user = userEvent.setup();
      render(<Form {...defaultProps} />);

      const submitButton = screen.getByRole("button", {
        name: defaultProps.send,
      });
      await user.click(submitButton);

      await waitFor(() => {
        expect(
          screen.getByText(defaultProps.firstNameError)
        ).toBeInTheDocument();
        expect(
          screen.getByText(defaultProps.lastNameError)
        ).toBeInTheDocument();
        expect(screen.getByText(defaultProps.emailError)).toBeInTheDocument();
        expect(screen.getByText(defaultProps.subjectError)).toBeInTheDocument();
        expect(screen.getByText(defaultProps.messageError)).toBeInTheDocument();
      });
    });
  });

  describe("Form Submission", () => {
    it("should not submit form when validation fails", async () => {
      const user = userEvent.setup();
      render(<Form {...defaultProps} />);

      const submitButton = screen.getByRole("button", {
        name: defaultProps.send,
      });
      await user.click(submitButton);

      await waitFor(() => {
        expect(
          screen.getByText(defaultProps.firstNameError)
        ).toBeInTheDocument();
      });

      expect(mockFetch).not.toHaveBeenCalled();
    });
  });

  describe("CSS Classes", () => {
    it("should apply input styles to all input fields", () => {
      render(<Form {...defaultProps} />);

      const expectedInputClass =
        "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-white leading-tight focus:outline-none focus:shadow-outline";

      expect(
        screen.getByRole("textbox", { name: defaultProps.firstName })
      ).toHaveClass(expectedInputClass);
      expect(
        screen.getByRole("textbox", { name: defaultProps.lastName })
      ).toHaveClass(expectedInputClass);
      expect(screen.getByRole("textbox", { name: "Email" })).toHaveClass(
        expectedInputClass
      );
    });

    it("should apply textarea styles to message field", () => {
      render(<Form {...defaultProps} />);

      const messageField = screen.getByRole("textbox", {
        name: defaultProps.message,
      });
      expect(messageField).toHaveClass(
        "block",
        "p-2.5",
        "w-full",
        "text-sm",
        "text-gray-900",
        "bg-white",
        "h-24",
        "rounded-lg",
        "border",
        "border-gray-300"
      );
    });
  });

  describe("Error Display", () => {
    it("should display error messages with correct styling", async () => {
      const user = userEvent.setup();
      render(<Form {...defaultProps} />);

      const submitButton = screen.getByRole("button", {
        name: defaultProps.send,
      });
      await user.click(submitButton);

      await waitFor(() => {
        const errorMessages = screen.getAllByText(/required/);
        errorMessages.forEach((errorMessage) => {
          expect(errorMessage).toHaveClass("text-rose-500");
        });
      });
    });

    it("should not display error messages initially", () => {
      render(<Form {...defaultProps} />);

      expect(
        screen.queryByText(defaultProps.firstNameError)
      ).not.toBeInTheDocument();
      expect(
        screen.queryByText(defaultProps.lastNameError)
      ).not.toBeInTheDocument();
      expect(
        screen.queryByText(defaultProps.emailError)
      ).not.toBeInTheDocument();
      expect(
        screen.queryByText(defaultProps.subjectError)
      ).not.toBeInTheDocument();
      expect(
        screen.queryByText(defaultProps.messageError)
      ).not.toBeInTheDocument();
    });
  });

  describe("Props Integration", () => {
    it("should use custom prop values for labels and errors", () => {
      const customProps = {
        ...defaultProps,
        firstName: "Given Name",
        firstNameError: "Given name is mandatory",
      };

      render(<Form {...customProps} />);

      expect(screen.getByLabelText("Given Name")).toBeInTheDocument();
      expect(screen.queryByLabelText("First Name")).not.toBeInTheDocument();
    });

    it("should render submit button with custom text", () => {
      const customProps = {
        ...defaultProps,
        send: "Submit Form",
      };

      render(<Form {...customProps} />);

      expect(
        screen.getByRole("button", { name: "Submit Form" })
      ).toBeInTheDocument();
      expect(
        screen.queryByRole("button", { name: "Send" })
      ).not.toBeInTheDocument();
    });
  });
});