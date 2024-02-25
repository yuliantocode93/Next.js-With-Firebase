import ProductPage from "@/pages/product";
import { render } from "@testing-library/react";

jest.mock("next/router", () => ({
  useRouter: jest.fn(() => ({
    route: "/product",
    pathname: "",
    query: "",
    asPath: "",
    push: jest.fn(),
    events: {
      on: jest.fn(),
      off: jest.fn(),
    },
    beforePopState: jest.fn(() => null),
    prefetch: jest.fn(() => null),
    isReady: true,
  })),
}));

describe("Product Page", () => {
  it("should render the Product Page", () => {
    const page = render(<ProductPage />);
    expect(page).toMatchSnapshot();
  });
});
