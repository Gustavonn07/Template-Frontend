import { render, screen, waitFor } from "@testing-library/react";
import { Avatar, AvatarImage, AvatarFallback } from "../../components/ui";

const AvatarComponent = () => {
  return (
    <Avatar data-testid="avatar">
      <AvatarImage src="https://github.com/shadcn.png" alt="User Avatar" />
      <AvatarFallback>NA</AvatarFallback>
    </Avatar>
  );
};

describe("Avatar Component", () => {
  it("renderiza o Avatar corretamente", () => {
    render(<AvatarComponent />);
    const avatarElement = screen.getByTestId("avatar");
    expect(avatarElement).toBeInTheDocument();
  });

  it("renderiza a imagem do Avatar", async () => {
    render(<AvatarComponent />);
    waitFor(() => {
      const imageElement = screen.getByRole("img");
      expect(imageElement).toHaveAttribute(
        "src",
        "https://github.com/shadcn.png"
      );
      expect(imageElement).toHaveAttribute("alt", "User Avatar");
    });
  });

  it("renderiza o fallback quando a imagem falha", () => {
    render(
      <Avatar>
        <AvatarImage src="" alt="User Avatar" />
        <AvatarFallback>NA</AvatarFallback>
      </Avatar>
    );

    const fallbackElement = screen.getByText("NA");
    expect(fallbackElement).toBeInTheDocument();
  });

  it("renderiza todas as classes do Avatar", () => {
    render(<AvatarComponent />);
    const avatarElement = screen.getByTestId("avatar");
    expect(avatarElement).toHaveClass(
      "relative",
      "flex",
      "h-10",
      "w-10",
      "shrink-0",
      "overflow-hidden",
      "rounded-full"
    );
  });
});
