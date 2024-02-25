import AboutPage from "@/pages/about";
import { render, screen } from "@testing-library/react";

describe("About Page", () => {
  it("should render the About Page", () => {
    const { asFragment } = render(<AboutPage />);
    expect(asFragment()).toMatchSnapshot();
  });
});
